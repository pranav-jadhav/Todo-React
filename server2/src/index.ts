import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './data-source';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(db);

// db.initialize().then(() => {
//     console.log('Database connected');
// }).catch((err) => {
//     console.error(err);
// });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on33 http://localhost:${process.env.PORT}`);
});