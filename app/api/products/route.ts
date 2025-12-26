import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Product } from '../../../types';

// Helper to scan directories recursively or just one level
const getProducts = () => {
    const modelsDir = path.join(process.cwd(), 'public', 'models');
    const imagesDir = path.join(process.cwd(), 'public', 'images');

    const categories = ['beds', 'chairs', 'lamps', 'cabinets', 'tables'];
    const products: Product[] = [];

    categories.forEach(category => {
        const catModelDir = path.join(modelsDir, category);
        const catImageDir = path.join(imagesDir, category);

        if (fs.existsSync(catModelDir)) {
            const files = fs.readdirSync(catModelDir);

            files.forEach(file => {
                if (file.endsWith('.glb')) {
                    const id = path.parse(file).name; // ID is the filename without extension

                    // Check for image with same name (png or jpg)
                    let imagePath = '';
                    if (fs.existsSync(path.join(catImageDir, `${id}.png`))) {
                        imagePath = `/images/${category}/${id}.png`;
                    } else if (fs.existsSync(path.join(catImageDir, `${id}.jpg`))) {
                        imagePath = `/images/${category}/${id}.jpg`;
                    } else {
                        // Fallback placeholder if no image found
                        imagePath = '/api/placeholder/400/320';
                    }

                    products.push({
                        id: `${category}-${id}`, // Unique ID composed of category and filename
                        name: id.replace(/-/g, ' ').replace(/_/g, ' '), // Human readable name from file
                        category: category as any,
                        price: Math.floor(Math.random() * (200 - 100 + 1)) + 100,
                        dimensions: {
                            width: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
                            height: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
                            depth: Math.floor(Math.random() * (100 - 30 + 1)) + 30
                        },
                        image: imagePath,
                        glbModel: `/models/${category}/${file}`,
                        description: 'Item automatically detected from library.',
                        dateAdded: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString()
                    });
                }
            });
        }
    });

    return products;
};

export async function GET() {
    try {
        const products = getProducts();
        // Also include hardcoded ones if needed, or rely entirely on files
        // For now, let's just return file-based ones to prove it works
        // Or we can merge with constants.ts if we want to keep "fancy" demo data

        return NextResponse.json(products);
    } catch (error) {
        console.error("Error reading products:", error);
        return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
    }
}
