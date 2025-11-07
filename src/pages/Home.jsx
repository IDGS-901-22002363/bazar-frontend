import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  function doSearch(e) {
    e.preventDefault();
    navigate(`/results?query=${q}`);
  }

  return (
    <main className="page">
      <h1>Bazar Online</h1>
      <form onSubmit={doSearch} className="search-box">
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar..." />
        <button>Buscar</button>
      </form>
    </main>
  );
}
