#!/bin/bash

echo "🚀 Starting Eleventy build..."
echo "📁 Current directory: $(pwd)"
echo "📂 Checking directory structure..."

if [ -d "src" ]; then
    echo "✅ src/ directory exists"
else
    echo "❌ src/ directory missing"
    exit 1
fi

if [ -d "src/layouts" ]; then
    echo "✅ src/layouts/ directory exists"
    echo "📄 Templates found:"
    ls -la src/layouts/
else
    echo "❌ src/layouts/ directory missing"
    exit 1
fi

if [ -d "src/config" ]; then
    echo "✅ src/config/ directory exists"
    echo "📄 Data files found:"
    ls -la src/config/
else
    echo "❌ src/config/ directory missing"
    exit 1
fi

echo "🔧 Installing dependencies..."
npm install

echo "🏗️ Building with Eleventy..."
npx @11ty/eleventy

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Output directory contents:"
    ls -la _site/
else
    echo "❌ Build failed!"
    exit 1
fi
