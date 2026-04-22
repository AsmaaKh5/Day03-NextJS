"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="text-center mt-5">
      <h1 className="alert alert-danger">404 - Page Not Found</h1>
      <p>OOPS, Something Wrong</p>
      <button
        className="btn btn-dark w-100"
        onClick={() => router.replace("/")}
      >
        Back To Home
      </button>
    </div>
  );
}