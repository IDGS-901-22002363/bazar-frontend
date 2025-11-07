import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <Link to={`/item/${item.id}`} className="card">
      <img src={item.thumbnail} />
      <div className="card-info">
        <h3>{item.title}</h3>
        <p>{item.category}</p>
        <p className="price">$ {item.price}</p>
      </div>
    </Link>
  );
}
