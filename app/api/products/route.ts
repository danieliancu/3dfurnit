import { NextResponse } from 'next/server';
import products from '../../../lib/generated-products.json';

export async function GET() {
    try {
        return NextResponse.json(products);
    } catch (error) {
        console.error("Error reading products:", error);
        return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
    }
}
