import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";
import CursorSpotlight from "./CursorSpotlight";
import LoadingScreen from "./LoadingScreen";
import ScrollToHash from "./ScrollToHash";

function Layout() {
  return (
    <div className="relative min-h-screen bg-background text-primary">
      <ScrollToHash />

      <LoadingScreen />
      <AnimatedBackground />
      <CursorSpotlight />

      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;