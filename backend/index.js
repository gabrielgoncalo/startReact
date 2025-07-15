const express = require("express");
const cors = require("cors");
const path = require("path");
const msgRoute = require("./src/routes/msgRoute");
const userRoute = require("./src/routes/userRoute");
const app = express();

const PORT = 5000;


app.use(cors()); //permite que o backend receba requisições do frontend

app.use(express.json()); //le o json no body

app.use(express.static(path.join(__dirname, "../frontend/dist"))); //serve arquivos estaticos do frontend

app.use("/api/mensagens", msgRoute);
app.use("/api/usuarios", userRoute);

// Rota fallback: devolver index.html para todas as rotas que não sejam API
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});


