import jakartaImage from "/assets/dio-hasibuan-9ZNhQZFivZc-unsplash.jpg"; // Update this path to the image you want to use
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const JakartaSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);
  return (
    <section className="bg-white py-24 px-5 lg:px-20 flex flex-col items-center font-plus">
      {/* Title Section */}
      <div className="text-center mb-12 lg:mb-20" data-aos="fade-down">
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-widest text-black mb-6">
          SELAMAT DATANG DI <span className="text-emerald-800">MAJALENGKA</span>
        </h1>
        <p className="text-lg lg:text-xl font-semibold text-gray-800">Pesona Alam di Tanah Pasundan</p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center" data-aos="fade-up">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative">
            <img src={jakartaImage} alt="Jakarta" className="w-full h-auto rounded-md shadow-md" />
            <div className="absolute bottom-[-20px] shadow-xl left-0 bg-white py-2 px-4 font-bold text-xl lg:text-2xl text-black tracking-wide transition-transform duration-300 hover:rotate-3">
              KOTA ANGIN <span className="text-emerald-800 font-extrabold">MAJALENGKA!</span>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 px-4 lg:px-6">
          <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
            Majalengka adalah sebuah kabupaten yang terletak di Provinsi Jawa Barat, Indonesia. Dikenal dengan keindahan alamnya yang memukau, Majalengka menyuguhkan panorama pegunungan, air terjun, dan persawahan yang hijau, menjadikannya
            destinasi wisata yang menarik bagi para pencinta alam dan petualang. Kabupaten ini dikelilingi oleh Gunung Ciremai, yang merupakan gunung tertinggi di Jawa Barat, dan menjadi daya tarik utama bagi pendaki dan wisatawan.
          </p>
          <p className="text-lg lg:text-xl text-gray-800 leading-relaxed mt-4">
            Sebagai daerah yang terus berkembang, Majalengka juga memiliki Bandara Internasional Kertajati, yang berperan penting dalam mendukung perekonomian dan pariwisata. Selain itu, Majalengka memiliki beragam warisan budaya yang kaya,
            termasuk tradisi seni dan kerajinan yang diwariskan secara turun-temurun.
          </p>
        </div>
      </div>

      <p className="text-lg lg:text-xl text-gray-800 leading-relaxed mt-12 lg:mt-14 text-center lg:text-left px-4 lg:px-0" data-aos="fade-right">
        Majalengka tidak hanya menawarkan keindahan alam, tetapi juga keragaman budaya dan keramahan masyarakatnya. Di sini, Anda dapat merasakan suasana pedesaan yang tenang, bercengkerama dengan masyarakat lokal yang ramah, serta
        menikmati berbagai kuliner khas Sunda yang autentik. Dengan pesona alam dan budayanya, Majalengka siap menjadi destinasi yang meninggalkan kesan mendalam bagi setiap pengunjung.
      </p>
    </section>
  );
};

export default JakartaSection;
