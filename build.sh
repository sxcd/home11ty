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

if [ -d "src/includes" ]; then
    echo "✅ src/includes/ directory exists"
    echo "📄 Templates found:"
    ls -la src/includes/
else
    echo "❌ src/includes/ directory missing"
    exit 1
fi

if [ -d "src/data" ]; then
    echo "✅ src/data/ directory exists"
    echo "📄 Data files found:"
    ls -la src/data/
else
    echo "❌ src/data/ directory missing"
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
