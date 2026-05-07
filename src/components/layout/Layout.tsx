import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;