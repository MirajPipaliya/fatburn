

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center text-center px-6 py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/image/image2.jpg')`,
      }}
    >
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none animate-glow-pulse" style={{ animationDelay: '-4s' }}></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 z-10 animate-fade-in-up">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-widest leading-none uppercase font-sans">
          Welcome to <span className="bg-gradient-to-r from-brand-red via-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(205,0,0,0.3)]">Fatburn</span>
        </h1>

        {/* Tagline */}
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed tracking-wide mt-2">
          Your body can handle almost anything — it's your mind you have to convince.
          <br className="hidden sm:inline" />
          <span className="text-white font-semibold"> Don't stop when you're tired, stop when you're done.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <a
            href="#product"
            className="w-48 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-brand-red hover:bg-brand-darkred hover:shadow-[0_0_25px_rgba(205,0,0,0.45)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Subscribe</span>
          </a>
          <a
            href="#contact"
            className="w-48 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-zinc-300 border-2 border-zinc-800 hover:border-zinc-500 hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Contact Us</span>
          </a>
        </div>

      </div>

      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
    </section>
  );
}
