const { Pool } = require("pg");

// Configuração do meu banco de dados

const pool =  new Pool ({
    user: "seu_usuario",
    host: "localhost",
    database: "myplace",
    password: "sua_senha",
    port: 5432

});

module.exports = pool;