import React, { useEffect } from "react";
import "./apresentacaoCafe.css";
import imagemCafe from "./notebookCafe.jpg";
import logoLInkedin from "./logoLinkedin.png"
import logoGithub from "./logoGithub.png"
import logoGmail from "./logoGmail.png"
const ApresentacaoCafe = () => {
  const visibilidadeDoComponente=(objImagemCafe)=>{
    let componenteTodoCafe = document.querySelector(".componenteTodoCafe")
    componenteTodoCafe.classList.add('componenteApresentacaoCafeVisivel')
    componenteTodoCafe.style.backgroundImage=`url('${objImagemCafe.src}')`
  }

  useEffect(()=>{
    const objImagemCafe = new Image();
    objImagemCafe.src = imagemCafe;
    objImagemCafe.addEventListener("load",()=>visibilidadeDoComponente(objImagemCafe))
    },[])
    
  
  return (
    <div className='componenteTodoCafe' >
      <div className="textosComponenteCafe">
        <div className='divMeuNomeComponenteCafe'>Sérgio Melo</div>

        <div className='divTextoDesenvolvedorComponenteCafe'>Desenvolvedor</div>
      </div>
      <a href="https://www.linkedin.com/in/sergio-nogueira-de-melo-junior/">
        <img className='imgLogoLinkedin' src={logoLInkedin} alt="logo linkedin"></img>
      </a>

      <a href="https://github.com/sergio3213">
        <img className='imgLogoGithub' src={logoGithub} alt="logo linkedin"></img>
      </a>
      
      <a href="mailto:sergiomelo.desenvolvedor@gmail.com">
        <img className='imgLogoGmail' src={logoGmail} alt="logo linkedin"></img>
      </a>
    </div>
  );
};

export default ApresentacaoCafe;
