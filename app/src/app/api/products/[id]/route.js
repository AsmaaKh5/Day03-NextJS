import dbConnect from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

// GET BY ID
export async function GET(request, { params }) {
  await dbConnect();
  const { id } = await params;
  const product = await Product.findById(id);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

// PUT - UPDATE
export async function PUT(request, { params }) {
  await dbConnect();
  const { id } = await params;
  const body = await request.json();
  const product = await Product.findByIdAndUpdate(id, body, { new: true });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

// DELETE
export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = await params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Deleted successfully" });
}