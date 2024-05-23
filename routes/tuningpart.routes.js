import express from 'express';
import { createTuningPart, deleteTuningPartById, getAllTuningParts, getTuningPartById, updateTuningPartById } from '../controllers/tuningPartsControllers';

const tuningroutes=express.Router();

tuningroutes.get('/getalltuning',getAllTuningParts);
tuningroutes.get('/gettuning/:id',getTuningPartById);
tuningroutes.post('/createtuning',createTuningPart);
tuningroutes.put('/updatetuning/:id',updateTuningPartById);
tuningroutes.delete('/deletetuning/:id',deleteTuningPartById);


export default tuningroutes;