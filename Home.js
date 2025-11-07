import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://your-backend-url/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>🛒 E-Commerce Store</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(p => (
          <div key={p._id} style={{ margin: 10, border: "1px solid #ccc", padding: 10 }}>
            <img src={p.image} alt={p.name} width="100" />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
