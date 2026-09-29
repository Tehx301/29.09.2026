import express from "express";
import pool from './bd.js';
const app = express();

app.use(express.json());


app.get('/chamado', (request, response) => {
    try {
        const consulta = await pool.query("SELECT * FROM chamados")
    
        const data = new Date()
    console.log(data.toDateString());
   
        return response.status(200).json(consulta.rows);
    } catch (erro) {  
        return response.status(500).json({mensagem: erro})    
    }
});

app.listen(3000);