// Aleksandr Ainidinov
// 8905450
// 2025-04-17

import pool from './db';

// Method for fetching all previous orders
export default async function handler(req, res) {
    if (req.method == 'GET'){
        // requsting all records from the 'orders' table
        try {
            const result = await pool.query('SELECT * FROM orders');
            res.status(200).json({ message: 'Orders Fetched Successfully!', item: result.rows });
        }
        catch (error){
            res.status(500).json({ error: 'Error Fetching Orders' });
        }
    }
}