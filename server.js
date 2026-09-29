import express from 'express';

const app = express()

app.use(express.json())

app.get('/oi',(req,res)=>{
    return res.status(200).json("server online")
})

app.liste(3000)