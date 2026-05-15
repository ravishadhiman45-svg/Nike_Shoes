#!/usr/bin/env python3
"""
Background Removal Script for Sneaker Images
Removes background from all PNG images (001.png to 076.png)
"""

import os
import sys
from pathlib import Path
from rembg import remove
from PIL import Image

def remove_background(input_path, output_path):
    """Remove background from a single image"""
    try:
        # Open image
        with open(input_path, 'rb') as input_file:
            input_data = input_file.read()
        
        # Remove background
        output_data = remove(input_data)
        
        # Save result
        with open(output_path, 'wb') as output_file:
            output_file.write(output_data)
        
        return True
    except Exception as e:
        print(f"Error processing {input_path}: {e}")
        return False

def main():
    # Paths
    images_dir = Path('public/Images')
    backup_dir = Path('public/Images_backup')
    
    # Create backup directory
    backup_dir.mkdir(exist_ok=True)
    
    print("🎨 Background Removal Tool")
    print("=" * 50)
    print(f"Processing images in: {images_dir}")
    print(f"Backups will be saved to: {backup_dir}")
    print("=" * 50)
    print()
    
    # Process images 001.png to 076.png
    total = 76
    success = 0
    failed = 0
    
    for i in range(1, total + 1):
        frame_num = str(i).zfill(3)
        filename = f"{frame_num}.png"
        input_path = images_dir / filename
        backup_path = backup_dir / filename
        
        if not input_path.exists():
            print(f"⚠️  Skipping {filename} - file not found")
            failed += 1
            continue
        
        print(f"Processing {filename} ({i}/{total})...", end=' ')
        
        # Backup original
        try:
            with open(input_path, 'rb') as src:
                with open(backup_path, 'wb') as dst:
                    dst.write(src.read())
        except Exception as e:
            print(f"❌ Failed to backup: {e}")
            failed += 1
            continue
        
        # Remove background
        if remove_background(input_path, input_path):
            print("✅ Done")
            success += 1
        else:
            print("❌ Failed")
            failed += 1
            # Restore from backup if failed
            try:
                with open(backup_path, 'rb') as src:
                    with open(input_path, 'wb') as dst:
                        dst.write(src.read())
            except:
                pass
    
    print()
    print("=" * 50)
    print("📊 Summary:")
    print(f"   Total: {total}")
    print(f"   ✅ Success: {success}")
    print(f"   ❌ Failed: {failed}")
    print()
    print(f"💾 Original images backed up to: {backup_dir}")
    print("=" * 50)

if __name__ == "__main__":
    main()
