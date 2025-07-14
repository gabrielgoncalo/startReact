const pool = require("../models/postDB");
const bcrypt = require("bcrypt");
 //criando msg ou post

exports.criarUser = async(req, res) => {
    const { username, password } = req.body;
    try {
        const hashed = await bcrypt.hash(password, 10);
        const result = await pool.query(
            "INSERT INTO usuario (username, senha) VALUES ($1, $2) RETURNING id, username",
            [username, hashed]
        );
        res.status(201).json(result.row[0]);
    } catch (error) {
        console.error("Erro ao registrar:", error);
        res.status(500).json({ error: "Erro ao registrar" });
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query(
            "SELECT * FROM usuarios WHERE username = $1", [username]
        );
        const user = result.rows[0];
        if (user && await bcrypt.compare(password, user.senha)) {
            res.json({ id: user.id, username: user.username });
        } else {
            res.status(401).json({ error: "Credenciais inválidas" });
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).json({ error: "Erro ao fazer login" });
    }
};


 exports.criarPost = async (req, res) => {
    try{
        const { texto, userId } = req.body;
        const resultado = await pool.query(
        "INSERT INTO mensagens (texto, userId) VALUES ($1, $2) RETURNING *", 
        [texto, userId]
        );
        res.status(201).json(resultado.rows[0]);
    }   catch (error) {
        console.error("Erro ao criar Post: ", error);
        res.status(500).json({ error: "Erro ao criar Post" });
    }

 };

 exports.listarPost = async (req, res) => {
    try{
        const resultado = await pool.query(
            "SELECT * FROM mensagens ORDER BY dataCriacao DESC"

        );
        res.json(resultado.rows);
    } catch (error) {
        console.error("Erro ao listar posts: ", error);
        res.status(500).json({ error: "Erro ao listar posts" });
    } 
 };