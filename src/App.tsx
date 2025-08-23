import ListGroup from "./components/ListGroup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
function App() {
  //let items = ["Canon", "Nikon", "Minolta", "Pentax"];

  //   const handleSelectItem = (item: string) => {
  //     console.log(item);
  //   };

  return (
    <div>
      <Navbar />
      <main className="main-content container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          {/* Add more routes here */}
        </Routes>
      </main>
      <script src="/node_modules/masonry-layout/dist/masonry.pkgd.min.js"></script>
    </div>
  );
}

export default App;
