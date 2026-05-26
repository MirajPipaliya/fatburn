import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-zinc-950/60 py-24 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">
      {/* Background neon light blob */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none animate-glow-pulse"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-12 items-start lg:items-center z-10">
        
        {/* Title block */}
        <div className="lg:col-span-7 animate-fade-in-up">
          <div className="flex flex-col gap-2">
            <span className="text-brand-red text-xs font-black uppercase tracking-widest">Who We Are</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-widest">
              About us
            </h2>
            <div className="w-16 h-1 bg-brand-red rounded-full mt-2"></div>
          </div>
        </div>

        {/* Image column */}
        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 flex justify-center">
          <div className="relative group overflow-hidden rounded-3xl border border-zinc-850/80 shadow-2xl max-w-sm lg:max-w-none bg-zinc-900/60 p-2">
            <img
              src="/image/about2.jpg"
              alt="Gym workout overview"
              className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
            />
            {/* Overlay border design on hover */}
            <div className="absolute inset-4 border border-brand-red/0 group-hover:border-brand-red/35 rounded-xl transition-all duration-350 pointer-events-none"></div>
          </div>
        </div>

        {/* Description/details column */}
        <div className="lg:col-span-7 flex flex-col gap-6 animate-fade-in-up mt-2 lg:mt-0">
          <h3 className="text-lg sm:text-xl font-bold text-zinc-200 tracking-wide uppercase">
            Stronger Every Day
          </h3>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            At our gym, we're dedicated to empowering individuals of all fitness levels through expert guidance, 
            top-tier equipment, and a motivating environment that supports every step of your wellness journey. 
            We believe that consistency beats intensity, and every workout is a step closer to your best self.
          </p>

          {/* Action button */}
          <div className="mt-2">
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 bg-brand-red hover:bg-brand-darkred text-white font-bold rounded-xl tracking-widest text-xs uppercase transition-all duration-300 shadow-md hover:shadow-brand-red/20 hover:scale-105 cursor-pointer"
            >
              Read More
            </a>
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-3.5 mt-4">
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all duration-350 cursor-pointer"
              aria-label="Facebook"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all duration-350 cursor-pointer"
              aria-label="Twitter"
            >
              <FaTwitter size={15} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all duration-350 cursor-pointer"
              aria-label="Instagram"
            >
              <FaInstagram size={15} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
