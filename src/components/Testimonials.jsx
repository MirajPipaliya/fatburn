import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Crossfit Athlete',
      image: '/image/tes4.jpeg',
      stars: 5,
      comment:
        'Fatburn has completely transformed the way I look at physical fitness. The atmosphere is extremely energetic, and the trainers actually care about your progress. The diet plans provided are custom-tailored and easy to stick with!',
    },
    {
      name: 'Alex Rivera',
      role: 'Bodybuilder',
      image: '/image/tes2.jpeg',
      stars: 5,
      comment:
        'Best gym in the area by far! The equipment is top-tier and always clean. Having extra hours and access to personal trainers in the Gold package has allowed me to hit my strength goals much quicker than expected.',
    },
    {
      name: 'Marcus Vance',
      role: 'Powerlifter',
      image: '/image/tes3.jpeg',
      stars: 5,
      comment:
        'I joined Fatburn about 6 months ago on the Platinum plan. The community is incredibly supportive, and the classes are very challenging. I highly recommend this gym to anyone looking to make a serious change.',
    },
  ];

  return (
    <section id="testimonial" className="w-full bg-[#0d0d0d] py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background visual light circle */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[130px] pointer-events-none animate-glow-pulse"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center z-10">
        
        {/* Title Block */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-brand-red text-xs font-black uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-widest mt-2">
            What They Say
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-8 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/80 hover:border-brand-red/35 rounded-3xl shadow-xl hover:-translate-y-1.5 transition-all duration-350 group relative"
            >
              {/* Profile Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-red shadow-lg group-hover:scale-105 transition-transform duration-350 bg-zinc-800">
                  <img
                    src={rev.image}
                    alt={`${rev.name} avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-brand-red text-white w-7 h-7 flex items-center justify-center rounded-full text-base font-black shadow-md select-none">
                  “
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4 text-brand-red">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Comment */}
              <p className="text-zinc-450 text-xs sm:text-sm leading-relaxed italic mb-6 flex-grow tracking-wide">
                "{rev.comment}"
              </p>

              {/* Divider */}
              <div className="w-12 h-px bg-zinc-800/80 mb-5"></div>

              {/* Name & Role */}
              <div>
                <h4 className="text-base font-black text-white tracking-widest uppercase">
                  {rev.name}
                </h4>
                <span className="text-[10px] font-black text-brand-red uppercase tracking-widest mt-1 block">
                  {rev.role}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
