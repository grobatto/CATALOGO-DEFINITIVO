import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const imagesDir = path.join(__dirname, '../public/images')

// Folders to keep completely (loaded dynamically)
const keepFolders = [
  'PIEZAS GRANDES',
  'bases-metal',
  'torres',
  'cortados',
  'corazones',
  'chapas',
  'esferas',
  'piramides',
  'huevos',
  'preformados',
  'home-deco',
  'estalactitas',
  'bultos',
  'categoria-a',
  'categoria-b',
  'categoria-c'
]

// Root images to keep
const keepRootImages = [
  'maincat.png',
  'main.png',
  'hero-bg.jpg',
  'gallery_03.jpg',
  'gallery_02.png'
]

console.log('🧹 Cleaning up unused images...\n')

// Get all items in images directory
const items = fs.readdirSync(imagesDir)

let deletedCount = 0
let keptCount = 0

items.forEach(item => {
  const itemPath = path.join(imagesDir, item)
  const stat = fs.statSync(itemPath)

  if (stat.isDirectory()) {
    // Check if this folder should be kept
    if (!keepFolders.includes(item)) {
      console.log(`🗑️  Removing unused folder: ${item}`)
      fs.rmSync(itemPath, { recursive: true, force: true })
      deletedCount++
    } else {
      console.log(`✅ Keeping folder: ${item}`)
      keptCount++
    }
  } else if (stat.isFile()) {
    // Check if this root file should be kept
    if (!keepRootImages.includes(item) && !item.startsWith('.')) {
      console.log(`🗑️  Removing unused file: ${item}`)
      fs.unlinkSync(itemPath)
      deletedCount++
    } else {
      console.log(`✅ Keeping file: ${item}`)
      keptCount++
    }
  }
})

console.log(`\n✨ Cleanup complete!`)
console.log(`✅ Kept: ${keptCount} items`)
console.log(`🗑️  Removed: ${deletedCount} items`)
