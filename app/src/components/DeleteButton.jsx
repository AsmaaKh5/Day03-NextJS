"use client";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <button className="btn btn-danger btn-sm" onClick={handleDelete}>
      Delete
    </button>
  );
}