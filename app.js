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
app.get('/', (req, res) => {
    const message = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API de partes de autos</title>
    </head>
    <body>
        <h1>¡Bienvenido a la API de partes de autos!</h1>
        <p>Esta API está dividida en 2 secciones:</p>
        <ul>
            <li>'improvements' o mejoras</li>
            <li>'tuning parts' o partes de tuneo</li>
        </ul>
        <p>Para acceder a cada sección, utiliza las siguientes rutas adicionales:</p>
        <h2>Para mejoras:</h2>
        <ul>
            <li>/improvements: endpoint</li>
            <li>/improvements/getallimpro</li>
            <li>/improvements/getimpro/id</li>
            <li>/improvements/createimpro</li>
            <li>/improvements/updateimpro/id</li>
            <li>/improvements/deleteimpro/id</li>
        </ul>
        <h2>Para partes de tuneo:</h2>
        <ul>
            <li>/tuningparts endpoint</li>
            <li>/tuningparts/getalltuning</li>
            <li>/tuningparts/gettuning/id</li>
            <li>/tuningparts/createtuning</li>
            <li>/tuningparts/updatetuning/id</li>
            <li>/tuningparts/deletetuning/id</li>
        </ul>
    </body>
    </html>
    `;

    res.status(200).send(message);
});

app.listen(port,()=>{
    console.log(`Servidor inicado en el puerto ${port}`)
})