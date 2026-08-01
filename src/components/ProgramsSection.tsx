'use client';

import { useState } from 'react';

export default function ProgramsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activities = [
    { id: 1, src: '/images/activities/act1.jpeg', title: 'Activity 1' },
    { id: 2, src: '/images/activities/act2.jpeg', title: 'Activity 2' },
    { id: 3, src: '/images/activities/act3.jpeg', title: 'Activity 3' },
  ];

  return (
    <>
      <section id="program" className="py-16 px-8" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-[40px] font-bold text-black mb-6"
              style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
            >
              Programlarımız
            </h2>
            
            <p className="text-base text-[rgb(81,81,81)] leading-relaxed max-w-2xl mx-auto">
              Cappadocia Run Club olarak her seviyeden koşucu için özel programlar hazırlıyoruz. 
              Detaylı bilgi ve katılım için aşağıdaki formu doldurabilirsiniz.
            </p>
          </div>

          {/* Etkinlik Fotoğrafları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {activities.map((activity) => (
              <div 
                key={activity.id} 
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                style={{ backgroundColor: '#FFFBF7' }}
                onClick={() => setSelectedImage(activity.src)}
              >
                <div className="w-full h-[300px] overflow-hidden flex items-center justify-center bg-gray-50">
                  <img 
                    src={activity.src} 
                    alt={activity.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-red-600 font-semibold text-lg text-center opacity-50">{activity.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            ×
          </button>
          <img 
            src={selectedImage} 
            alt="Activity" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
