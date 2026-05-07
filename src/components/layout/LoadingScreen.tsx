import { motion } from "framer-motion";
import { profile } from "../../data/profile";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-brand text-2xl font-bold text-brand shadow-[0_0_40px_rgba(44,181,160,0.25)]">
          {profile.initials}
        </div>

        <p className="text-secondary text-sm uppercase tracking-[0.3em]">
          Loading Portfolio
        </p>
      </motion.div>
    </motion.div>
  );
}

export default LoadingScreen;