import NavBar from "@/components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata = {
  title: "Next.js CRUD App",
  description: "CRUD with Next-Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="container mt-4">{children}</div>
        <BootstrapClient />
      </body>
    </html>
  );
}