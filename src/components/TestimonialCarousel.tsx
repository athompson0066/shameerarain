import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  date: string;
  text: string;
  type: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aziz Faarah",
    date: "3/14/2026",
    text: "Working with Shameer was such a positive experience for our family. Searching for a rental in Toronto can be exhausting, but he made us feel supported every step of the way. Shameer is thoughtful, responsive, and very easy to talk to. We always felt comfortable reaching out to him, and he made us feel like our concerns mattered.",
    type: "Helped me rent a home",
    rating: 5
  },
  {
    id: 2,
    name: "carlmueller1970",
    date: "8/6/2025",
    text: "We were referred to Shameer by our tenants when they bought their own place, through Shameer. He helped us quickly and efficiently find new tenants for our condo. Throughout the process, we found Shameer to be professional and up front. He knows his stuff and delivered for us.",
    type: "Found a tenant for a Apartment",
    rating: 5
  },
  {
    id: 3,
    name: "ammarmans95",
    date: "1/31/2024",
    text: "I was in a difficult spot at the end of last year. I had given my landlord a notice that I was going to leave and hadn't found a new place. That's when I found Shameer, he helped me land an amazing apartment for rent, that fit within my budget in this difficult economy.",
    type: "Helped me rent a Condo",
    rating: 5
  },
  {
    id: 4,
    name: "RonOnilla",
    date: "12/21/2023",
    text: "My partner and I had to find a new place and we were having trouble finding a realtor who would give us the help and guidance we needed as our experience with previous realtors left us uneasy. I stumbled upon Shameer's website and it was the best thing that happened to our search.",
    type: "Helped me rent a Single Family home",
    rating: 5
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  const nextStep = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextStep, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-center mb-8">
        <Quote className="w-12 h-12 text-toronto-blue/20" />
      </div>

      <div className="relative h-[400px] md:h-[300px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 flex flex-col items-center text-center space-y-6"
          >
            <div className="flex gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-toronto-blue text-toronto-blue" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-deep-charcoal font-display italic leading-relaxed max-w-2xl">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="space-y-1">
              <h4 className="font-headline text-lg text-deep-charcoal">{testimonials[currentIndex].name}</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                {testimonials[currentIndex].type} • {testimonials[currentIndex].date}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-8 mt-8">
        <button 
          onClick={prevStep}
          className="p-2 rounded-full border border-gray-200 hover:bg-toronto-blue hover:text-white transition-all text-gray-400"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-8 bg-toronto-blue' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={nextStep}
          className="p-2 rounded-full border border-gray-200 hover:bg-toronto-blue hover:text-white transition-all text-gray-400"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
