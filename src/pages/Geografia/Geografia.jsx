import React from "react";
import Work from "../../assets/nothing to see here.jpg"

function Imagem() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img 
        src={Work}
        alt="Exemplo de Imagem" 
        style={{ width: "800px", height: "auto", borderRadius: "8px" }}
      />
    </div>
  );
}

export default Imagem;
