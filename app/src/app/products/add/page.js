"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", price: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/products");
      router.refresh();
    } else {
      setError("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500 }} className="mx-auto mt-4">
      <h2 className="mb-4">Add New Product</h2>
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
          className="btn btn-success w-100"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}