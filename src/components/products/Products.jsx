import { useEffect, useState } from "react";
import { listProducts } from "../../services/ProductService";
import ProductCard from "../productCard/ProductCard";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    listProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) {
    return <h2>😞 There was an error, retry in a few minutes 😞</h2>;
  }

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <section id="Products" className="Products">
      <h2>🏪 Cool stuff we sell 🏪</h2>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}
