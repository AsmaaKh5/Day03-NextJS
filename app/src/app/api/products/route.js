import dbConnect from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

// GET ALL
export async function GET() {
  await dbConnect();
  const products = await Product.find();
  return NextResponse.json(products);
}

// POST - CREATE
export async function POST(request) {
  await dbConnect();
  const body = await request.json();
  const product = await Product.create(body);
  return NextResponse.json(product, { status: 201 });
}