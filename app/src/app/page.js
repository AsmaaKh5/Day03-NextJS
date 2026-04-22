import { getSession } from "@/lib/auth";
import Link from "next/link";

export default async function HomePage() {
  const session = await getSession();

  if (!session) {
    return (
      <div className="text-center mt-5">
        <h1>Welcome 👋</h1>
        <p className="text-muted mb-4">Please login to continue</p>
        <Link href="/login" className="btn btn-dark btn-lg">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h1>Hello, {session.user.name} 👋</h1>
      <p className="text-muted">Email: {session.user.email}</p>
      <Link href="/products" className="btn btn-dark mt-3">
        Go to Products
      </Link>
    </div>
  );
}