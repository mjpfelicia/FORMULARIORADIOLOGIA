import React from 'react';
import TomografiaOdontologica from './components/TomografiaOdontologica/TomografiaOdontologica';
import Grid from './components/Grid/Grid'




import Radiagrafia from "./components/Grid/Radiografia/Radiagrafia";
import Tomografia from "./components/Grid/Tomografia/Tomografia";

import Documentacao from "./components/Grid/Documentacao/Documentacao"
import Protocolos from "./components/Grid/Protocolos/Protocolos"
const App = () => {
    return (
        <div>
            <TomografiaOdontologica />
            <Grid
            tomografia={<Tomografia/>}
            radiologia={<Radiagrafia/>}
            documentacao={Documentacao}
            protocolos={Protocolos}
              
            />
        </div>
    );
};

export default App;