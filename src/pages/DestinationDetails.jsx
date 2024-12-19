import { useParams } from "react-router-dom";
import wisataData from "../data/wisataData";
import { useEffect } from "react";
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave } from "react-icons/fa";

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = wisataData.find((wisata) => wisata.id === parseInt(id, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!destination) {
    return <p className="text-center mt-10 text-red-500">Destinasi tidak ditemukan!</p>;
  }

  return (
    <div className="mx-auto py-16 px-4 max-w-6xl">
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden my-10 flex flex-col lg:flex-row">
        {/* Gambar */}
        <img src={destination.gambar} alt={destination.nama} className="w-full lg:w-1/2 h-96 object-cover rounded-xl" />

        {/* Konten */}
        <div className="p-6 text-gray-800 lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-emerald-800 flex items-center gap-2">{destination.nama}</h1>
          <p className="text-gray-600 leading-relaxed mb-6">{destination.deskripsi}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-emerald-700" /> Lokasi
            </h2>
            <p className="text-gray-500">{destination.lokasi}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-700">
              <FaClock className="text-emerald-700" /> Jadwal
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              {Object.entries(destination.jadwal).map(([hari, detail]) => (
                <li key={hari} className="flex items-start gap-2">
                  <span className="font-semibold">{detail.sesi}:</span> {detail.waktu}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-700">
              <FaMoneyBillWave className="text-emerald-700" /> Harga
            </h2>
            <p className="text-green-600 font-bold text-2xl">{destination.harga}</p>
          </div>
        </div>
      </div>

      {/* Maps Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6 p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <FaMapMarkerAlt className="text-emerald-700" /> Lokasi di Peta
        </h2>
        <div className="w-full h-96">
          <iframe
            title="Lokasi Peta"
            src={destination.mapsUrl} // URL peta dari data
            className="w-full h-full rounded-lg border"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
