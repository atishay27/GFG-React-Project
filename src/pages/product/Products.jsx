import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import "./products.css";
import ProductCard from "../../components/productCard/ProductCard";
function Products() {
  const [products, setProducts] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDataLoaded(true);
      });
  }, []);
  return (
    <div className="container">
      <NavBar />
      <div className="product-list">
        <div className="products">
          {products &&
            products.map((data) => {
              return <ProductCard data={data} />;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
