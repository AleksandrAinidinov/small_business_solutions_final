// Aleksandr Ainidinov
// 8905450
// 2025-04-17

import { Pool } from "pg";

// Connecting to the Neon.Tech database
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default pool;