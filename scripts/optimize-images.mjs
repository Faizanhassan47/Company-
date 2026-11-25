import sharp from 'sharp';
import { access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const images = ['dome', 'warehouse', 'sap-b1', 'matrix'];
for (const name of images) {
  const source = new URL(`../public/projects/${name}.jpg`, import.meta.url);
  await access(source);
  await sharp(fileURLToPath(source)).resize({ width: 960, withoutEnlargement: true }).avif({ quality: 58 })
    .toFile(fileURLToPath(new URL(`../public/projects/${name}.avif`, import.meta.url)));
  await sharp(fileURLToPath(source)).resize({ width: 960, withoutEnlargement: true }).webp({ quality: 72 })
    .toFile(fileURLToPath(new URL(`../public/projects/${name}.webp`, import.meta.url)));
}

const og = new URL('../public/og-image.jpg', import.meta.url);
await sharp(fileURLToPath(og)).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 78, progressive: true })
  .toFile(fileURLToPath(new URL('../public/og-image-optimized.jpg', import.meta.url)));
console.log('Generated optimized project and social images.');
