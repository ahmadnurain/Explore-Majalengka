import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destination from "./components/Destination";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import DestinationDetails from "./pages/DestinationDetails";
import Showmorewisata from "./pages/Showmorewisata";

function App() {
  return (
    <Router>
      <Navbar />

      {/* Navbar di luar Routes agar selalu muncul di atas */}
      <Routes>
        {/* Route untuk halaman utama (Home) */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="destinations">
                <Destination />
              </section>
              <section id="faq">
                <Faq />
              </section>
              <Footer />
            </>
          }
        />

        {/* Route untuk halaman daftar destinasi */}
        <Route
          path="/destinations"
          element={
            <>
              <Showmorewisata />
              <Footer />
            </>
          }
        />

        {/* Route untuk halaman detail destinasi */}
        <Route
          path="/destination/:id"
          element={
            <>
              <DestinationDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
