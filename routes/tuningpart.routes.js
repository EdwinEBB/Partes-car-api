import express from 'express';

const tuningroutes=express.Router();

tuningroutes.get('/getalltuning',);
tuningroutes.get('/gettuning/:id');
tuningroutes.post('/createtuning');
tuningroutes.put('/updatetuning/:id');
tuningroutes.delete('/deletetuning/:id');


export default tuningroutes;