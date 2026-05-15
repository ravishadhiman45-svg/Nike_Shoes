#!/bin/bash

# Setup script for Premium Sneaker Showcase
# This script helps you quickly set up frame images for testing

echo "🚀 Premium Sneaker Showcase - Image Setup"
echo "=========================================="
echo ""

# Check if Images directory exists
if [ ! -d "public/Images" ]; then
    echo "📁 Creating Images directory..."
    mkdir -p public/Images
fi

# Option 1: Copy existing project images
if [ -d "src/assets/images" ]; then
    echo "✅ Found existing images in src/assets/images"
    echo ""
    echo "Choose an option:"
    echo "1) Copy big-shoe images and duplicate for testing"
    echo "2) I'll add my own frame sequence manually"
    echo ""
    read -p "Enter choice (1 or 2): " choice
    
    if [ "$choice" = "1" ]; then
        echo ""
        echo "📸 Copying and duplicating images for testing..."
        
        # Copy the first big shoe image
        if [ -f "src/assets/images/big-shoe1.png" ]; then
            # Convert PNG to JPG and duplicate 120 times
            for i in {1..120}; do
                cp "src/assets/images/big-shoe1.png" "public/Images/Images_$(printf "%03d" $i).jpg"
            done
            echo "✅ Created 120 test frames from big-shoe1.png"
        else
            echo "❌ big-shoe1.png not found"
        fi
    else
        echo ""
        echo "📝 Manual setup instructions:"
        echo "1. Add your frame images to: public/Images/"
        echo "2. Name them: Images_001.jpg, Images_002.jpg, etc."
        echo "3. Recommended: 60-120 frames"
        echo ""
        echo "See SETUP_GUIDE.md for detailed instructions"
    fi
else
    echo "📝 No existing images found."
    echo ""
    echo "Please add your frame sequence to: public/Images/"
    echo "Name format: Images_001.jpg, Images_002.jpg, etc."
    echo ""
    echo "See SETUP_GUIDE.md for detailed instructions on:"
    echo "  - Extracting frames from video"
    echo "  - Creating frames from 3D renders"
    echo "  - Using photography turntable"
fi

echo ""
echo "=========================================="
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Run: npm install"
echo "2. Run: npm run dev"
echo "3. Visit: http://localhost:3000"
echo ""
echo "📖 For more help, see SETUP_GUIDE.md"
