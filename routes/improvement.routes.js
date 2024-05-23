import express from 'express';
import { createImprovement, deleteImprovementById, getAllImprovements, getImprovementById, updateImprovementById } from '../controllers/improvementController.js';


const improvementroutes=express.Router();


improvementroutes.get('/getallimpro',getAllImprovements);
improvementroutes.get('/getimprovement/:id',getImprovementById);
improvementroutes.post('/createimpro',createImprovement);
improvementroutes.put('/updateimpro/:id',updateImprovementById);
improvementroutes.delete('/deleteimpro/:id',deleteImprovementById);

export default improvementroutes;