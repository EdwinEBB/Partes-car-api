import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Mongoconnet= async ()=>{
    try {
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión a la base de datos lista")

    } catch (error) {
        console.error('Error al conectarse con la base de datos:',error.message);
        process.exit(1);
    }
}

export default Mongoconnet;