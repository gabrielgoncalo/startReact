import React from "react";

function CampoDeFoto({src, alt = "Foto do perfil"}) {
    return (
        <div className="foto-perfil-container">
            <img src={src} alt={alt} className="foto-perfil" />

        </div>
    );
}

export default CampoDeFoto;