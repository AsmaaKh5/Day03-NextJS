"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="text-center mt-5">
      <h1 className="mb-4">Login</h1>
      <button
        className="btn btn-dark btn-lg"
        onClick={() => signIn("github", { callbackUrl: "/" })}
      >
        Sign In with GitHub 🐙
      </button>
    </div>
  );
}