import React, { useEffect, useState } from 'react';

function ListaDeMensagens() {
    const [mensagens, setMensagens] = useState([]);

    useEffect(() => {
        const fetchMensagens = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/mensagens");
                const data = await response.json();
                setMensagens(data);
            } catch (error) {
                console.error("Erro ao listar mensagens", error);
            }
        };

        fetchMensagens();

    }, []);
    return (
        <div>
            <ul>
                {mensagens.map((msg) => (
                    <li key={msg.id}>
                        {msg.texto} <br />
                        {msg.userId}aa <br />
                        <strong>Data:</strong> {new Date(msg.datacriacao).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaDeMensagens;