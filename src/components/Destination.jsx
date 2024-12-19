import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowForwardIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import wisataData from "../data/wisataData"; // Import data wisata
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DestinasiSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);
  const navigate = useNavigate();
  const showMore = () => {
    navigate(`/destinations`);
  };

  // Ambil hanya 6 destinasi pertama
  const limitedWisataData = wisataData.slice(0, 6);

  return (
    <section className="container mx-auto my-32 px-4">
      <div className="flex justify-end mb-4 px-4" data-aos="fade-left">
        <div className="flex items-center hover:text-emerald-800 cursor-pointer duration-300 ease-in-out" onClick={showMore} style={{ cursor: "pointer" }}>
          <h1 className="text-lg font-semibold pr-2">Show More</h1>
          <MdArrowForwardIos />
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {limitedWisataData.map((wisata) => (
          <SwiperSlide key={wisata.id}>
            <DestinationCard
              id={wisata.id} // Tambahkan id sebagai prop
              image={wisata.gambar}
              title={wisata.nama}
              description={wisata.deskripsi}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Tombol navigasi custom */}
      <div className="flex justify-center mt-4 space-x-4">
        <button className="custom-prev text-2xl text-gray-500 hover:text-gray-800">←</button>
        <button className="custom-next text-2xl text-gray-500 hover:text-gray-800">→</button>
      </div>
    </section>
  );
};

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
const DestinationCard = ({ id, image, title, description }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/destination/${id}`); // Navigasi ke halaman details dengan ID wisata
  };
  // Fungsi untuk memotong deskripsi

  return (
    <div className="w-full" onClick={handleCardClick} style={{ cursor: "pointer" }} data-aos="flip-left">
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img src={image} alt={title} className="w-full h-[30rem] object-cover" />
        <div className="absolute top-0 left-0 p-4">
          <h3 className="text-white font-bold text-lg">{title}</h3>
        </div>
        <div className="absolute bottom-0 left-0 w-full px-4 py-8 bg-gray-900 bg-opacity-70 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm leading-loose">{truncateText(description, 100)}</p>
        </div>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
  id: PropTypes.number.isRequired, // Tambahkan prop type untuk id
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DestinasiSection;
