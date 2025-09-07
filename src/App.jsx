import TomografiaForm from './components/TomografiaForm/TomografiaForm';
import RadiografiaForm from './components/RadiografiaForm/RadiografiaForm';
import Documentacao from './components/Documentacao/Documentacao';
import seta from './images/seta.png';
import arcada1 from './images/arcada1.png';

const App = () => {
    return (
             <div>
            <div className="grid-container">
                <div className="sidebar grid-item">
                    <ul>
                        <li className="item-tomografia">Tomografia</li>
                        <li className="item-radiografia">Radiografias</li>
                        <li className="item-documentacao">Documentação</li>
                        <li className="">Protocolos</li>
                        <li className="">Serviços</li>
                    </ul>
                </div>
                <div className="content-tomografia border-tomografia">
                    <div className="borda-esquerda"></div>
                    <div className="titulo-tomografia">
                        <h2>Tomografia</h2>
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
                    <div>
                        <div className="titulo-documentacao">
                            <h2>Documentaçao</h2>
                        </div>
                        <Documentacao />
                    </div>
                </div>





                <div className="grid-item content-protocolos">
                    <h2 className="titulo-protocolos">Protocolos</h2>
                </div>
                <div className="grid-item content-serviços">
                    <h2 className="titulo-serviços">Serviços</h2>
                </div>
            </div>
        </div >
    );
};

export default App;