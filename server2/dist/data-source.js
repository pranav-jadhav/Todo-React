import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();
const db = new DataSource({
    type: 'postgres',
    host: process.env.PGHOST,
    port: 5432,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: true,
    logging: false,
    ssl: {
        rejectUnauthorized: false
    },
    entities: ["db/entities/**/*.ts"],
    migrations: ["migration/**/*.ts"],
});
export default db;
