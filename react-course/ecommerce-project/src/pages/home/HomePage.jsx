import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
// import { products } from '../../starting-code/data/products'
import "./HomePage.css";

export function HomePage({ cart }) {
  // fetch('http://localhost:3000/api/products')  //fetch cant be saved in a const so it needs a Promise then
  //     .then((response) => {
  //         return response.json()
  //     }).then((data) => { //response.json() cant be saved in a const so it needs a Promise then
  //         console.log(data)
  //     })
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products") // axios is lot cleaner
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
