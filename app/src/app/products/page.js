import Link from "next/link";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import DeleteButton from "@/components/DeleteButton";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const products = await getProducts();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Products</h1>
        <Link href="/products/add" className="btn btn-success">
          + Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="alert alert-info">No products yet. Add one!</div>
      ) : (
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>{p.title}</td>
                <td>${p.price}</td>
                <td>{p.description}</td>
                <td>
                  <Link
                    href={`/products/${p._id}/edit`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <DeleteButton id={p._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}