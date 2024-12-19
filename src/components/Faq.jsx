import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FAQSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Apa saja destinasi wisata yang direkomendasikan di website Explore Wisata?",
      answer: "Destinasi wisata yang direkomendasikan mencakup pantai, pegunungan, tempat budaya, dan banyak lagi!",
    },
    {
      id: 2,
      question: "Bagaimana cara memesan paket wisata melalui website Explore Wisata?",
      answer: "Anda dapat memesan melalui menu pemesanan dengan memilih destinasi dan tanggal perjalanan yang diinginkan.",
    },
    {
      id: 3,
      question: "Apakah tersedia layanan pemandu wisata di setiap destinasi?",
      answer: "Ya, layanan pemandu wisata tersedia di destinasi tertentu. Silakan cek detail paket wisata.",
    },
    {
      id: 4,
      question: "Bisakah saya membatalkan atau mengubah reservasi yang telah dibuat?",
      answer: "Pembatalan atau perubahan reservasi dapat dilakukan melalui menu akun Anda dengan syarat dan ketentuan berlaku.",
    },
    {
      id: 5,
      question: "Apakah ada diskon untuk pemesanan rombongan?",
      answer: "Ya, diskon khusus tersedia untuk pemesanan rombongan. Hubungi tim kami untuk detail lebih lanjut.",
    },
    {
      id: 6,
      question: "Apa saja metode pembayaran yang tersedia di Explore Wisata?",
      answer: "Metode pembayaran mencakup transfer bank, kartu kredit, dan dompet digital seperti OVO atau GoPay.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-10 sm:py-16">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800" data-aos="fade-down">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items Container */}
        <div className="bg-white rounded-lg md:shadow-lg px-2 sm:p-8 space-y-4" data-aos="flip-down">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 p-4 hover:bg-gray-100 cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
              {/* FAQ Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Bulat & Tetap Proporsional */}
                  <div className="flex items-center justify-center w-8 h-8 bg-emerald-800 text-white font-bold rounded-full shrink-0">{faq.id}</div>
                  <span className="text-gray-800 font-medium text-sm sm:text-base">{faq.question}</span>
                </div>
                <span className="text-2xl text-gray-500">{openFAQ === faq.id ? "−" : "+"}</span>
              </div>

              {/* FAQ Answer */}
              {openFAQ === faq.id && <div className="mt-4 text-gray-700 text-sm sm:text-base">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
