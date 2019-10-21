import dotenv from 'dotenv';

// initialize configuration
dotenv.config();

// App
export const PORT = process.env.SERVER_PORT || 3000;
