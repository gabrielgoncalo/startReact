const pool = require("../models/postDB");

 //criando post

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