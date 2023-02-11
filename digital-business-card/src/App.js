import Info from "./components/Info";
import ContactBtns from "./components/ContactBtns";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Info />
      <ContactBtns />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
