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



//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas
app.use('/improvements',improvementroutes);
app.use('/tuningparts',tuningroutes);
app.get('/',(res,req)=>{
    res.json({message:`Hola, bienvenido a la api de partes de autos,
    esta api esta divida en 2 secciones:
    -improvements o mejoras
    -tuning parts o partes de tuneo
    para acceder a cada sección debes añadir las siguientes rutas al link
    para improvements:
    /improvements
    /improvements/getallimpro
    /improvements/getimpro/id
    /improvements/createimpro
    /improvements/updateimpro/id
    /improvements/deleteimpro/id`})
})

app.listen(port,()=>{
    console.log(`Servidor inicado en el puerto ${port}`)
})