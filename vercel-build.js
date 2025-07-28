#!/usr/bin/env node

// Vercel build script for full-stack app
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔨 Building frontend...');
execSync('vite build', { stdio: 'inherit' });

console.log('🔨 Building backend...');
execSync('esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

console.log('✅ Build complete!');

// Ensure api directory exists for Vercel routing
const apiDir = path.join(process.cwd(), 'api');
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir, { recursive: true });
}

console.log('🚀 Ready for Vercel deployment!');