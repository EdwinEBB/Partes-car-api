import express from 'express';
import { createImprovement, deleteImprovementById, getAllImprovements, getImprovementById, updateImprovementById } from '../controllers/improvementController.js';


const improvementroutes=express.Router();

const tuningroutes=express.Router();
tuningroutes.get('/',(req,res)=>{
    res.send(`
    <H1>HOLA ESTAS EN IMPROMENT</H1>`);
})
improvementroutes.get('/getallimpro',getAllImprovements);
improvementroutes.get('/getimpro/:id',getImprovementById);
improvementroutes.post('/createimpro',createImprovement);
improvementroutes.put('/updateimpro/:id',updateImprovementById);
improvementroutes.delete('/deleteimpro/:id',deleteImprovementById);

export default improvementroutes;