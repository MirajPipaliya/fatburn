import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const contactDetails = [
    {
      title: 'Address',
      value: '123 Evergreen Lane, Sunflower City, Dreamland 56789',
      icon: <MapPin size={20} />,
    },
    {
      title: 'Phone',
      value: '999-0005-444',
      icon: <Phone size={20} />,
    },
    {
      title: 'Email',
      value: 'fatburngym@gmail.com',
      icon: <Mail size={20} />,
    },
  ];

  return (
    <section id="contact" className="w-full min-h-screen bg-zinc-950 py-24 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">
      {/* Background visual light circle */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[130px] pointer-events-none animate-glow-pulse"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16 z-10">
        
        {/* Title Block */}
        <div className="max-w-2xl text-center mx-auto animate-fade-in-up">
          <span className="text-brand-red text-xs font-black uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-widest mt-2">
            Contact Us
          </h2>
          <p className="text-zinc-450 mt-4 text-xs sm:text-sm leading-relaxed">
            Have questions about our plans or facilities? Reach out to us and our staff will get back to you within 24 hours.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-zinc-900/35 border border-zinc-800/80 p-8 sm:p-10 rounded-3xl backdrop-blur-sm shadow-xl">
            <div className="flex flex-col gap-6">
              {contactDetails.map((detail, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow">
                    {detail.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-brand-red text-sm font-black uppercase tracking-widest">
                      {detail.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-1 tracking-wide">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px bg-zinc-800/80 my-4"></div>

            {/* Socials Connection */}
            <div>
              <h3 className="text-white text-xs font-black uppercase tracking-widest mb-4 border-l-4 border-brand-red pl-3">
                Connect with us
              </h3>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all duration-350 cursor-pointer" aria-label="Facebook">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all duration-350 cursor-pointer" aria-label="Twitter">
                  <FaTwitter size={14} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all duration-350 cursor-pointer" aria-label="Instagram">
                  <FaInstagram size={14} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all duration-350 cursor-pointer" aria-label="Website">
                  <FaGlobe size={14} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all duration-350 cursor-pointer" aria-label="Youtube">
                  <FaYoutube size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-zinc-900/35 border border-zinc-800/80 p-8 sm:p-10 rounded-3xl backdrop-blur-sm shadow-xl flex flex-col justify-center relative">
            <h3 className="text-xl font-black text-brand-red uppercase tracking-widest mb-6">
              Write Your Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in bg-zinc-950/40 rounded-2xl border border-brand-red/10">
                <div className="w-16 h-16 bg-brand-red/10 border border-brand-red/35 rounded-full flex items-center justify-center mb-4 text-brand-red animate-bounce">
                  <Send size={24} />
                </div>
                <h4 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Message Sent Successfully!</h4>
                <p className="text-zinc-400 text-xs max-w-xs leading-relaxed">
                  Thank you for contacting Fatburn Gym. We will review your message and get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent text-white border-b border-zinc-850 focus:border-brand-red outline-none py-3 text-sm tracking-wide transition-colors duration-300 placeholder-transparent"
                  />
                  <label className="absolute left-0 top-3.5 text-zinc-500 text-xs font-semibold uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-zinc-500 peer-focus:-translate-y-4 peer-focus:text-brand-red peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-brand-red peer-[:not(:placeholder-shown)]:text-[10px]">
                    Full Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent text-white border-b border-zinc-850 focus:border-brand-red outline-none py-3 text-sm tracking-wide transition-colors duration-300 placeholder-transparent"
                  />
                  <label className="absolute left-0 top-3.5 text-zinc-500 text-xs font-semibold uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-zinc-500 peer-focus:-translate-y-4 peer-focus:text-brand-red peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-brand-red peer-[:not(:placeholder-shown)]:text-[10px]">
                    Email Address
                  </label>
                </div>

                {/* Message TextArea */}
                <div className="relative mt-2">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    rows={4}
                    className="peer w-full bg-transparent text-white border-b border-zinc-850 focus:border-brand-red outline-none py-3 text-sm tracking-wide resize-none transition-colors duration-300 placeholder-transparent"
                  ></textarea>
                  <label className="absolute left-0 top-3.5 text-zinc-500 text-xs font-semibold uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-zinc-500 peer-focus:-translate-y-4 peer-focus:text-brand-red peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-brand-red peer-[:not(:placeholder-shown)]:text-[10px]">
                    Type your Message
                  </label>
                </div>

                {error && (
                  <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
                    {error}
                  </span>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-36 mt-4 py-3.5 bg-brand-red hover:bg-brand-darkred text-white font-bold rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-brand-red/10"
                >
                  <span>Send</span>
                  <Send size={12} strokeWidth={3} />
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
