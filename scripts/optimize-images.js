import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, parse } from 'path';
import { existsSync } from 'fs';

/**
 * Image Optimization Script for La Crème Restaurant
 *
 * Processes images from public/images-original/ and outputs optimized versions
 * to public/images/ in multiple sizes and formats (WebP and JPEG).
 *
 * Usage:
 * 1. Place original high-res images in public/images-original/[hero|menu|gallery]
 * 2. Run: npm run optimize-images
 * 3. Optimized images will be generated in public/images/[hero|menu|gallery]
 *
 * Output sizes: 400w, 800w, 1200w
 * Formats: WebP (quality: 80), JPEG (quality: 85)
 */

const SIZES = [
  { width: 400, suffix: '-400w' },
  { width: 800, suffix: '-800w' },
  { width: 1200, suffix: '-1200w' }
];

const QUALITY_WEBP = 80;
const QUALITY_JPEG = 85;

const DIRECTORIES = ['hero', 'menu', 'gallery'];

async function ensureDirectory(path) {
  if (!existsSync(path)) {
    await mkdir(path, { recursive: true });
    console.log(`✓ Created directory: ${path}`);
  }
}

async function processImage(inputPath, outputDir, filename) {
  const { name } = parse(filename);

  // Skip already optimized files
  if (name.includes('-400w') || name.includes('-800w') || name.includes('-1200w')) {
    return;
  }

  console.log(`\nProcessing: ${filename}`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`  Original: ${metadata.width}x${metadata.height} (${metadata.format})`);

    for (const size of SIZES) {
      const baseName = `${name}${size.suffix}`;

      // Generate WebP
      const webpPath = join(outputDir, `${baseName}.webp`);
      await image
        .clone()
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY_WEBP })
        .toFile(webpPath);

      console.log(`  ✓ Generated: ${baseName}.webp`);

      // Generate JPEG
      const jpegPath = join(outputDir, `${baseName}.jpg`);
      await image
        .clone()
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: QUALITY_JPEG, progressive: true })
        .toFile(jpegPath);

      console.log(`  ✓ Generated: ${baseName}.jpg`);
    }

    console.log(`  ✓ Completed: ${filename}`);
  } catch (error) {
    console.error(`  ✗ Error processing ${filename}:`, error.message);
  }
}

async function processDirectory(dir, subdir = '') {
  const inputDir = join(process.cwd(), 'public', 'images-original', dir, subdir);
  const outputDir = join(process.cwd(), 'public', 'images', dir, subdir);

  // Check if input directory exists
  if (!existsSync(inputDir)) {
    console.log(`\n⚠ Skipping ${dir}${subdir ? '/' + subdir : ''}: No input directory found`);
    return;
  }

  const files = await readdir(inputDir, { withFileTypes: true });
  const imageFiles = files.filter(f =>
    f.isFile() && /\.(jpg|jpeg|png)$/i.test(f.name)
  );
  const subdirs = files.filter(f => f.isDirectory());

  // Process images in current directory
  if (imageFiles.length > 0) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Processing ${dir.toUpperCase()}${subdir ? '/' + subdir : ''} (${imageFiles.length} images)`);
    console.log('='.repeat(60));

    // Ensure output directory exists
    await ensureDirectory(outputDir);

    // Process each image
    for (const file of imageFiles) {
      const inputPath = join(inputDir, file.name);
      await processImage(inputPath, outputDir, file.name);
    }
  }

  // Recursively process subdirectories
  for (const subDirectory of subdirs) {
    await processDirectory(dir, join(subdir, subDirectory.name));
  }
}

async function main() {
  console.log('\n' + '='.repeat(60));
  console.log('LA CRÈME - IMAGE OPTIMIZATION');
  console.log('='.repeat(60));
  console.log(`\nConfiguration:`);
  console.log(`  Sizes: ${SIZES.map(s => `${s.width}w`).join(', ')}`);
  console.log(`  WebP Quality: ${QUALITY_WEBP}`);
  console.log(`  JPEG Quality: ${QUALITY_JPEG}`);
  console.log(`  Directories: ${DIRECTORIES.join(', ')}`);

  const startTime = Date.now();

  // Process each directory
  for (const dir of DIRECTORIES) {
    await processDirectory(dir);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\n' + '='.repeat(60));
  console.log(`✓ IMAGE OPTIMIZATION COMPLETE`);
  console.log(`  Duration: ${duration}s`);
  console.log('='.repeat(60));
  console.log('\nNext steps:');
  console.log('  1. Review optimized images in public/images/');
  console.log('  2. Update image paths in components to use new sizes');
  console.log('  3. Use <picture> elements with srcset for responsive images\n');
}

main().catch(error => {
  console.error('\n✗ Error:', error.message);
  process.exit(1);
});
