import ApresentacaoCafe from "./componentes/apresentacaoCafe/apresentacaoCafe";
import DominioTecnico from "./componentes/dominioTecnico/dominioTecnico";
import MeusProjetos from "./componentes/meusProjetos/meusProjetos";
import MinhaHistoria from "./componentes/minhaHistoria/minhaHistoria";

function App() {
  return (
    <div className="App">
      <ApresentacaoCafe></ApresentacaoCafe> 
      <MinhaHistoria></MinhaHistoria>
      <DominioTecnico></DominioTecnico>
      <MeusProjetos></MeusProjetos>
      
    </div>
  );
}

export default App;
