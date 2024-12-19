import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);
  const slides = ["/assets/dio-hasibuan-9ZNhQZFivZc-unsplash.jpg", "/assets/sadasd.jpg", "/assets/jesman-fabio-D0Afr-lX2CM-unsplash.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden font-plus scroll-smooth">
      {/* Wrapper for sliding background images */}
      <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {[...slides, ...slides].map((slide, index) => (
          <div key={index} className="flex-shrink-0 h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${slide})` }}></div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content over the sliding background */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white p-5 mt-16 sm:p-10" data-aos="fade-right" data-aos-duration="1500">
        <p className="font-light tracking-widest md:pb-2 pb-6 text-base sm:text-2xl mb-4">Pesona Alam di Tanah Pasundan!</p>
        <h1 className="text-5xl sm:text-8xl font-bold md:mb-12 mb-10">
          <span className="text-emerald-800">EXPLORE</span> MAJALENGKA
        </h1>
        <p className="text-sm sm:text-lg max-w-full sm:max-w-2xl leading-loose font-medium tracking-wide">
          Explore Majalengka memudahkan Anda merencanakan perjalanan ke destinasi wisata menarik di Majalengka. Dapatkan tiket wisata dengan harga bersaing dan proses pemesanan yang cepat, untuk pengalaman liburan yang tak terlupakan!
        </p>

        <button className=" mt-14 bg-emerald-800 flex items-center text-white text-base sm:text-lg font-extrabold py-3 sm:py-4 px-6 sm:px-10 rounded-[10px] hover:bg-emerald-900 ease-in-out duration-500">
          Near Me{" "}
          <span className="material-symbols-outlined text-white text-base sm:text-lg pl-4">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
