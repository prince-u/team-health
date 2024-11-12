const express=require('express');
const server=express();
const mysql=require('mysql2');
const dotenv=require('dotenv');
const cors= require('cors'); 

server.use(express.json());
server.use(cors());
dotenv.config();

const db = mysql.createConnection
    ({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })


db.connect((err) => {
    if (err) return console.log('Error connecting to the database');

    console.log('Connected to mysql successfully as id:', db.threadId);
  })

    server.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}`);

    console.log('Sending message to browser...');
    server.get('/', (req, res) => {
        res.send('Server started successfully')
    });
}); 
