import React, { useState, useEffect } from "react";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Kembali Berkarir setelah Career Break?",
      subtitle: "WeCare menyediakan bantuan terbaik untukmu",
    },
    {
      id: 2,
      image: slide2,
      title: "Dukungan Komprehensif untuk Wanita Profesional",
      subtitle: "Kami bantu kamu kembali ke dunia kerja",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Automatic slide transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-[400px]"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="text-lg mt-2">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroSection;