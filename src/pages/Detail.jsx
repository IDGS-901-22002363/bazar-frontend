import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [qty, setQty] = useState(1);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${API}/items/${id}`)
      .then(r => r.json())
      .then(data => {
        if (data.images && typeof data.images === "string") {
          try { data.images = JSON.parse(data.images); } catch { data.images = []; }
        }
        setItem(data);
      });
  }, [id]);

  function buy() {
    fetch(`${API}/addSale`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: Number(id), qty: Number(qty) })
    })
      .then(r => r.json())
      .then(d => setMsg(d.ok ? "Compra registrada" : d.error || "Error"));
  }

  if (!item) return <main className="page">Cargando...</main>;

  return (
    <main className="page">
      <h1>{item.title}</h1>
      <div className="gallery">
        <img src={item.thumbnail} />
      </div>
      <p className="price">$ {item.price}</p>
      <p>{item.description}</p>
      <input type="number" min="1" value={qty} onChange={e => setQty(e.target.value)} />
      <button onClick={buy}>Registrar compra</button>
      {msg && <p style={{ marginTop: ".8rem", textAlign: "center" }}>{msg}</p>}
    </main>
  );
}
