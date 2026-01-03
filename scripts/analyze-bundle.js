const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Check if build folder exists
const buildPath = path.resolve(__dirname, '../build');
if (!fs.existsSync(buildPath)) {
  console.log('❌ Build folder not found. Please run "npm run build" first.');
  process.exit(1);
}

console.log('📊 Starting bundle analysis...');
console.log('This will open a visual representation of your bundle in the browser.\n');

// Use webpack-bundle-analyzer on the build output
try {
  execSync('npx webpack-bundle-analyzer build/static/js/*.js', {
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..')
  });
} catch (error) {
  console.error('❌ Error running bundle analyzer:', error.message);
  process.exit(1);
}

