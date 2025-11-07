import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function Results() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query") || "";
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!query) return;
    fetch(`${API}/items?q=${encodeURIComponent(query)}`)
      .then(r => r.json())
      .then(data => setItems(data.items || []))
      .catch(() => setItems([]));
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Resultados para: {query}</h1>
      <p>Resultados: {items.length}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "20px" }}>
        {items.map(p => (
          <Link key={p.id} to={`/item/${p.id}`} style={{ textDecoration: "none", color: "white", border: "1px solid #333", borderRadius: "10px", padding: "15px" }}>
            <img src={p.thumbnail} alt={p.title} style={{ width: "100%", borderRadius: "10px" }} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <p>{p.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
