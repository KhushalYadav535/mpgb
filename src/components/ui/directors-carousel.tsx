"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface Director {
  id: number;
  name: string;
  position: string;
  image: string;
}

interface DirectorsCarouselProps {
  directors: Director[];
  autoPlayInterval?: number;
}

export function DirectorsCarousel({
  directors,
  autoPlayInterval = 3000,
}: DirectorsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === directors.length - 1 ? 0 : prevIndex + 1
    );
  }, [directors.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? directors.length - 1 : prevIndex - 1
    );
  }, [directors.length]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide, autoPlayInterval]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getRelativePosition = (index: number) => {
    const diff = index - currentIndex;
    const length = directors.length;

    if (diff === 0) return 0; // Active

    // Calculate shortest path in circular array
    let pos = diff;
    if (diff > length / 2) pos = diff - length;
    if (diff < -length / 2) pos = diff + length;

    return pos;
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto h-[500px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center perspective-[1000px] pb-12">
        <AnimatePresence initial={false} mode="popLayout">
          {directors.map((director, index) => {
            const relativePos = getRelativePosition(index);
            const isActive = relativePos === 0;

            return (
              <motion.div
                key={director.id}
                initial={false}
                animate={{
                  x: relativePos * 140, // Horizontal spread
                  scale: isActive ? 1 : 1 - Math.abs(relativePos) * 0.15,
                  zIndex: 50 - Math.abs(relativePos),
                  filter: isActive ? "blur(0px)" : `blur(${Math.abs(relativePos) * 2}px)`,
                  opacity: Math.abs(relativePos) >= 3 ? 0 : 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                }}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "absolute flex flex-col items-center justify-center cursor-pointer transition-colors duration-300",
                  "w-[260px] md:w-[320px]" // Image container size
                )}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className={cn(
                    "w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative transition-all duration-500",
                    isActive ? "ring-2 ring-white/20 shadow-blue-500/20" : "opacity-70 grayscale-[50%]"
                  )}
                >
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle gradient overlay for better text readability if we put text over image, 
                      but we'll put text below the image as per modern design */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <motion.div
                  className="mt-6 text-center w-[300px] md:w-[400px]"
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 10,
                  }}
                  transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                    {director.name}
                  </h3>
                  <p className="text-sm md:text-base text-blue-200/80 font-medium mt-2 uppercase tracking-wider leading-snug">
                    {director.position}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-4 md:left-12 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white backdrop-blur-md transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-4 md:right-12 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white backdrop-blur-md transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-0 z-50 flex space-x-2">
        {directors.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === currentIndex
                ? "w-8 bg-blue-500"
                : "w-2 bg-white/20 hover:bg-white/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
