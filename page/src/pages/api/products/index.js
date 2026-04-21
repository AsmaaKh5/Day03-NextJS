import dbConnect from "@/lib/mongodb"
import Product from "@/models/product";

export default async function  handler(req,res) {
    await dbConnect();
    if(req.method === 'GET'){
        const products = await Product.find()  // create()
        return res.status(200).json(products)
    }
    
}