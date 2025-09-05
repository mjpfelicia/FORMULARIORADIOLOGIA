// TomografiaOdontologica.jsx
import React from 'react';
import './TomografiaOdontologica.css';
import arcada1 from '../../../src/images/arcada1.png';
import RadiografiaForm from '../../components/RadiografiaForm/RadiografiaForm';
import seta from '../../images/seta.png';





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
                        <div className="tomografia-content">
                            <div className="tomografia-grid">
                                <div className="primeira-col  flex-container">

                                    <div>
                                        <ul className="item-ul">
                                            <li>
                                                <label className="parentheses" htmlFor="endodontia">
                                                    <input type="checkbox" id="endodontia" />
                                                    <span className="symbol"></span> Endodontia
                                                </label>
                                            </li>
                                            <li>
                                                <label className="parentheses" htmlFor="implantodontia">
                                                    <input type="checkbox" id="implantodontia" />
                                                    <span className="symbol"></span> Implantodontia
                                                </label>
                                            </li>
                                            <li>
                                                <label className="parentheses" htmlFor="ortodontia">
                                                    <input type="checkbox" id="ortodontia" />
                                                    <span className="symbol"></span> Ortodontia / Ortopedia
                                                </label>
                                            </li>
                                            <li>
                                                <label className="parentheses" htmlFor="cirurgia">
                                                    <input type="checkbox" id="cirurgia" />
                                                    <span className="symbol"></span> Cirurgia
                                                </label>
                                            </li>
                                            <li>
                                                <label className="parentheses" htmlFor="periodontia">
                                                    <input type="checkbox" id="periodontia" />
                                                    <span className="symbol"></span> Periodontia
                                                </label>
                                            </li>
                                            <li>
                                                <label className="parentheses" htmlFor="biologia">
                                                    <input type="checkbox" id="biologia" />
                                                    <span className="symbol"></span> Biologia
                                                </label>
                                            </li>
                                        </ul>
                                        <label className="parentheses" htmlFor="outra">
                                            <input type="checkbox" id="outra" />
                                            <span className="symbol borda"></span> Outra
                                            <input type="text" className="linha-simples1" />
                                        </label>
                                    </div>
                                    <div className="img-seta">
                                        <img src={seta} alt="seta" />
                                    </div>
                                </div>



                                <div className="segunda-col">
                                    <ul className="item-ul-segunda">
                                        <li>
                                            <label className="parentheses" htmlFor="cranio">
                                                <input type="checkbox" id="cranio" />
                                                <span className="symbol"></span> Crânio
                                            </label>
                                        </li>
                                        <li>
                                            <label className="parentheses" htmlFor="cranio-atm">
                                                <input type="checkbox" id="cranio-atm" />
                                                <span className="symbol"></span> Crânio / ATM
                                            </label>
                                        </li>
                                        <li>
                                            <label className="parentheses" htmlFor="atm-localizada">
                                                <input type="checkbox" id="atm-localizada" />
                                                <span className="symbol"></span>
                                                <span className="linha-container">
                                                    <span className="texto">ATM (localizada)</span>
                                                    <span className="linha-horizontal"></span>
                                                </span>
                                            </label>
                                        </li>

                                        <li>
                                            <label className="parentheses" htmlFor="maxila">
                                                <input type="checkbox" id="maxila" />
                                                <span className="symbol"></span> Maxila
                                            </label>
                                        </li>
                                        <li>
                                            <label className="parentheses" htmlFor="mandibula">
                                                <input type="checkbox" id="mandibula" />
                                                <span className="symbol"></span> Mandíbula
                                            </label>
                                        </li>
                                        <li>
                                            <label className="parentheses" htmlFor="implante">
                                                <input type="checkbox" id="implante" />
                                                <span className="symbol"></span> Região para Implante (assinale)
                                            </label>
                                        </li>
                                        <li id="item-altissima">
                                            <label className="parentheses" htmlFor="altissima">
                                                <input type="checkbox" id="altissima" />
                                                <span className="symbol"></span>
                                                <span className="texto">
                                                    Investigativa Altíssima resolução<br /> (por elemento) assinale
                                                </span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="parentheses" htmlFor="periodontal">
                                                <input type="checkbox" id="periodontal" />
                                                <span className="symbol"></span>
                                                <span className="texto">
                                                    Estudo Cristas Ósseas e Gengival<br />(periodontal)
                                                </span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="parentheses" htmlFor="outra">
                                                <input type="checkbox" id="outra" />
                                                <span className="symbol borda"></span> Outra
                                                <input type="text" className="linha-simples" />
                                            </label>
                                        </li>
                                    </ul>
                                </div>

                                <div className="terceira-col">
                                    <div className='content-terceira-col'>
                                        <div className='terceira-coluna '>
                                            <ul className="item-ul-terceira">
                                                <li>
                                                    <label className="parentheses linha-completa" htmlFor="completa">
                                                        <input type="checkbox" id="completa" />
                                                        <span className="symbol"></span>
                                                        <div className="bloco-texto">
                                                            <span className="texto">Completa (Oclusão e Max. Abertura)</span>
                                                            <span className="linha-abaixo"></span>
                                                        </div>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="parentheses" htmlFor="zampieri" style={{ display: 'flex' }}>
                                                        <input type="checkbox" id="zampieri" />
                                                        <span className="symbol"></span>
                                                        <span className="texto-com-linha">Zampieri & Scarlat</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="parentheses" htmlFor="simplificada">
                                                        <input type="checkbox" id="simplificada" />
                                                        <span className="symbol"></span> Simplificada (sagital em oclusão)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="parentheses" htmlFor="outra">
                                                        <input type="checkbox" id="outra" />
                                                        <span className="symbol borda"></span>
                                                        <div class="linha-flex">
                                                            <span class="texto-outra">Outra</span>
                                                            <input type="text" className="linha-simples" />
                                                            <span class="linha segunda"></span>
                                                        </div>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='quarta-coluna'>
                                            <ul>
                                                <li style={{ position: 'relative' }}>
                                                    <label
                                                        htmlFor="incluir"
                                                        className="parentheses text-modificado"
                                                        style={{ position: 'relative', zIndex: 1 }}
                                                    >
                                                        <input type="checkbox" id="incluir" />
                                                        <span className="text-modificado borda"></span> Incluir:
                                                    </label>

                                                    {/* Linha inclinada */}
                                                    <div
                                                        style={{
                                                            position: 'absolute',
                                                            top: '140%',
                                                            left: '-34px',
                                                            width: '2rem',
                                                            height: '1px',
                                                            backgroundColor: '#2B4665',
                                                            transform: 'rotate(-37deg)',
                                                            zIndex: 0
                                                        }}>

                                                    </div>
                                                </li>
                                                <li>
                                                    <label className="parentheses" htmlFor="calculo">
                                                        <input type="checkbox" id="calculo" />
                                                        <span className="symbol text-modificado">
                                                            Cálculo Volume <br /> Condilar
                                                        </span>

                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="parentheses text-modificado" htmlFor="outra2">
                                                        <input type="checkbox" id="outra2" />
                                                        <span className="symbol borda"></span> Outra
                                                    </label>
                                                    <input type="text" className="linha-simples abaixo-outra" />
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                    <div className='content-img' >
                                        <img src={arcada1} alt="Imagem da arcada dentária" />
                                    </div>
                                </div>
                            </div>
                        </div>

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