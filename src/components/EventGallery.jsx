import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const eventImages = [
  {
    src: "/public/assets/images/Hacka (7).jpeg",
    alt: "Pessoas em uma conferência de tecnologia",
    description: "Participando de um workshop de inovação"
  },
  {
    src: "/public/assets/images/Hacka (9).jpeg",
    alt: "Networking em um evento de tecnologia",
    description: "Conectando com outros desenvolvedores"
  },
  {
    src: "/public/assets/images/hacka.jpeg",
    alt: "Networking em um evento de tecnologia",
    description: "Conectando com outros desenvolvedores"
  },
  {
    src: "/public/assets/images/startupday.png",
    alt: "Apresentação em um hackathon",
    description: "Apresentando projeto no HackaMT 2024"
  },
  {
    src: "/public/assets/images/inova (1).jpeg",
    alt: "Equipe colaborando em um projeto",
    description: "Trabalho em equipe durante evento de programação"
  },
  {
    src: "/public/assets/images/inova (2).jpeg",
    alt: "Equipe colaborando em um projeto",
    description: "Trabalho em equipe durante evento de programação"
  },
  
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const EventGallery = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = page % eventImages.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <section id="event-gallery" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Galeria de Eventos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />
        </motion.div>

        <div className="relative h-[500px] w-full max-w-4xl mx-auto flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-black">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              className="w-full h-full absolute flex items-center justify-center"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <img
                src={eventImages[imageIndex].src}
                alt={eventImages[imageIndex].alt}
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <p className="relative z-10 text-white text-xl font-semibold self-end mb-8 text-center px-4">
                {eventImages[imageIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute z-20 top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
            <button onClick={() => paginate(-1)} className="bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition-colors">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={() => paginate(1)} className="bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition-colors">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute z-20 bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {eventImages.map((_, i) => (
              <div
                key={i}
                onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${i === imageIndex ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;