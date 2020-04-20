const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// get, post, put, delete

// listar todas as tarefas - get
app.get('/gerenciador-tarefas', (req, res) => {
    res.status(501).json({ erro: 'Não implementado' });
});
// listar uma tarefa por id - get
// cadastrar uma tarefa - post
// atualizar uma tarefa - put
// remover uma tarefa - detele
// concluir uma tarefa - put


app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`))
