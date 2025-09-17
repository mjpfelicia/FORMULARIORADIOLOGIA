import TomografiaForm from './components/TomografiaForm/TomografiaForm';
import RadiografiaForm from './components/RadiografiaForm/RadiografiaForm';
import Documentacao from './components/Documentacao/Documentacao';
import Protocolo from './components/Protocolo/Protocolo';
import Servicos from './components/Servicos/Servicos';
import './components/borda.css';
import seta from './images/seta.png';
import arcada1 from './images/arcada1.png';
import './App.css';

import Grid from './components/Grid/Grid';


const App = () => {
    return (
        <div>
            <div className="grid-container">
                <div className="sidebar grid-item">
                    <ul>
                        <li className="item-tomografia">TOMOGRAFIA</li>
                        <li className="item-radiografia">RADIOGRAFIAS</li>
                        <li className="item-documentacao">DOCUMENTAÇÕES</li>
                        <li className="item-protocolos  borda-esquerda-protocolos">PROTOCOLOS</li>
                        <li className="item-servicos">SERVIÇOS</li>
                    </ul>
                </div>
                <div className="content-tomografia border-tomografia">
                    <div className="borda-esquerda"></div>
                    <div className="titulo-tomografia">
                        <h2>TOMOGRAFIA</h2>
                    </div>
                    <div className="tomografia-content">
                        <TomografiaForm seta={seta} arcada1={arcada1} />
                    </div>
                </div>
                <div className='content-radiografia'>
                    <RadiografiaForm />
                    <div className=" borda-documentaçao"></div>
                </div>
                <div className="content-documentacao borda-esquerda-documentacao">
                    <h2 className='titulo-documentacao'>DOCUMENTAÇÕES</h2>
                    <Documentacao />
                </div>


                <div className="grid-item-protocolo content-protocolos">
                    <h2 className="titulo-protocolos">PROTOCOLOS</h2>
                    <Protocolo />
                </div>
                <div className="grid-item-servicos content-serviços">
                    <h2 className="titulo-serviços">SERVIÇOS</h2>
                     <Servicos />

                </div>
            </div>

             <Grid
                tomografia={{
                    Main: () => <TomografiaForm seta={seta} arcada1={arcada1} />,
                    Titulo: () => <h1>Tomografia</h1>,
                }}
                radiografia={{
                    Main: () => <RadiografiaForm />,
                    Titulo: () => <h1>Radiografia</h1>,
                }}
                documentacao={{
                    Main: () => <Documentacao />,
                    Titulo: () => <h1>Documentação</h1>,
                    Header: () => <>Documentação</>,
                }}
                protocolos={{
                    Main: () => <Protocolo />,
                    Titulo: () => <h1>Protocolos</h1>,
                    Header: () => <>Protocolos</>,
                }}
                servicos={{
                    Main: () => <Servicos />,
                    Titulo: () => <h1>Serviços</h1>,
                    Header: () => <>Serviços</>,
                }}


            /> 
        </div >
    );
};

export default App;