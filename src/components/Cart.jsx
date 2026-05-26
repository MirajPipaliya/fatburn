import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

export default function Cart({
  cartItems,
  onRemoveItem,
  onCheckout,
  onContinueShopping,
}) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + tax;

  return (
    <section className="min-h-screen bg-[#0b0b0b] pt-28 pb-20 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">
      {/* Background glow light */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[110px] pointer-events-none animate-glow-pulse"></div>

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8 z-10">
        
        {/* Breadcrumb / Header */}
        <div className="flex items-center justify-between border-b border-zinc-900 pb-6">
          <button
            onClick={onContinueShopping}
            className="flex items-center gap-2 text-zinc-450 hover:text-white transition-colors duration-300 text-[10px] font-black uppercase tracking-widest group cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Gym</span>
          </button>
          <h1 className="text-xl sm:text-2xl font-black text-white uppercase tracking-widest">
            Your Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="flex flex-col items-center justify-center py-20 text-center bg-zinc-900/10 border border-zinc-905 rounded-3xl p-8 backdrop-blur-sm">
            <div className="w-16 h-16 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl flex items-center justify-center text-zinc-500 mb-6">
              <ShoppingBag size={24} />
            </div>
            <h2 className="text-lg font-black text-white mb-2 uppercase tracking-widest">Your Cart is Empty</h2>
            <p className="text-zinc-500 text-xs max-w-xs mb-8 leading-relaxed">
              Looks like you haven't added any subscription plans yet. Go back to our products and choose a plan to start.
            </p>
            <button
              onClick={onContinueShopping}
              className="px-8 py-3.5 bg-brand-red hover:bg-brand-darkred text-white font-bold rounded-xl uppercase tracking-widest text-xs transition-all duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-brand-red/15"
            >
              Explore Plans
            </button>
          </div>
        ) : (
          /* Active Cart Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Items List */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-zinc-900/30 border border-zinc-900/80 rounded-2xl group hover:border-zinc-800/60 transition-colors duration-300 backdrop-blur-sm"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="w-14 h-14 bg-zinc-950/80 p-2.5 rounded-xl flex items-center justify-center border border-zinc-900">
                      <img src={item.image} alt={item.name} className="w-10 h-10 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-md font-black text-white tracking-widest uppercase">
                        {item.name} Plan
                      </h3>
                      <span className="text-[10px] text-brand-red font-black uppercase tracking-widest">
                        Gym Membership
                      </span>
                    </div>
                  </div>

                  {/* Pricing and Controls */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                    {/* Price and delete button */}
                    <div className="flex items-center gap-6">
                      <div className="text-right min-w-[80px]">
                        <span className="text-[9px] text-zinc-550 block font-bold uppercase tracking-widest">Price</span>
                        <span className="text-md font-black text-white">
                          ₹{item.price}
                        </span>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.name)}
                        className="text-zinc-550 hover:text-brand-red transition-all duration-300 p-2.5 hover:bg-zinc-950/60 border border-transparent hover:border-zinc-900 rounded-xl cursor-pointer"
                        aria-label="Delete item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Right Side: Order Summary */}
            <div className="lg:col-span-4 bg-zinc-900/30 border border-zinc-900/80 p-6 rounded-2xl backdrop-blur-sm flex flex-col gap-6">
              <h2 className="text-xs font-black text-white uppercase tracking-widest pb-3 border-b border-zinc-900">
                Order Summary
              </h2>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-zinc-400 text-xs tracking-wider">
                  <span>Subtotal</span>
                  <span className="text-white font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-zinc-400 text-xs tracking-wider">
                  <span>GST (18%)</span>
                  <span className="text-white font-semibold">₹{tax}</span>
                </div>
                
                <div className="h-px bg-zinc-900 my-2"></div>

                <div className="flex justify-between items-baseline">
                  <span className="text-white text-xs font-black uppercase tracking-widest">Total Amount</span>
                  <span className="text-xl font-black text-brand-red">₹{total}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mt-2">
                <button
                  onClick={onCheckout}
                  className="w-full py-4 bg-brand-red hover:bg-brand-darkred text-white font-bold rounded-xl uppercase tracking-widest text-xs shadow-lg hover:shadow-brand-red/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  Proceed to Payment
                </button>
                <button
                  onClick={onContinueShopping}
                  className="w-full py-3.5 bg-transparent text-zinc-400 hover:text-white font-semibold rounded-xl text-xs uppercase tracking-widest transition-colors duration-300 border border-zinc-900 hover:border-zinc-800 cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
