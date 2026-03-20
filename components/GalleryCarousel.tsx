"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryCarouselProps {
    items: string[];
    type: 'photo' | 'video';
}

export function GalleryCarousel({ items, type }: GalleryCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    if (items.length === 0) return null;

    return (
        <div className="relative group rounded-[2.5rem] overflow-hidden bg-slate-50 aspect-video md:aspect-[21/9]">
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out flex"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((url, i) => (
                    <div key={i} className="min-w-full h-full flex items-center justify-center shrink-0">
                        {type === 'photo' ? (
                            <img src={url} alt={`Слайд ${i + 1}`} className="w-full h-full object-cover" />
                        ) : (
                            <video 
                                src={url} 
                                className="w-full h-full object-cover outline-none" 
                                muted 
                                playsInline 
                                preload="none" 
                                controls 
                            />
                        )}
                    </div>
                ))}
            </div>

            {items.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-slate-900/60 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                        {currentIndex + 1} / {items.length}
                    </div>
                </>
            )}
        </div>
    );
}
