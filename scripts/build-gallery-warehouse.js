#!/usr/bin/env node
/**
 * Build a flat URL list from the all-events warehouse manifest.
 *
 * Usage:
 *   node scripts/build-gallery-warehouse.js
 *   node scripts/build-gallery-warehouse.js --markdown
 */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const manifestPath = path.join(root, 'data', 'fca-pnj-all-events-gallery-warehouse.json');
const outputTxtPath = path.join(root, 'data', 'fca-pnj-all-events-image-urls.txt');
const outputMdPath = path.join(root, 'data', 'fca-pnj-all-events-image-urls.md');

function main() {
  if (!fs.existsSync(manifestPath)) {
    console.error(`Manifest not found: ${manifestPath}`);
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const events = Array.isArray(manifest.events) ? manifest.events : [];

  const lines = [];
  const mdLines = ['# FCA PNJ All-Events Image URLs', ''];

  for (const event of events) {
    const title = event.title || 'Untitled Event';
    const date = event.date || 'unknown-date';
    const images = Array.isArray(event.images) ? event.images : [];

    mdLines.push(`## ${title} (${date})`);
    if (images.length === 0) {
      mdLines.push('- No images listed');
      mdLines.push('');
      continue;
    }

    for (const url of images) {
      lines.push(url);
      mdLines.push(`- ${url}`);
    }
    mdLines.push('');
  }

  fs.writeFileSync(outputTxtPath, `${lines.join('\n')}\n`, 'utf8');
  console.log(`Wrote URL list: ${outputTxtPath}`);

  if (process.argv.includes('--markdown')) {
    fs.writeFileSync(outputMdPath, `${mdLines.join('\n')}\n`, 'utf8');
    console.log(`Wrote markdown list: ${outputMdPath}`);
  }
}

main();
