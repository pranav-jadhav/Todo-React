import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

console.log("dsfsdfsd54654");
console.log(process.env.PGDATABASE);

export const AppDataSource = new DataSource ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    ssl: {
        rejectUnauthorized: false
    },
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
});
