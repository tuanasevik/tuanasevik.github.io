const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/img';
const outputDir = './public/img-optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath, quality = 80) {
  try {
    await sharp(inputPath)
      .jpeg({ quality, progressive: true })
      .webp({ quality })
      .toFile(outputPath.replace('.jpg', '.webp'));
    
    console.log(`✅ Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  const directories = ['hero-page', 'about-page', 'projects-page', 'travel-page'];
  
  for (const dir of directories) {
    const dirPath = path.join(inputDir, dir);
    const outputDirPath = path.join(outputDir, dir);
    
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true });
    }
    
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      
      for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
          const inputPath = path.join(dirPath, file);
          const outputPath = path.join(outputDirPath, file);
          
          await optimizeImage(inputPath, outputPath);
        }
      }
    }
  }
  
  console.log('🎉 Image optimization complete!');
}

optimizeAllImages();
