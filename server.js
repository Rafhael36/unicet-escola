const express = require('express');
const EstudanteRoutes = require('./src/routes/EstudanteRoutes');

const app = express();
const PORT = 3000;

app.use(express.json ());

// Registra as rotas de aplicação
app.use('/', EstudanteRoutes);

app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});