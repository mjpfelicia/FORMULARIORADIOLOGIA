// TomografiaOdontologica.jsx
import React from 'react';
import './TomografiaOdontologica.css';

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
                                <div>
                                    <ul className='item-ul'>
                                        <li>
                                            <label className="parentheses" for="endodontia">
                                                <input type="checkbox" id="endodontia" />
                                                <span className="symbol"></span> Endodontia
                                            </label>
                                        </li>
                                        <li>
                                            <label className="parentheses" for="implantodontia">
                                                <input type="checkbox" id="implantodontia" />
                                                <span className="symbol"></span> Implantodontia
                                            </label>
                                        </li>
                                        <li>
                                            <label className="parentheses" for="ortodontia">
                                                <input type="checkbox" id="ortodontia" />
                                                <span className="symbol"></span> Ortodontia / Ortopedia
                                            </label>
                                        </li>
                                        <li>
                                            <label className="parentheses" for="cirurgia">
                                                <input type="checkbox" id="cirurgia" />
                                                <span className="symbol"></span> Cirurgia
                                            </label>
                                        </li>
                                        <li>
                                            <label className="parentheses" for="periodontia">
                                                <input type="checkbox" id="periodontia" />
                                                <span className="symbol"></span> Periodontia
                                            </label>
                                        </li>
                                        <li>
                                            <label className="parentheses" for="biologia">
                                                <input type="checkbox" id="biologia" />
                                                <span className="symbol"></span> Biologia
                                            </label>
                                        </li>
                                    </ul>
                                    <label className="parentheses" for="outra">
                                        <input type="checkbox" id="outra" />
                                        <span className="symbol borda"></span> Outra
                                    </label>
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="cranio" />
                                            <label for="cranio">Crânio</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="cranio-atm" />
                                            <label for="cranio-atm">Crânio / ATM</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="atm-localizada" />
                                            <label for="atm-localizada">ATM (localizada)</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="maxila" />
                                            <label for="maxila">Maxila</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="mandibula" />
                                            <label for="mandibula">Mandíbula</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="implante" />
                                            <label for="implante">Região para Implante (assinale)</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="altissima" />
                                            <label for="altissima">Investigativa Altíssima resolução (por elemento) assinale</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="periodontal" />
                                            <label for="periodontal">Estudo Cristas Ósseas e Gengival (periodontal)</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="outra" />
                                            <label for="outra">Outra</label>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="completa" />
                                            <label for="completa">Completa (Oclusão e Max. Abertura)</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="zampieri" />
                                            <label for="zampieri">Zampieri & Scarlati</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="simplificada" />
                                            <label for="simplificada">Simplificada (sagital em oclusão)</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="outra" />
                                            <label for="outra">Outra</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="volume" />
                                            <label for="volume">Cálculo Volume Condilar</label>
                                        </li>
                                    </ul>

                                    <div>
                                        <img src="../src/images/arcada1.png" alt="Imagem da arcada dentária" />
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="border-radiografia">
                    <div className="grid-item content-rodigrafia">
                        <h2 className="titulo-rodigrafia">Radiografia</h2>
                    </div>
                </div>
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
        </div>
    );
};

export default TomografiaOdontologica;