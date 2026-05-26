import { useState } from 'react';
import { CreditCard, ArrowLeft, Loader2, CheckCircle2, User, Mail, Calendar, ShieldCheck, Smartphone } from 'lucide-react';

export default function Payment({ cartItems, onBackToCart, onCompletePayment }) {
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'upi'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: '',
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [validationError, setValidationError] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  // Mask inputs on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      const digits = value.replace(/\D/g, '');
      const groups = digits.match(/.{1,4}/g);
      formattedValue = groups ? groups.join(' ').slice(0, 19) : '';
    } else if (name === 'expiry') {
      const digits = value.replace(/\D/g, '').slice(0, 4);
      if (digits.length >= 3) {
        formattedValue = `${digits.slice(0, 2)}/${digits.slice(2)}`;
      } else {
        formattedValue = digits;
      }
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    }

    setFormData({ ...formData, [name]: formattedValue });
    setValidationError('');
  };

  const handlePay = (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (paymentMethod === 'upi') {
      if (!formData.upiId.includes('@')) {
        setValidationError('Please enter a valid UPI ID (e.g. name@bank).');
        return;
      }
    } else {
      if (formData.cardNumber.length < 19) {
        setValidationError('Please enter a complete 16-digit card number.');
        return;
      }
      if (formData.expiry.length < 5) {
        setValidationError('Please enter expiry in MM/YY format.');
        return;
      }
      if (formData.cvv.length < 3) {
        setValidationError('Please enter a 3-digit CVV number.');
        return;
      }
    }

    setValidationError('');
    setIsProcessing(true);
    
    // Simulate transaction steps
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setBookingId(`FB-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <section className="min-h-screen bg-[#0b0b0b] pt-28 pb-20 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">
        {/* Background glow light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none animate-glow-pulse"></div>

        <div className="max-w-md w-full bg-zinc-900/30 border border-zinc-900/80 p-8 sm:p-10 rounded-3xl backdrop-blur-md shadow-2xl text-center z-10 flex flex-col items-center gap-6 animate-fade-in-up">
          {/* Animated Success Badge */}
          <div className="w-20 h-20 bg-green-500/10 border border-green-500/35 rounded-full flex items-center justify-center text-green-500 animate-bounce shadow-[0_0_20px_rgba(34,197,94,0.15)]">
            <CheckCircle2 size={36} strokeWidth={2.5} />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-black text-white uppercase tracking-widest">
              Payment Successful!
            </h2>
            <p className="text-zinc-450 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1">
              Transaction ID: <span className="text-brand-red font-mono">{bookingId}</span>
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-3">
              Your payment has been processed successfully. The receipt has been sent to your registered email address:
              <br />
              <span className="text-white font-semibold mt-2 block break-all font-sans">{formData.email}</span>
            </p>
          </div>

          <div className="w-full h-px bg-zinc-900/60 my-2"></div>

          <button
            onClick={onCompletePayment}
            className="w-full py-4 bg-brand-red hover:bg-brand-darkred text-white font-bold rounded-xl uppercase tracking-widest text-xs transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-lg hover:shadow-brand-red/10"
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0b0b0b] pt-28 pb-20 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">
      {/* Background glow light */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[110px] pointer-events-none animate-glow-pulse"></div>

      <div className="max-w-5xl mx-auto w-full flex flex-col gap-8 z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-900 pb-6">
          <button
            onClick={onBackToCart}
            className="flex items-center gap-2 text-zinc-450 hover:text-white transition-colors duration-300 text-[10px] font-black uppercase tracking-widest group cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Return to Cart</span>
          </button>
          <h1 className="text-xl sm:text-2xl font-black text-white uppercase tracking-widest">
            Checkout
          </h1>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Methods */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            
            {/* Payment Method Switcher */}
            <div className="grid grid-cols-2 bg-zinc-950/60 p-1.5 rounded-xl border border-zinc-900">
              <button
                type="button"
                onClick={() => { setPaymentMethod('card'); setValidationError(''); }}
                className={`py-3.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'bg-brand-red text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <CreditCard size={14} />
                <span>Card</span>
              </button>
              <button
                type="button"
                onClick={() => { setPaymentMethod('upi'); setValidationError(''); }}
                className={`py-3.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  paymentMethod === 'upi'
                    ? 'bg-brand-red text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Smartphone size={14} />
                <span>UPI</span>
              </button>
            </div>

            {/* Billing/Payment Form container */}
            <div className="bg-zinc-900/30 border border-zinc-900/80 p-8 rounded-3xl backdrop-blur-sm shadow-xl">
              <h2 className="text-sm font-black text-brand-red uppercase tracking-widest mb-6 flex items-center gap-2 border-b border-zinc-900 pb-3">
                {paymentMethod === 'card' ? <CreditCard size={16} /> : <Smartphone size={16} />}
                <span>{paymentMethod === 'card' ? 'Card Details' : 'UPI Details'}</span>
              </h2>

              <form onSubmit={handlePay} className="flex flex-col gap-5">
                
                {/* User Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-zinc-450 uppercase tracking-widest">Member Full Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-zinc-500">
                      <User size={16} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-zinc-950/70 border border-zinc-900 focus:border-brand-red rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-zinc-700 outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-zinc-450 uppercase tracking-widest">Billing Email</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-zinc-500">
                      <Mail size={16} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      required
                      className="w-full bg-zinc-950/70 border border-zinc-900 focus:border-brand-red rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-zinc-700 outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Card Fields Conditional */}
                {paymentMethod === 'card' && (
                  <>
                    {/* Card Number */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-zinc-450 uppercase tracking-widest">Card Number</label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-zinc-500">
                          <CreditCard size={16} />
                        </span>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="0000 0000 0000 0000"
                          pattern="\d{4} \d{4} \d{4} \d{4}"
                          required={paymentMethod === 'card'}
                          className="w-full bg-zinc-950/70 border border-zinc-900 focus:border-brand-red rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-zinc-700 outline-none transition-colors duration-300 font-mono tracking-widest"
                        />
                      </div>
                    </div>

                    {/* Expiry and CVV Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      
                      {/* Expiry Date */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-zinc-450 uppercase tracking-widest">Expiry Date</label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-zinc-500">
                            <Calendar size={16} />
                          </span>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            pattern="(0[1-9]|1[0-2])\/\d{2}"
                            required={paymentMethod === 'card'}
                            className="w-full bg-zinc-950/70 border border-zinc-900 focus:border-brand-red rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-zinc-700 outline-none transition-colors duration-300 font-mono"
                          />
                        </div>
                      </div>

                      {/* CVV */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-zinc-450 uppercase tracking-widest">CVV</label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-zinc-500">
                            <ShieldCheck size={16} />
                          </span>
                          <input
                            type="password"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder="***"
                            pattern="\d{3}"
                            required={paymentMethod === 'card'}
                            className="w-full bg-zinc-950/70 border border-zinc-900 focus:border-brand-red rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-zinc-700 outline-none transition-colors duration-300 font-mono"
                          />
                        </div>
                      </div>

                    </div>
                  </>
                )}

                {/* UPI Fields Conditional */}
                {paymentMethod === 'upi' && (
                  <>
                    {/* UPI ID */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-zinc-450 uppercase tracking-widest">UPI ID / VPA</label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-zinc-500">
                          <Smartphone size={16} />
                        </span>
                        <input
                          type="text"
                          name="upiId"
                          value={formData.upiId}
                          onChange={handleChange}
                          placeholder="username@bank"
                          required={paymentMethod === 'upi'}
                          className="w-full bg-zinc-950/70 border border-zinc-900 focus:border-brand-red rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-zinc-700 outline-none transition-colors duration-300"
                        />
                      </div>
                    </div>

                    {/* QR Code Segment */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 bg-zinc-950/60 p-5 rounded-2xl border border-zinc-900">
                      {/* Styled Mock QR Code */}
                      <div className="w-28 h-28 bg-white p-2 rounded-xl flex-shrink-0 flex items-center justify-center relative group">
                        {/* Mock QR Blocks */}
                        <svg className="w-24 h-24 text-black" viewBox="0 0 100 100" fill="currentColor">
                          <path d="M0,0h30v10h-20v20h-10V0z M70,0h30v30h-10v-20h-20V0z M0,70h10v20h20v10h-30V70z M90,90v-20h10v30h-30v-10H90z" />
                          <rect x="15" y="15" width="10" height="10" />
                          <rect x="75" y="15" width="10" height="10" />
                          <rect x="15" y="75" width="10" height="10" />
                          <path d="M35,15h5v5h-5V15z M45,15h15v5h-15V15z M35,25h10v5h-10V25z M50,25h5v15h-5V25z M60,25h10v5h-10V25z" />
                          <path d="M15,35h5v15h-5V35z M25,35h5v5h-5V35z M25,45h15v5h-15V45z M45,45h5v10h-5V45z M35,55h5v15h-5V55z" />
                          <path d="M55,45h10v5h-10V45z M75,35h10v10h-10V35z M75,50h5v15h-5V50z M65,60h10v10h-10V60z M85,75h10v5h-10V75z" />
                          <path d="M45,75h5v10h-5V75z M55,75h10v5h-10V75z M55,85h5v5h-5V85z M70,85h15v5h-15V85z" />
                        </svg>
                        {/* Center Badge logo */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-brand-red text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow select-none">
                            UPI
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 text-left">
                        <h4 className="text-white text-xs font-black uppercase tracking-widest">Scan & Pay Instantly</h4>
                        <p className="text-zinc-500 text-[10px] leading-relaxed">
                          Scan this custom dynamic QR code using any UPI application (GPay, PhonePe, Paytm, BHIM, Mobikwik) to authorize the payment instantly.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* Validation Display */}
                {validationError && (
                  <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
                    {validationError}
                  </span>
                )}

                {/* Action button */}
                <button
                  type="submit"
                  className="w-full py-4 mt-2 bg-brand-red hover:bg-brand-darkred text-white font-bold rounded-xl uppercase tracking-widest text-xs shadow-lg hover:shadow-brand-red/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {paymentMethod === 'card' ? <CreditCard size={14} /> : <Smartphone size={14} />}
                  <span>Pay ₹{total} Now</span>
                </button>

              </form>
            </div>

            {/* Note banner for Cash Payments */}
            <div className="bg-zinc-900/10 border border-zinc-900 p-5 rounded-2xl flex items-start gap-4">
              <span className="text-brand-red text-base mt-0.5">💵</span>
              <div className="flex flex-col gap-1 text-left">
                <h4 className="text-white text-xs font-black uppercase tracking-widest">Prefer Paying with Cash?</h4>
                <p className="text-zinc-500 text-[10px] leading-relaxed">
                  If you want to complete your payment via cash, please visit the nearest **Fatburn Gym branch** directly. Our reception desk will assist in registering your profile and activating your subscription immediately.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 bg-zinc-900/30 border border-zinc-900/80 p-6 rounded-3xl backdrop-blur-sm flex flex-col gap-6 w-full">
            <h2 className="text-xs font-black text-white uppercase tracking-widest pb-3 border-b border-zinc-900">
              Billing Summary
            </h2>

            {/* Itemized list */}
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div key={item.name} className="flex justify-between items-center text-xs gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-950 p-1.5 rounded-lg flex items-center justify-center border border-zinc-900 shadow-inner">
                      <img src={item.image} alt={item.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-white font-black uppercase text-[10px] tracking-widest">{item.name} Plan</span>
                      <span className="text-zinc-500 text-[9px] uppercase tracking-wider font-semibold">Membership Plan</span>
                    </div>
                  </div>
                  <span className="text-white font-black text-right">₹{item.price}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-zinc-900 my-1"></div>

            {/* Calculations details */}
            <div className="flex flex-col gap-3 text-left">
              <div className="flex justify-between text-zinc-400 text-xs tracking-wider">
                <span>Subtotal</span>
                <span className="font-semibold text-white">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-zinc-400 text-xs tracking-wider">
                <span>GST (18%)</span>
                <span className="font-semibold text-white">₹{tax}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <span className="text-white text-xs font-black uppercase tracking-widest">Grand Total</span>
                <span className="text-xl font-black text-brand-red">₹{total}</span>
              </div>
            </div>

            {/* Security Shield details */}
            <div className="flex items-start gap-2 bg-zinc-950/70 p-4 border border-zinc-900/60 rounded-xl text-zinc-500 text-left">
              <ShieldCheck className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
              <div className="flex flex-col gap-0.5 text-[9px] leading-relaxed">
                <span className="font-black text-zinc-400 uppercase tracking-widest">Secure Transaction</span>
                <span>Your checkout sessions are 256-bit encrypted.</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Mock processing gateway overlay */}
      {isProcessing && (
        <div className="fixed inset-0 bg-[#0b0b0b]/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center gap-4">
          <div className="text-brand-red animate-spin">
            <Loader2 size={48} strokeWidth={2.5} />
          </div>
          <h2 className="text-xl font-black text-white uppercase tracking-widest">
            {paymentMethod === 'upi' ? 'Verifying UPI Transaction' : 'Processing Card Payment'}
          </h2>
          <p className="text-zinc-550 text-xs max-w-xs animate-pulse leading-relaxed">
            {paymentMethod === 'upi'
              ? 'Verifying virtual payment address and awaiting token confirmation... Do not refresh.'
              : 'Connecting to credit network, verifying credentials, and securing checkout... Do not refresh.'}
          </p>
        </div>
      )}
    </section>
  );
}
