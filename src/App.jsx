import "./App.css";
import Home from "./pages/home"; // perhatikan penamaan file (case-sensitive saat deploy)
import DetailPortfolio from "./pages/DetailPortfolio";
import PageNotFound from "./pages/PageNotFound";
import Experience from "./components/Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      {/* Letakkan di luar <Routes> */}
      <ScrollToTop smooth /> {/* ganti ke <ScrollToTop /> jika mau non-smooth */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<DetailPortfolio />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
