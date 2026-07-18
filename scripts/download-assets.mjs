import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const assets = [
  {
    url: 'https://todayrunclub.com/wp-content/uploads/2025/01/logo-1-300x300.png',
    dest: 'public/images/logo.png'
  },
  {
    url: 'https://todayrunclub.com/wp-content/uploads/2025/01/110701222.webp',
    dest: 'public/images/hero-background.webp'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(projectRoot, dest);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(fullPath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${dest}`);
          resolve();
        });
      } else {
        file.close();
        fs.unlink(fullPath, () => {});
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(fullPath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Downloading assets...\n');
  
  for (const asset of assets) {
    try {
      await downloadFile(asset.url, asset.dest);
    } catch (error) {
      console.error(`✗ Failed: ${asset.dest} - ${error.message}`);
    }
  }
  
  console.log('\n✓ Asset download complete!');
}

downloadAll();
