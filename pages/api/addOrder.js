// Aleksandr Ainidinov
// 8905450
// 2025-04-17

import pool from './db';

// Method for adding a new order
export default async function handler(req, res) {
    if (req.method == 'POST'){
        // fetching data from user's input
        const { customer_name, product, quantity, price } = req.body;

        // inserting a new record into the table
        try {
            const result = await pool.query('INSERT INTO orders (customer_name, product, quantity, price) VALUES ($1, $2, $3, $4)', [customer_name, product, quantity, price]);
            res.status(200).json({ message: 'Order Added Successfully!', order: result.rows[0] });
        }
        catch (error){
            res.status(500).json({ error: 'Error Adding Order' });
        }
    }
}