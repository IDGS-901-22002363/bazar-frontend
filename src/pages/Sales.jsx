import { useEffect, useState } from "react";
const API = import.meta.env.VITE_API_URL;

export default function Sales() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch(`${API}/sales`)
      .then(r => r.json())
      .then(setRows);
  }, []);

  return (
    <main className="page">
      <h1>Compras Registradas</h1>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.product_title}</td>
              <td>$ {r.unit_price}</td>
              <td>{r.qty}</td>
              <td>$ {r.total}</td>
              <td>{new Date(r.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
