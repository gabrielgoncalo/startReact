const { Pool } = require("pg");

// Configuração do meu banco de dados

const pool =  new Pool ({
    user: "postgres",
    host: "localhost",
    database: "myplace",
    password: "gabs12345",
    port: 5432

});

module.exports = pool;