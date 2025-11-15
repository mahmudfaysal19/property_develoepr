#!/usr/bin/env node
import dotenv from 'dotenv';
dotenv.config();

import { prisma } from '../config/prismaConfig.js';

// Usage: node scripts/updateImage.mjs "Title" "https://.../image.jpg"
const [, , title, imageUrl] = process.argv;

if (!title || !imageUrl) {
  console.error('Usage: node scripts/updateImage.mjs "Title" "https://.../image.jpg"');
  process.exit(1);
}

async function main() {
  console.log(`Updating residencies with title: "${title}" -> image: ${imageUrl}`);
  const res = await prisma.residency.updateMany({
    where: { title },
    data: { image: imageUrl },
  });

  console.log('Matched:', res.count, 'documents updated.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
