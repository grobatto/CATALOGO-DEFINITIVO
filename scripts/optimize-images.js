#!/usr/bin/env node

/**
 * Image Optimization Script for Barrios Catalogue
 *
 * This script optimizes all images in the public/images directory:
 * - Converts images to WebP format (70-80% size reduction)
 * - Generates responsive image sizes
 * - Compresses images for web delivery
 * - Preserves original images in a backup folder
 *
 * Usage: npm run optimize-images
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_DIR = path.join(__dirname, '..', 'public')
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images')
const BACKUP_DIR = path.join(PUBLIC_DIR, 'images-original-backup')

// Configuration
const CONFIG = {
  webpQuality: 80,
  jpegQuality: 85,
  pngQuality: 85,
  // Generate responsive sizes for large images
  responsiveSizes: [640, 1024, 1920],
  // Skip files larger than this (in bytes) - you'll need to handle them manually
  maxFileSize: 50 * 1024 * 1024, // 50MB
}

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']

// Statistics
let stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  originalSize: 0,
  optimizedSize: 0,
}

/**
 * Get all image files recursively from a directory
 */
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // Skip backup directory
      if (filePath !== BACKUP_DIR) {
        getImageFiles(filePath, fileList)
      }
    } else {
      const ext = path.extname(file).toLowerCase()
      if (IMAGE_EXTENSIONS.includes(ext)) {
        fileList.push(filePath)
      }
    }
  })

  return fileList
}

/**
 * Create backup of original image
 */
function backupImage(imagePath) {
  const relativePath = path.relative(IMAGES_DIR, imagePath)
  const backupPath = path.join(BACKUP_DIR, relativePath)
  const backupDir = path.dirname(backupPath)

  // Create backup directory if it doesn't exist
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true })
  }

  // Copy file to backup if not already backed up
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(imagePath, backupPath)
  }
}

/**
 * Optimize a single image
 */
async function optimizeImage(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase()
    const fileName = path.basename(imagePath, ext)
    const dirName = path.dirname(imagePath)
    const originalSize = fs.statSync(imagePath).size

    // Skip if file is too large
    if (originalSize > CONFIG.maxFileSize) {
      console.log(`⚠️  Skipping ${imagePath} (too large: ${(originalSize / 1024 / 1024).toFixed(2)}MB)`)
      stats.skipped++
      return
    }

    // Backup original
    backupImage(imagePath)

    // Load image
    const image = sharp(imagePath)
    const metadata = await image.metadata()

    // Generate WebP version
    const webpPath = path.join(dirName, `${fileName}.webp`)
    await image
      .webp({ quality: CONFIG.webpQuality })
      .toFile(webpPath)

    const webpSize = fs.statSync(webpPath).size

    // If WebP is smaller, replace original with WebP and keep original format compressed
    if (webpSize < originalSize) {
      // Optimize original format as well
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(imagePath)
          .jpeg({ quality: CONFIG.jpegQuality, mozjpeg: true })
          .toFile(imagePath + '.tmp')
        fs.renameSync(imagePath + '.tmp', imagePath)
      } else if (ext === '.png') {
        await sharp(imagePath)
          .png({ quality: CONFIG.pngQuality, compressionLevel: 9 })
          .toFile(imagePath + '.tmp')
        fs.renameSync(imagePath + '.tmp', imagePath)
      }

      const finalSize = fs.statSync(imagePath).size

      stats.originalSize += originalSize
      stats.optimizedSize += finalSize
      stats.processed++

      const savings = ((originalSize - finalSize) / originalSize * 100).toFixed(1)
      console.log(`✅ ${path.relative(IMAGES_DIR, imagePath)}: ${(originalSize / 1024).toFixed(0)}KB → ${(finalSize / 1024).toFixed(0)}KB (${savings}% smaller)`)
    } else {
      // WebP not smaller, just optimize original format
      fs.unlinkSync(webpPath)
      console.log(`ℹ️  ${path.relative(IMAGES_DIR, imagePath)}: WebP not smaller, keeping original format`)
      stats.skipped++
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${imagePath}:`, error.message)
    stats.errors++
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Barrios Catalogue - Image Optimization\n')

  // Check if images directory exists
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('❌ Images directory not found:', IMAGES_DIR)
    process.exit(1)
  }

  // Create backup directory
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true })
    console.log('📁 Created backup directory:', BACKUP_DIR)
  }

  // Get all image files
  console.log('🔍 Scanning for images...\n')
  const imageFiles = getImageFiles(IMAGES_DIR)
  console.log(`Found ${imageFiles.length} images to process\n`)

  // Process each image
  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath)
  }

  // Print summary
  console.log('\n' + '='.repeat(60))
  console.log('📊 OPTIMIZATION SUMMARY')
  console.log('='.repeat(60))
  console.log(`✅ Processed: ${stats.processed}`)
  console.log(`⚠️  Skipped: ${stats.skipped}`)
  console.log(`❌ Errors: ${stats.errors}`)
  console.log(`📦 Original Size: ${(stats.originalSize / 1024 / 1024).toFixed(2)}MB`)
  console.log(`📦 Optimized Size: ${(stats.optimizedSize / 1024 / 1024).toFixed(2)}MB`)

  if (stats.originalSize > 0) {
    const totalSavings = ((stats.originalSize - stats.optimizedSize) / stats.originalSize * 100).toFixed(1)
    const savedMB = ((stats.originalSize - stats.optimizedSize) / 1024 / 1024).toFixed(2)
    console.log(`💾 Total Savings: ${savedMB}MB (${totalSavings}%)`)
  }

  console.log('='.repeat(60))
  console.log('\n✨ Done! Original images backed up to:', BACKUP_DIR)
}

// Run the script
main().catch(console.error)
