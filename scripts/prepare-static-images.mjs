import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcDir = '/Users/juansebastiangiraldoturriago/Documents/sexto-vento/src/assets/images';
const outDishes = '/Users/juansebastiangiraldoturriago/Documents/sexto-vento/public/images/dishes';
const outHero = '/Users/juansebastiangiraldoturriago/Documents/sexto-vento/public/images/hero';

fs.mkdirSync(outDishes, { recursive: true });
fs.mkdirSync(outHero, { recursive: true });

const dishes = [
  { file: 'croissant-pistacho.jpg', name: 'croissant-pistacho' },
  { file: 'burrata-prosciutto.jpg', name: 'burrata-prosciutto' },
  { file: 'pasta-fettuccine.jpg', name: 'pasta-fettuccine' },
  { file: 'sandwich-brisket.jpg', name: 'sandwich-brisket' },
  { file: 'caramel-coffee-cocktail.jpg', name: 'caramel-coffee-cocktail' },
  { file: 'crispy-chicken.jpg', name: 'crispy-chicken' }
];

async function processImages() {
  console.log('Processing dishes...');
  for (const d of dishes) {
    const inputPath = path.join(srcDir, d.file);
    
    // WebP 600x450
    await sharp(inputPath)
      .resize(600, 450, { fit: 'cover', position: 'center' })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(outDishes, `${d.name}.webp`));

    // JPG 600x450 fallback
    await sharp(inputPath)
      .resize(600, 450, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(path.join(outDishes, `${d.name}.jpg`));

    console.log(`✓ Processed ${d.name} (.webp & .jpg)`);
  }

  // Hero Image
  console.log('Processing hero...');
  const heroInput = path.join(srcDir, 'hero-rooftop.jpg');
  
  // Mobile hero
  await sharp(heroInput)
    .resize(750, 1334, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outHero, 'hero-mobile.webp'));

  await sharp(heroInput)
    .resize(750, 1334, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(outHero, 'hero-mobile.jpg'));

  // Desktop hero
  await sharp(heroInput)
    .resize(1440, 960, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outHero, 'hero-desktop.webp'));

  await sharp(heroInput)
    .resize(1440, 960, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(outHero, 'hero-desktop.jpg'));

  console.log('✓ Hero images processed!');
}

processImages().catch(console.error);
