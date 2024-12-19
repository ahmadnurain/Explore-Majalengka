import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "/assets/images-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDestinationsPage = location.pathname.startsWith("/destination/");
  const isDestinationsRoute = location.pathname === "/destinations";
  const isHomeRoute = location.pathname === "/";

  const navbarClass = isDestinationsPage || isDestinationsRoute || isScrolled ? "bg-white text-gray-600 shadow-md" : "bg-transparent text-white";

  const handleSectionNavigate = (sectionId) => {
    if (isDestinationsPage || isDestinationsRoute) {
      navigate(`/#${sectionId}`);
    } else if (isHomeRoute) {
      navigate(`/#${sectionId}`);
    } else {
      navigate(`/destinations#${sectionId}`);
    }

    // Scroll ke elemen dengan ID yang sesuai setelah navigasi
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Menunggu sedikit agar navigasi selesai
  };

  return (
    <nav className={`fixed w-full z-50 font-plus transition-all duration-300 ${navbarClass}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <div className="flex items-center">
          <img src={Icon} alt="Logo" className="h-8 w-8 mr-2 object-contain" />
          <span className="text-emerald-800 font-semibold">EXPLORE</span> MAJALENGKA
        </div>

        <div className="hidden md:flex space-x-20 font-semibold px-16">
          <button onClick={() => handleSectionNavigate("home")} className="hover:text-emerald-700">
            Home
          </button>
          <button onClick={() => handleSectionNavigate("about")} className="hover:text-emerald-700">
            About
          </button>
          <button onClick={() => handleSectionNavigate("destinations")} className="hover:text-emerald-700">
            Destinations
          </button>
          <button onClick={() => handleSectionNavigate("faq")} className="hover:text-emerald-700">
            Faq
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className={`p-2 rounded-md transition-all duration-300 ${isScrolled ? "bg-gray-200 text-gray-600" : "bg-transparent text-white"}`}>
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden flex flex-col items-center space-y-4 py-4 font-bold transition-all duration-300 ${navbarClass}`}>
          <button
            onClick={() => {
              handleSectionNavigate("home");
              toggleMenu();
            }}
            className="hover:text-gray-300"
          >
            Home
          </button>
          <button
            onClick={() => {
              handleSectionNavigate("about");
              toggleMenu();
            }}
            className="hover:text-gray-300"
          >
            About
          </button>
          <button
            onClick={() => {
              handleSectionNavigate("destinations");
              toggleMenu();
            }}
            className="hover:text-gray-300"
          >
            Destinations
          </button>
          <button
            onClick={() => {
              handleSectionNavigate("faq");
              toggleMenu();
            }}
            className="hover:text-gray-300"
          >
            Faq
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
