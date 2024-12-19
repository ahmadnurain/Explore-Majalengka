import { useState, useEffect } from "react";
import wisataData from "../data/wisataData"; // Import data wisata
import { HiOutlineSearchCircle } from "react-icons/hi";
import AOS from "aos";

const Showmorewisata = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);
  const [searchTerm, setSearchTerm] = useState(""); // Kata kunci pencarian
  const [showMore, setShowMore] = useState(false);

  const initialCards = 6; // Jumlah card yang ditampilkan pertama kali
  const filteredWisata = wisataData.filter((destination) => destination.nama.toLowerCase().includes(searchTerm.toLowerCase())); // Filter wisata berdasarkan kata kunci pencarian
  const visibleCards = showMore ? filteredWisata : filteredWisata.slice(0, initialCards);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  // Fungsi untuk memotong deskripsi
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="container mx-auto py-48 pt-36 px-4">
      <div data-aos="fade-down">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center tracking-wide">Temukan Keindahan dan Pesona Destinasi Wisata Favorit Anda</h2>
        <p className="text-lg text-gray-600 text-center mb-12 lg:px-56 px-0 ">
          Jelajahi berbagai destinasi wisata yang menawarkan pengalaman tak terlupakan, mulai dari keindahan alam hingga kekayaan budaya yang memukau. Temukan tempat favorit Anda di sini.
        </p>
      </div>

      {/* Input Search */}

      <div className="flex justify-start mb-8 ml-2" data-aos="fade-right">
        <div className="relative w-full sm:w-1/4">
          <input
            type="text"
            placeholder="Cari destinasi wisata..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-emerald-800 pr-12 transition-all duration-300 ease-in-out focus:shadow-lg"
          />
          <HiOutlineSearchCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>
      </div>

      {/* Grid Card Wisata */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {visibleCards.length > 0 ? (
          visibleCards.map((destination) => (
            <div
              key={destination.id}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              onClick={() => (window.location.href = `/destination/${destination.id}`)} // Navigasi langsung ke halaman detail
              data-aos="flip-right"
            >
              <div className="relative w-full h-[20rem]">
                {/* Gambar Wisata */}
                <img src={destination.gambar} alt={destination.nama} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300" />
                {/* Backdrop Hitam */}
                <div className="absolute inset-0 bg-black/35"></div>
              </div>

              {/* Nama Destinasi di kiri atas */}
              <div className="absolute top-4 left-4 p-2">
                <h3 className="text-white font-semibold text-lg">{destination.nama}</h3>
              </div>

              {/* Deskripsi muncul saat hover */}
              <div className="absolute bottom-0 left-0 w-full px-4 py-8 bg-gray-900 bg-opacity-70 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm leading-loose">{truncateText(destination.deskripsi, 100)}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">Tidak ada destinasi yang sesuai dengan pencarian.</p>
        )}
      </div>

      {/* Tombol Show More */}
      {filteredWisata.length > initialCards && (
        <div className="flex justify-center mt-8">
          <button onClick={handleShowMore} className="bg-emerald-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-900 transition duration-300">
            {showMore ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Showmorewisata;
