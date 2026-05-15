#!/bin/bash

# Quick Start Script for Premium Sneaker Showcase
# This script automates the setup process

echo "🚀 Premium Sneaker Showcase - Quick Start"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    echo "This may take a few minutes..."
    echo ""
    npm install
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Dependencies installed successfully!"
    else
        echo ""
        echo "❌ Failed to install dependencies"
        exit 1
    fi
else
    echo "✅ Dependencies already installed"
fi

echo ""

# Check if Images directory has files
IMAGE_COUNT=$(ls -1 public/Images/*.jpg 2>/dev/null | wc -l)

if [ "$IMAGE_COUNT" -lt 60 ]; then
    echo "⚠️  Warning: Only $IMAGE_COUNT frame images found"
    echo "Recommended: 60-120 images for smooth animation"
    echo ""
    echo "See SETUP_GUIDE.md for instructions on adding images"
else
    echo "✅ Found $IMAGE_COUNT frame images"
fi

echo ""
echo "=========================================="
echo "✨ Setup Complete!"
echo ""
echo "🎯 Next Steps:"
echo ""
echo "1. Start development server:"
echo "   npm run dev"
echo ""
echo "2. Open your browser:"
echo "   http://localhost:3000"
echo ""
echo "3. Customize your site:"
echo "   - Edit colors in tailwind.config.js"
echo "   - Update text in components/sections/"
echo "   - Add your images to public/Images/"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Overview"
echo "   - INSTALLATION.md - Setup guide"
echo "   - FEATURES.md - Feature list"
echo "   - SETUP_GUIDE.md - Detailed instructions"
echo ""
echo "=========================================="
echo ""

# Ask if user wants to start dev server
read -p "🚀 Start development server now? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "Starting development server..."
    echo "Press Ctrl+C to stop"
    echo ""
    npm run dev
fi
