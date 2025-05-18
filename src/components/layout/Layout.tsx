
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ThemeProvider } from "../theme/ThemeProvider";

export function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="a-zone-theme">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
