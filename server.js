import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express();
const port = 3000;

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());

// Rota GET para o endpoint principal
app.get('/usuarios', async (req, res) => {

    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
});

// Rota POST para adicionar um novo usuário
app.post('/usuarios', async (req, res) => {

    const { name, age, email } = req.body;

    // Verifica se o nome e a idade foram fornecidos
    if (!name || !age) {
        return res.status(400).send('Nome e idade são obrigatórios');
    }

    await prisma.user.create({
        data: {
            name: name,
            age: age, 
            email: email
        }
    })
    
    // Envia uma resposta com o novo usuário
    return res.status(201).json(req.body);
});



app.put('/usuarios/:id', async (req, res) => {


    const { name, age, email } = req.body;

    await prisma.user.update({
        where: {
            id: req.params.id 
        },
        data: {
            name: name,
            age: age,
            email: email
        }
    })
    
    // Envia uma resposta com o novo usuário
    return res.status(201).json(req.body);
});


app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: 'usuario deletado com sucesso'})
})

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

//MONGO_USER = caio
//MONGO_PASSWORD = W0jZ1AlgJTVSsugV