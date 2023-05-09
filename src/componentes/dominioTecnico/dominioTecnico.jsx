import React,{Component} from "react";
import "./dominioTecnico.css";
import circuloCelular from "./circuloCelular.png"
import marcaVerificacao from "./marcaDeVerificacao.png"
class DominioTecnico  extends Component {
    
    componentDidMount() {
        let imageBackgroundDominiosTecnicos = new Image();
        imageBackgroundDominiosTecnicos.src = circuloCelular;
    
        let divDominiosTecnicos = document.querySelector(".divDominiosTecnicos");
        imageBackgroundDominiosTecnicos.addEventListener("load", () => {
          divDominiosTecnicos.style.backgroundImage = `url('${imageBackgroundDominiosTecnicos.src}')`;
          divDominiosTecnicos.style.opacity=1
        });
      } 
    
    render(){
       
    return(
        <div className="componenteTodoDominiosTecnicos">
           <h1 className="h1DominiosTecnicos"> Especialidades </h1>

           <div className="divDominiosTecnicos">
                <div className="divHtmlList"><img className="marcaVerificacao" src={marcaVerificacao} alt="marcaVerificação"></img>HTML</div>
                <div className="divCssList"><img className="marcaVerificacao" src={marcaVerificacao} alt="marcaVerificação"></img>CSS</div>
                <div className="divJavascriptList"><img className="marcaVerificacao" src={marcaVerificacao} alt="marcaVerificação"></img>JAVASCRIPT</div>
                <div className="divNodeJSList"><img className="marcaVerificacao" src={marcaVerificacao} alt="marcaVerificação"></img>NodeJS</div>
                <div className="divReactList"><img className="marcaVerificacao" src={marcaVerificacao} alt="marcaVerificação"></img>React</div>
                <div className="divPythonList"><img className="marcaVerificacao" src={marcaVerificacao} alt="marcaVerificação"></img>Python</div>

           </div>
        </div>
    )
}
}
export default DominioTecnico