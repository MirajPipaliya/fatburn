import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Payment from './components/Payment';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [view, setView] = useState('landing'); // 'landing' | 'cart' | 'payment'
  const [toastMessage, setToastMessage] = useState('');

  const plansConfig = {
    Silver: { price: 700, image: '/image/sub1.png' },
    Gold: { price: 1000, image: '/image/sub2.png' },
    Platinum: { price: 1200, image: '/image/sub3.png' },
  };

  const handleAddToCart = (planName) => {
    const config = plansConfig[planName];
    if (!config) return;

    // Restrict cart to a single membership at a time
    setCartItems([{ name: planName, price: config.price, image: config.image, quantity: 1 }]);

    setToastMessage(`${planName} Plan added to cart!`);
    
    // Auto-dismiss toast
    const timer = setTimeout(() => {
      setToastMessage('');
    }, 3000);

    return () => clearTimeout(timer);
  };

  const handleUpdateQuantity = (planName, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(planName);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.name === planName ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (planName) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== planName));
  };

  const handleCompletePayment = () => {
    setCartItems([]);
    setView('landing');
  };

  // Calculate total count of items in cart
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#121212] text-zinc-100 overflow-x-hidden font-sans selection:bg-brand-red selection:text-white">
      
      {/* Navbar stays fixed across all views */}
      <Navbar cartCount={cartCount} currentView={view} onNavigate={setView} />

      {/* Conditional Layout Routing */}
      {view === 'landing' && (
        <main>
          <Hero />
          <Pricing onAddToCart={handleAddToCart} />
          <About />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
      )}

      {view === 'cart' && (
        <Cart
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={() => setView('payment')}
          onContinueShopping={() => setView('landing')}
        />
      )}

      {view === 'payment' && (
        <Payment
          cartItems={cartItems}
          onBackToCart={() => setView('cart')}
          onCompletePayment={handleCompletePayment}
        />
      )}

      {/* Footer stays at the bottom */}
      <Footer />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-brand-red border border-red-500 text-white font-bold px-6 py-4 rounded-xl shadow-[0_10px_30px_rgba(205,0,0,0.3)] flex items-center gap-3 z-50 animate-pulse transition-all duration-300">
          <span className="text-lg">🛒</span>
          <span className="text-sm tracking-wide font-sans">{toastMessage}</span>
        </div>
      )}
      
    </div>
  );
}
