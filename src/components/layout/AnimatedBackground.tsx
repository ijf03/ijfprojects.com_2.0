function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="bg-core-glow absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl sm:h-96 sm:w-96" />

      <div className="bg-grid-pattern absolute inset-0 opacity-30" />

      <div className="floating-orb orb-one" />
      <div className="floating-orb orb-two" />
      <div className="floating-orb orb-three" />
    </div>
  );
}

export default AnimatedBackground;