import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const API = import.meta.env.VITE_API_URL;

export default function Results() {
  const query = new URLSearchParams(useLocation().search).get("query") || "";
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/items?q=${encodeURIComponent(query)}`)
      .then(r => r.json())
      .then(data => {
        setItems(data.items || []);
        setCount(data.count || 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [query]);

  return (
    <main className="page">
      <h1>Resultados: {query}</h1>
      {loading && <p>Cargando...</p>}
      {!loading && count === 0 && <p>No se encontraron productos.</p>}
      {items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </main>
  );
}
