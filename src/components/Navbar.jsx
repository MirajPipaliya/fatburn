import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount, currentView, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Product', href: '#product' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLogoClick = (e) => {
    if (currentView !== 'landing') {
      e.preventDefault();
      onNavigate('landing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (e, link) => {
    if (link.view) {
      e.preventDefault();
      onNavigate(link.view);
      setIsOpen(false);
      return;
    }

    if (currentView !== 'landing') {
      // Switch back to landing page first
      onNavigate('landing');
      // Give time for layout to mount, then scroll to section
      setTimeout(() => {
        const id = link.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#0b0b0bb3] backdrop-blur-md text-white border-b border-zinc-900/80 z-50 transition-all duration-300 print:hidden">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={handleLogoClick}
          className="flex items-center gap-2 text-2xl font-extrabold tracking-widest hover:scale-102 transition-transform duration-300 select-none group"
        >
          <span className="text-brand-red animate-float">🦾</span>
          <span className="font-sans">FAT<span className="text-brand-red group-hover:text-red-500 transition-colors">BURN</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = (link.view && currentView === link.view);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link)}
                    className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-brand-red text-white shadow-[0_4px_12px_rgba(205,0,0,0.25)]'
                        : currentView === 'landing'
                        ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                        : 'text-zinc-500 hover:text-white hover:bg-zinc-900/40'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="w-px h-6 bg-zinc-800"></div>

          {/* Cart Icon */}
          <button
            onClick={() => onNavigate('cart')}
            className={`relative p-2.5 rounded-full hover:bg-zinc-900/60 transition-all duration-350 focus:outline-none cursor-pointer group ${
              currentView === 'cart' ? 'text-brand-red bg-zinc-900/40' : 'text-zinc-300 hover:text-brand-red'
            }`}
            aria-label="View Cart"
          >
            <ShoppingCart size={20} className="group-hover:scale-110 transition-transform duration-300" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-brand-red text-white text-[10px] font-black w-4.5 h-4.5 flex items-center justify-center rounded-full border border-zinc-950 shadow-[0_2px_8px_rgba(205,0,0,0.4)]">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Button & Cart Icon */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => onNavigate('cart')}
            className={`relative p-2.5 rounded-full bg-zinc-900/30 transition-all duration-300 cursor-pointer ${
              currentView === 'cart' ? 'text-brand-red bg-zinc-900/80' : 'text-zinc-300'
            }`}
            aria-label="View Cart"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-brand-red text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border border-zinc-950">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-full bg-zinc-900/30 text-zinc-300 hover:text-brand-red focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Backdrop overlay for mobile drawer */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 top-20 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer (Right-side slide-over panel) */}
      <div
        className={`md:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-72 bg-zinc-950/95 backdrop-blur-xl border-l border-zinc-900/90 z-50 transition-all duration-350 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-3 p-6">
          {navLinks.map((link) => {
            const isActive = (link.view && currentView === link.view);
            return (
              <li key={link.name} className="w-full">
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={`block w-full py-3.5 px-5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-red text-white shadow-[0_4px_12px_rgba(205,0,0,0.2)]'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
