import { Check } from 'lucide-react';

export default function Pricing({ onAddToCart }) {
  const plans = [
    {
      name: 'Silver',
      price: '700',
      image: '/image/sub1.png',
      features: [
        '2 month membership',
        'Diet Plan',
        '1 hour extra time',
        '3 classes',
        'Personal Trainer',
      ],
      highlight: false,
    },
    {
      name: 'Gold',
      price: '1000',
      image: '/image/sub2.png',
      features: [
        '4 month membership',
        'Diet Plan',
        '2 hour extra time',
        '4 classes',
        'Personal Trainer',
      ],
      highlight: true, // Mark Gold as popular/highlighted
    },
    {
      name: 'Platinum',
      price: '1200',
      image: '/image/sub3.png',
      features: [
        '6 month membership',
        'Diet Plan',
        '3 hour extra time',
        '6 classes',
        'Personal Trainer',
      ],
      highlight: false,
    },
  ];

  return (
    <section
      id="product"
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-24 px-6 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.9), rgba(11, 11, 11, 0.95)), url('/image/image3.jpg')`,
      }}
    >
      {/* Visual background glow spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none animate-glow-pulse"></div>

      {/* Title block */}
      <div className="max-w-2xl text-center mb-20 z-10 animate-fade-in-up">
        <span className="text-brand-red text-xs font-black uppercase tracking-widest">Pricing Tables</span>
        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-widest mt-2">
          Choose Your Plan
        </h2>
        <p className="text-zinc-400 mt-4 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          We have different plans for you, choose the one that suits you best and start your transformation today.
        </p>
        <div className="w-16 h-1 bg-brand-red mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Grid of plans */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col justify-between glass-card rounded-2xl p-8 hover:scale-103 hover:-translate-y-1.5 transition-all duration-300 ${
              plan.highlight
                ? 'border-brand-red/40 bg-zinc-900/40 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.8),0_0_25px_rgba(205,0,0,0.15)]'
                : 'border-zinc-800/40 hover:border-zinc-700/50'
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-red to-red-500 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_4px_12px_rgba(205,0,0,0.3)] animate-pulse select-none">
                Most Popular
              </span>
            )}

            <div>
              {/* Badge/Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900/60 p-3.5 flex items-center justify-center border border-zinc-800/80 shadow-inner">
                  <img src={plan.image} alt={`${plan.name} plan icon`} className="w-10 h-10 object-contain" />
                </div>
              </div>

              {/* Title & Price */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-black text-white tracking-widest uppercase mb-2">
                  {plan.name}
                </h3>
                <div className="flex justify-center items-baseline text-zinc-100 mt-3">
                  <span className="text-2xl font-black text-brand-red">₹</span>
                  <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                  <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest ml-1">/month</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-6"></div>

              {/* Feature List */}
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center shadow">
                      <Check className="text-brand-red" size={11} strokeWidth={4} />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold tracking-wider">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onAddToCart(plan.name)}
              className={`w-full py-4 rounded-xl font-bold tracking-widest uppercase text-xs transition-all duration-300 cursor-pointer ${
                plan.highlight
                  ? 'bg-brand-red text-white hover:bg-brand-darkred hover:shadow-[0_6px_20px_rgba(205,0,0,0.35)] hover:scale-[1.02]'
                  : 'bg-zinc-900/60 text-zinc-300 border border-zinc-800 hover:border-zinc-650 hover:bg-zinc-800 hover:text-white hover:scale-[1.02]'
              }`}
            >
              Add to cart
            </button>

          </div>
        ))}
      </div>
    </section>
  );
}
