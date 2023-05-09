import React, { useState, useEffect } from "react";
import "./minhaHistoria.css";

const MinhaHistoria = () => {
  const minhaHistoria = `Mee chamo Sergio e tenho 28 anos. Sou um desenvolvedor web formado pela Trybe, uma escola de programação com foco em desenvolvimento full stack.

    Ao longo da minha jornada, tive a oportunidade de me envolver em diversos projetos desafiadores adquirindo experiência em desenvolvimento front-end, back-end e banco de dados.

    Se você quiser saber mais sobre mim ou tiver alguma pergunta, fique à vontade para entrar em contato!`;

  const [stateHistoria, setStateHistoria] = useState("");
  
  useEffect(()=>{
        let contMinhaHistoria = 0;

        let interval = setInterval(()=>
        
        {
            setStateHistoria(prevTexto=>prevTexto+minhaHistoria[contMinhaHistoria]);
            contMinhaHistoria+=1;
            if(contMinhaHistoria===minhaHistoria.length-1){
                clearInterval(interval)
            }
        },30)
        return ()=>{
            clearInterval(interval)}
    },[])
  return (
    <div className='componenteTodoMinhaHistoria'>
      <div className='divComH1SobreMim'>
        <h1 className='h1SobreMimComponenteTodo'>Sobre mim</h1>
      </div>

      <div className='divTextoQueDigitaSobreMim'>
        {stateHistoria}
      </div>
       
    </div>
  );
};

export default MinhaHistoria;
