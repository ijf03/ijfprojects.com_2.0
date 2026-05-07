import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function PageTransition() {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      className="pointer-events-none fixed inset-0 z-[998] origin-left bg-brand"
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    />
  );
}

export default PageTransition;