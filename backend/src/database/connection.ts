import { Pool } from 'pg';

// PostgreSQL connection pool configuration
const pool = new Pool({
    user: 'your_username', // Update with your PostgreSQL username
    host: 'localhost',
    database: 'your_database', // Update with your database name
    password: 'your_password', // Update with your password
    port: 5432, // Default PostgreSQL port
});

// Function to handle database queries
export const query = (text: string, params?: any[]) => {
    return pool.query(text, params);
};

export default pool;