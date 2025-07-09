import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function CampoDePesquisa(){
    const [busca, setBusca] = useState('');

    const handlePesquisar = () => {
        console.log("Buscando por: ", busca );
    };

    return (
        <div className="campo-pesquisa-container">
            <input
            type="text"
            placeholder="pesquisar"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="campo-pesquisa"
            />
            <button conClick={handlePesquisar} className="btn-pesquisar">
                <FiSearch />
            </button>
        </div>
    );
}

export default CampoDePesquisa;