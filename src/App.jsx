import React from 'react';
import TomografiaOdontologica from './components/TomografiaOdontologica/TomografiaOdontologica';
import Grid from './components/Grid/Grid'




import Radiagrafia from "./components/Grid/Radiografia/Radiografia";
import Tomografia from "./components/Grid/Tomografia/Tomografia";
import Documentacao from "./components/Grid/Documentacao/Documentacao"
import Protocolos from "./components/Grid/Protocolos/Protocolos"
import Servicos from "./components/Grid/Servicos/Servicos"
const App = () => {
    return (
        <div>
            <TomografiaOdontologica />
            <Grid
            tomografia={Tomografia}
            radiografia={Radiagrafia}
            documentacao={Documentacao}
            protocolos={Protocolos}
            servicos={Servicos}
              
            />
        </div>
    );
};

export default App;