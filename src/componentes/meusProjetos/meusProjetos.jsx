import React from "react";
import './meusProjetos.css';
import ConnectLove from './componentesProjetos/connectLove.jsx'

const MeusProjetos = () => {
  return (
    <div className="componenteTodoMeusProjetos">
      <h1 className="h1ComponenteTodoMeusProjetos">Meus projetos</h1>
      <ConnectLove></ConnectLove>
    </div>
  );
};

export default MeusProjetos;
