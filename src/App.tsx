import Navbar from "./components/Navbar";
import ContainerGrid from "./components/ContainerGrid";
import "./_dist/app.css";
import Footer from "./components/Footer";
import CarouselAntd from "./components/CarouselAntd";

function App() {
  return (
    <div className="app">
      <Navbar />
      <CarouselAntd />
      <ContainerGrid />
      <Footer />
    </div>
  );
}

export default App;
