import express from 'express';


const improvementroutes=express.Router();


improvementroutes.get('/getallimpro');
improvementroutes.get('/getimprovement/:id');
improvementroutes.post('/createimpro');
improvementroutes.put('/updateimpro/:id');
improvementroutes.delete('/deleteimpro/:id');

export default improvementroutes;