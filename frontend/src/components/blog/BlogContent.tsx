"use client";

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { X, ZoomIn } from 'lucide-react';

export default function BlogContent({ content }: { content: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <>
      <div className="prose prose-lg prose-invert max-w-none prose-headings:text-nabtura-green pb-10">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeRaw]}
          components={{
            p: ({node, children, ...props}) => {
              const hasImage = node?.children?.some(child => child.tagName === 'img');
              if (hasImage) {
                return <div className="inline-flex flex-wrap gap-4 mr-4 mb-4 align-top">{children}</div>;
              }
              return <p {...props}>{children}</p>;
            },
            img: ({node, ...props}) => {
              const src = props.src?.startsWith('http') ? props.src : `http://178.128.112.232${props.src}`;
              return (
                <div 
                  className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-nabtura-green/30 hover:shadow-2xl transition-all duration-300 group m-0 flex-shrink-0"
                  style={{ width: 'calc(33.333vw - 2rem)', maxWidth: '280px', minWidth: '200px', aspectRatio: '4/3' }}
                  onClick={() => setSelectedImage(src)}
                >
                  <img 
                    {...props} 
                    src={src} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 !m-0" 
                    alt={props.alt || "Blog image"} 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-3 rounded-full transform scale-50 group-hover:scale-100 duration-300">
                      <ZoomIn size={24} />
                    </span>
                  </div>
                </div>
              );
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* Lightbox Pop-up - Added extremely high z-index and body scroll lock */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md transition-opacity" 
          onClick={() => setSelectedImage(null)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-[999999]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
