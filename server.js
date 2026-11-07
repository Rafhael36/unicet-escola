const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/docs/swagger-output.json');

const express = require('express');
const EstudanteRoutes = require('./src/routes/EstudanteRoutes');
const cursoRoutes = require('./src/routes/cursoRoutes');
const disciplinaRoutes = require('./src/routes/disciplinaRoutes');
const matriculasRoutes = require('./src/routes/matriculasRoutes');

const app = express();
const PORT = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json ());

// Registra as rotas de aplicação
app.use('/estudantes', EstudanteRoutes);
app.use('/cursos', cursoRoutes);
app.use('/disciplina', disciplinaRoutes);
app.use('/matriculas', matriculasRoutes);

app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


