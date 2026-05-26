export default function Footer() {
  return (
    <footer className="w-full bg-[#070707] border-t border-zinc-900/60 py-12 px-6 print:hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2 text-xl font-black tracking-widest text-white uppercase">
            <span className="text-brand-red animate-float">🦾</span>
            <span>FAT<span className="text-brand-red">BURN</span></span>
          </div>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">
            Build your strength, achieve your dreams.
          </p>
        </div>

        {/* Operating Hours */}
        <div className="text-center md:text-right flex flex-col gap-1">
          <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">
            Operating Hours
          </h4>
          <p className="text-[11px] text-zinc-600 font-semibold tracking-wide">
            Mon - Fri: 5:00 AM - 10:00 PM
          </p>
          <p className="text-[11px] text-zinc-600 font-semibold tracking-wide">
            Sat - Sun: 6:00 AM - 8:00 PM
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto h-px bg-zinc-900/60 my-8"></div>

      <div className="text-center">
        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Fatburn Gym. All rights reserved. Designed with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
