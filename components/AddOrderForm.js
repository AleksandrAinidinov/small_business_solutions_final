// Aleksandr Ainidinov
// 8905450
// 2025-04-17

import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function AddOrderForm() {
    // object that stores data from the input from the user
    const [formData, setFormData] = useState({
        customer_name: "",
        product: "",
        quantity: 1,
        price: "",
    });

    // method to handle changes during the input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData( {...formData, [name]: value });
    }

    // method to handle submission of the form
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validations of the fields
        if (!formData.customer_name){
            alert("Customer Name field cannot be empty!");
            return;
        }

        if (!formData.product){
            alert("Product Name field cannot be empty!");
            return;
        }

        // quantity can't be less than 0 or empty
        if (!formData.quantity){
            alert("Quantity field cannot be empty!");
            return;
        }
        if (formData.quantity < 0){
            alert("Quantity field has to be more than '0'!");
            return;
        }

        // price can't be less than 0 or empty
        if (!formData.price){
            alert("Price field cannot be empty!");
            return;
        }
        if (formData.price < 0){
            alert("Price field has to be more than '0'!");
            return;
        }
        
        // creating a new order, sending a POST request to the server
        const response = await fetch("api/addOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        // check if the request was successful
        if (response.ok) {
            alert("Order Added Successfully!");

            // set all the fields to empty after the button is clicked
            setFormData({
                customer_name: "",
                product: "",
                quantity: 1,
                price: "",
            });
        }
        else {
            alert("Error Adding Order!");
            console.error("Error Adding Order:", response.statusText);
        }
    }

    // Form for adding a new order
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.formHeader}>Add New Order</h1>

            {/* Input fields for the user to fill */}
            <input
                type="text"
                name="customer_name"
                placeholder="Customer Name"
                value={formData.customer_name}
                onChange={handleChange}
                required
                className={styles.input}
            />

            <input
                type="text"
                name="product"
                placeholder="Product Name"
                value={formData.product}
                onChange={handleChange}
                required
                className={styles.input}
            />

            <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className={styles.input}
            />

            <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
                className={styles.input}
            />

            <button type="submit" className={styles.submitButton}>Add Order</button>
        </form>
    );
}