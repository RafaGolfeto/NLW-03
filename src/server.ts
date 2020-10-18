import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors'
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';



const app = express();

app.use(cors());
app.use(express.json())

// Rota = conjunto 
// Recurso = usuario
// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros = 

// GET = Buscar uma informação (lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: htpp://localhost:3333/users?search=diego
// Route Params: htpp://localhost:3333/users/1 (Identficar um recurso)
// Body: htpp://localhost:3333/users/1 (Identficar um recurso)

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)


app.listen(3333);