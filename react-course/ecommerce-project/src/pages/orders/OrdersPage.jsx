import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import "./OrdersPage.css";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async ()=> {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    // axios.get("/api/orders?expand=products").then((response) => {
    //   setOrders(response.data);
    // });
    getOrders();
  }, []);
  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>
                <OrdersGrid order={order} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
