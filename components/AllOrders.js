// Aleksandr Ainidinov
// 8905450
// 2025-04-17

import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

export default function AllOrders() {
    // object that stores all the orders from the database
    const [orders, setOrders] = useState([]);

    // fetching all the orders from the database
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // gets all the orders making a GET request to the server
                const result = await fetch('/api/getOrders');
                if (result.ok) {
                    const data = await result.json();
                    setOrders(data.item);
                }
                else {
                    console.error('Error Fetching Orders:', result.statusText);
                }
            }
            catch (error) {
                console.error('Error Fetching Orders:', error);
            }
        };
        
        fetchOrders()}, []);

    // Table that contains all the orders
    return (
        <div className={styles.allOrders}>
            <h1 className={styles.formHeader}>All Orders</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    {/* going through all the orders and returning order's fields */}
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.id}</td>
                            <td>{order.customer_name}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>${order.price}</td>
                            <td>{new Date(order.order_date).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}