"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const [form, setForm] = useState({ title: "", price: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/products/${params.id}`);
      const data = await res.json();
      setForm({
        title: data.title,
        price: data.price,
        description: data.description || "",
      });
      setLoading(false);
    }
    fetchProduct();
  }, [params.id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const res = await fetch(`/api/products/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/products");
      router.refresh();
    } else {
      setError("Something went wrong!");
      setSaving(false);
    }
  };

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div style={{ maxWidth: 500 }} className="mx-auto mt-4">
      <h2 className="mb-4">Edit Product</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            name="price"
            type="number"
            className="form-control"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={form.description}
            onChange={handleChange}
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="btn btn-warning w-100"
          disabled={saving}
        >
          {saving ? "Saving..." : "Update Product"}
        </button>
      </form>
    </div>
  );
}