export default function Gallery() {
  const images = [
    {
      title: 'Strength',
      url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D',
      spanClass: 'row-span-2 col-span-1',
    },
    {
      title: 'Fitness',
      url: 'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
      spanClass: 'col-span-2 row-span-1',
    },
    {
      title: 'Beastmode',
      url: 'https://images.unsplash.com/photo-1642267238449-5f2c7643c1a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhc3Rtb2RlfGVufDB8fDB8fHww',
      spanClass: 'col-span-1 row-span-1',
    },
    {
      title: 'Dedication',
      url: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERlZGljYXRpb258ZW58MHx8MHx8fDA%3D',
      spanClass: 'row-span-2 col-span-1',
    },
    {
      title: 'Power',
      url: 'https://img.freepik.com/free-photo/fit-individual-doing-sport_23-2151764298.jpg?ga=GA1.1.1210170878.1748000452&semt=ais_hybrid&w=740',
      spanClass: 'col-span-2 row-span-1',
    },
    {
      title: 'Sweat',
      url: 'https://images.unsplash.com/photo-1636302925863-6ad504baaf3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bSUyMFN3ZWF0fGVufDB8fDB8fHww',
      spanClass: 'col-span-1 row-span-1',
    },
    {
      title: 'Gains',
      url: 'https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FpbiUyMHdvcmtpbmclMjBvdXR8ZW58MHx8MHx8fDA%3D',
      spanClass: 'col-span-2 row-span-1',
    },
  ];

  return (
    <section
      id="gallery"
      className="w-full min-h-screen py-24 px-6 md:px-12 flex items-center justify-center bg-gradient-to-b from-[#0b0b0b] to-[#120505] relative overflow-hidden"
    >
      {/* Background glow light */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none animate-glow-pulse"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 items-center z-10">
        
        {/* Left text description */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-left animate-fade-in-up">
          <div className="flex flex-col gap-2">
            <span className="text-brand-red text-xs font-black uppercase tracking-widest">Our Arena</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-widest leading-tight">
              Gallery
            </h2>
            <div className="w-16 h-1 bg-brand-red rounded-full mt-2 mx-auto lg:mx-0"></div>
          </div>
          
          <p className="text-orange-100/75 text-sm sm:text-base leading-relaxed italic font-roboto max-w-sm mx-auto lg:mx-0">
            "Push through the burn, embrace the grind,<br />
            Every rep builds a stronger mind.<br />
            Sweat today, shine tomorrow,<br />
            Strength is earned, never borrowed."
          </p>
        </div>

        {/* Gallery grid of images */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-3 gallery-grid gap-4 border border-zinc-800/60 p-3 bg-zinc-950/30 backdrop-blur-sm rounded-3xl shadow-2xl">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`relative group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 cursor-pointer ${
                  // On mobile we override asymmetric shapes and display items nicely
                  img.spanClass
                } max-md:col-span-3 max-md:row-span-1`}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-108 transition-transform duration-500 bg-zinc-850"
                  style={{
                    backgroundImage: `url('${img.url}')`,
                    backgroundBlendMode: 'luminosity',
                  }}
                ></div>

                {/* Dark tint overlay */}
                <div className="absolute inset-0 bg-zinc-950/45 group-hover:bg-brand-red/35 transition-colors duration-350"></div>

                {/* Centered label */}
                <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm sm:text-base font-black uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] border-b border-transparent group-hover:border-white/50 pb-0.5 transition-all duration-300">
                    {img.title}
                  </span>
                </div>

                {/* Corner detail borders */}
                <div className="absolute inset-3 border border-white/0 group-hover:border-white/10 rounded-xl pointer-events-none transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
