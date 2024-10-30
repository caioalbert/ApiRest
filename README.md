Api Rest em Desenvolvimento

COMANDO PARA CRIAR O BANCO DE DADOS BASEADO NO SCHEMA
npx prisma db push

PARA VISUALIZAR A CRIAÇÃO DAS TABELAS SEM A NECESSIDADE DE ABRIR O MONGO FB

npx prisma studio


End Points

GET /usuarios

    https://api-rest-beta-ten.vercel.app/usuarios

POST /usuarios

    https://api-rest-beta-ten.vercel.app/usuarios

{
  "name": "Fulano",
  "age": "24",
  "email": "email@dev.com"
}


Put /usuarios
    http://localhost:3000/usuarios/id
{
    "email": "eu@dev.com",
    "name": "fulano",
    "age": "24" 
}

Delete /usuarios
    http://localhost:3000/usuarios/id