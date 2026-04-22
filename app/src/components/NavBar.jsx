import Link from "next/link";
import { getSession } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

export default async function NavBar() {
  const session = await getSession();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          MyApp
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            {session && (
              <li className="nav-item">
                <Link className="nav-link" href="/products">Products</Link>
              </li>
            )}
          </ul>
          <div className="d-flex">
            {session ? (
              <div className="d-flex align-items-center gap-3">
                <span className="text-white">
                  Hello, {session.user.name} 👋
                </span>
                <LogoutButton />
              </div>
            ) : (
              <Link href="/login" className="btn btn-outline-light btn-sm">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}