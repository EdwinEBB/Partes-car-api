import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Mongoconnet from './config/db.js';
import improvementroutes from './routes/improvement.routes.js';
import tuningroutes from './routes/tuningpart.routes.js';

//Creación de servidor y variable de entorno
const app=express();
dotenv.config();
const port=process.env.port;

//Conexión a la base de datos
Mongoconnet();

//Rutas
app.use('/improvements',improvementroutes);
app.use('/tuningparts',tuningroutes);

//middleware
app.use(bodyParser.json());


app.listen(port,()=>{
    console.log(`Servidor inicado en el puerto ${port}`)
})