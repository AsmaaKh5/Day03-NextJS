import NavBar from "@/components/NavBar";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps:{session,...pageProps} }) {
  useEffect(() => {
    import("../../node_modules/bootstrap/dist/js/bootstrap.min.js");
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <SessionProvider session={session}>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
