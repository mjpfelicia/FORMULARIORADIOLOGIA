// TomografiaOdontologica.jsx
import React from 'react';
import './TomografiaOdontologica.css';
import TomografiaForm from '../TomografiaForm/TomografiaForm';
import RadiografiaForm from '../../components/RadiografiaForm/RadiografiaForm';
import seta from '../../images/seta.png';
import arcada1 from '../../images/arcada1.png';




const TomografiaOdontologica = () => {
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
                        <h2 className="">Tomografia</h2>
                    </div>
                    <div className="tomografia-content">
                        <TomografiaForm seta={seta} arcada1={arcada1} />

                    </div>
                </div>

                <RadiografiaForm />

                <div className="grid-item content-documentaçao">
                    <h2 className="titulo-documentaçao">Documentaçao</h2>
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

export default TomografiaOdontologica;