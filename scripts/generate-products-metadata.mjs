import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateMetadata = () => {
    const rootDir = path.join(__dirname, '..');
    const modelsDir = path.join(rootDir, 'public', 'models');
    const imagesDir = path.join(rootDir, 'public', 'images');
    const outputDir = path.join(rootDir, 'lib');
    const outputFile = path.join(outputDir, 'generated-products.json');

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const categories = ['beds', 'chairs', 'lamps', 'cabinets', 'tables'];
    const products = [];

    categories.forEach(category => {
        const catModelDir = path.join(modelsDir, category);
        const catImageDir = path.join(imagesDir, category);

        if (fs.existsSync(catModelDir)) {
            const files = fs.readdirSync(catModelDir);

            files.forEach(file => {
                if (file.endsWith('.glb')) {
                    const id = path.parse(file).name;

                    let imagePath = '';
                    if (fs.existsSync(path.join(catImageDir, `${id}.png`))) {
                        imagePath = `/images/${category}/${id}.png`;
                    } else if (fs.existsSync(path.join(catImageDir, `${id}.jpg`))) {
                        imagePath = `/images/${category}/${id}.jpg`;
                    } else {
                        imagePath = '/api/placeholder/400/320';
                    }

                    products.push({
                        id: `${category}-${id}`,
                        name: id.replace(/-/g, ' ').replace(/_/g, ' '),
                        category: category,
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

    fs.writeFileSync(outputFile, JSON.stringify(products, null, 2));
    console.log(`Generated metadata for ${products.length} products to ${outputFile}`);
};

generateMetadata();
