import express from 'express';
import { createTuningPart, deleteTuningPartById, getAllTuningParts, getTuningPartById, updateTuningPartById } from '../controllers/tuningPartsControllers.js';

const tuningroutes=express.Router();
tuningroutes.get('/',(req,res)=>{
    res.send(`
    <H1>HOLA ESTAS EN TUNING PARTS</H1>`);
})
tuningroutes.get('/getalltuning',getAllTuningParts);
tuningroutes.get('/gettuning/:id',getTuningPartById);
tuningroutes.post('/createtuning',createTuningPart);
tuningroutes.put('/updatetuning/:id',updateTuningPartById);
tuningroutes.delete('/deletetuning/:id',deleteTuningPartById);


export default tuningroutes;