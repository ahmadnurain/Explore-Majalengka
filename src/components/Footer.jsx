const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10 px-16">
      <div className="container mx-auto px-4">
        {/* Footer Content Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-white">Explore Wisata</div>
            {/* Short Description */}
            <p className="text-whitetext-center lg:text-left max-w-sm">Temukan destinasi wisata terbaik dan pengalaman tak terlupakan di seluruh Indonesia.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-white">Navigasi</h3>
            <a href="#home" className="text-white hover:text-emerald-300">
              Beranda
            </a>
            <a href="#about" className="text-white hover:text-emerald-300">
              About
            </a>
            <a href="#destinations" className="text-white hover:text-emerald-300">
              Destination
            </a>
            <a href="#faq" className="text-white hover:text-emerald-300">
              Faq
            </a>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-white">Hubungi Kami</h3>
            <p className="text-white">Email: info@explorewisata.com</p>
            <p className="text-white">Telepon: +62 123 456 789</p>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-emerald-600 mt-8">&copy; 2024 Septian Nugraha Kartadilaga. Semua Hak Cipta Dilindungi.</div>
      </div>
    </footer>
  );
};

export default Footer;
