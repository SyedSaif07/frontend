import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
// import { products } from '../../starting-code/data/products'
import "./HomePage.css";

export function HomePage({ cart, getCartItems}) {
  // fetch('http://localhost:3000/api/products')  //fetch cant be saved in a const so it needs a Promise then
  //     .then((response) => {
  //         return response.json()
  //     }).then((data) => { //response.json() cant be saved in a const so it needs a Promise then
  //         console.log(data)
  //     })
  const [products, setProducts] = useState([]);

  // using async we can store the response in a variable with await. then() is not required
  // async response cannot be a Promise so we create a async function within the function of useEffect
  useEffect(() => {
    const getHomeData = async() => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
     // axios is lot cleaner
    // .then((response) => {
    //   setProducts(response.data);
    // });
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} getCartItems={getCartItems}/>
      </div>
    </>
  );
}
