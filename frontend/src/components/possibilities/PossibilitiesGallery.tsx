"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function PossibilitiesGallery({ items }: { items: any[] }) {
  const [selected, setSelected] = useState<any | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = () => setSelected(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item: any, i: number) => {
          const isDynamic = item.id !== undefined;
          const name = isDynamic ? (item.name || item.Name) : item.name;
          const idea = isDynamic ? (item.idea || item.Idea) : item.idea;
          
          let imageUrl = isDynamic ? null : item.image;
          if (isDynamic) {
            const imageObj = item.image || item.Image;
            if (imageObj && imageObj.url) {
              imageUrl = imageObj.url.startsWith('http') ? imageObj.url : `http://178.128.112.232${imageObj.url}`;
            }
          }

          return (
            <div 
              key={i} 
              onClick={() => setSelected({ ...item, name, idea, imageUrl, isDynamic })}
              className="bg-nabtura-slate border border-divider rounded-3xl group-hover:border-nabtura-green transition-colors relative overflow-hidden flex flex-col h-full cursor-pointer group"
            >
              <div className="relative h-48 w-full overflow-hidden shrink-0 bg-black/50">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={name || "Possibility"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
                    No Image
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-nabtura-slate via-nabtura-slate/20 to-transparent z-10" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col relative z-20">
                <div className="absolute top-0 right-0 w-24 h-24 bg-nabtura-green/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-nabtura-green/10 transition-colors" />
                <p className="text-nabtura-green text-[10px] font-bold tracking-[0.2em] uppercase mb-3">NABTURA Concept</p>
                <h3 className="text-xl font-bold text-content mb-3">{name}</h3>
                <p className="text-content-muted font-light mb-6 text-sm line-clamp-2">
                  {idea}
                </p>
                <div className="mt-auto">
                  <span className="text-xs font-bold text-content group-hover:text-nabtura-light-green tracking-widest uppercase flex items-center transition-colors">
                    Explore Concept <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 bg-black/80 backdrop-blur-md overflow-y-auto"
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-nabtura-slate border border-divider rounded-[2rem] w-full max-w-5xl max-h-[85vh] overflow-hidden flex flex-col md:flex-row relative shadow-[0_0_50px_rgba(0,0,0,0.5)] my-auto"
              >
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-nabtura-green/20 rounded-full text-white backdrop-blur-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image Side */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
                  {selected.imageUrl ? (
                    <img
                      src={selected.imageUrl}
                      alt={selected.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-black/50" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-nabtura-slate md:from-transparent md:bg-gradient-to-r via-transparent to-transparent" />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                  <p className="text-nabtura-green text-xs font-bold tracking-[0.2em] uppercase mb-4">Concept Overview</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-content mb-8">{selected.name}</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-nabtura-light-green font-semibold mb-2">Situation</h4>
                      <p className="text-content-muted font-light leading-relaxed">
                        {selected.isDynamic ? (selected.situation || selected.Situation) : selected.situation}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-nabtura-light-green font-semibold mb-2">Idea</h4>
                      <p className="text-content-muted font-light leading-relaxed">
                        {selected.idea}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-nabtura-light-green font-semibold mb-2">NABTURA Solutions</h4>
                      <p className="text-content-muted font-light leading-relaxed">
                        {selected.isDynamic ? (selected.solutions || selected.Solutions) : selected.solutions}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-nabtura-light-green font-semibold mb-2">Potential Benefits</h4>
                      <p className="text-content-muted font-light leading-relaxed">
                        {selected.isDynamic ? (selected.benefits || selected.Benefits) : selected.benefits}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-divider">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center w-full sm:w-auto bg-nabtura-green hover:bg-nabtura-light-green text-black px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                    >
                      TALK TO US <ArrowRight className="ml-3 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
