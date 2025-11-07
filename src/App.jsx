import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Results from "./pages/Results.jsx";
import Detail from "./pages/Detail.jsx";
import Sales from "./pages/Sales.jsx";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/">Bazar Universal</Link>
        <Link to="/sales">Compras</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/item/:id" element={<Detail />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </div>
  );
}
