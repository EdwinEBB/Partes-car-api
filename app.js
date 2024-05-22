import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Mongoconnet from './config/db.js';

//Creación de servidor y variable de entorno
const app=express();
dotenv.config();
const port=process.env.port;

//Conexión a la base de datos
Mongoconnet();


//middleware
app.use(bodyParser.json());


app.listen(port,()=>{
    console.log(`Servidor inicado en el puerto ${port}`)
})