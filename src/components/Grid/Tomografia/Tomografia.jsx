import "./Tomografia.css";
import arcada1 from '../../../images/arcada1.png';


const Titulo = () => {
    return (
        <>
            <h1>Tomografia</h1>
        </>
    );
}

const Coluna = () => {
    return (<></>);
}

const Header = () => {
    return (
        <>
            <h1>Tomografia</h1>
        </>
    );
}

const Main = () => {
    return (
        <div id="tomografia">
            <div className="main">
                <div className="tomografia-grid">
                    <div className="primeira">
                        <ul className='item-ul'>
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
                            <input type="text" className="linha-simples" />
                        </label>
                    </div>
                    <div className="segunda">
                        <ul>
                            <li>
                                <input type="checkbox" id="cranio" />
                                <label htmlFor="cranio">Crânio</label>
                            </li>
                            <li>
                                <input type="checkbox" id="cranio-atm" />
                                <label htmlFor="cranio-atm">Crânio / ATM</label>
                            </li>
                            <li>
                                <input type="checkbox" id="atm-localizada" />
                                <label htmlFor="atm-localizada">ATM (localizada)</label>
                            </li>
                            <li>
                                <input type="checkbox" id="maxila" />
                                <label htmlFor="maxila">Maxila</label>
                            </li>
                            <li>
                                <input type="checkbox" id="mandibula" />
                                <label htmlFor="mandibula">Mandíbula</label>
                            </li>
                            <li>
                                <input type="checkbox" id="implante" />
                                <label htmlFor="implante">Região para Implante (assinale)</label>
                            </li>
                            <li>
                                <input type="checkbox" id="altissima" />
                                <label htmlFor="altissima">Investigativa Altíssima resolução ,<br /> (por elemento) assinale</label>
                            </li>
                            <li>
                                <input type="checkbox" id="periodontal" />
                                <label htmlFor="periodontal">Estudo Cristas Ósseas e Gengival (periodontal)</label>
                            </li>
                            <li>
                                <input type="checkbox" id="outra" />
                                <label htmlFor="outra">Outra</label>
                            </li>
                        </ul>
                    </div>

                    <div className="terceira">
                        <ul>
                            <li>
                                <input type="checkbox" id="completa" />
                                <label htmlFor="completa">Completa (Oclusão e Max. Abertura)</label>
                            </li>
                            <li>
                                <input type="checkbox" id="zampieri" />
                                <label htmlFor="zampieri">Zampieri & Scarlati</label>
                            </li>
                            <li>
                                <input type="checkbox" id="simplificada" />
                                <label htmlFor="simplificada">Simplificada (sagital em oclusão)</label>
                            </li>
                            <li>
                                <input type="checkbox" id="outra" />
                                <label htmlFor="outra">Outra</label>
                            </li>
                            <li>
                                <input type="checkbox" id="volume" />
                                <label htmlFor="volume">Cálculo Volume Condilar</label>
                            </li>
                        </ul>

                        <div>
                            <img src={arcada1} alt="Imagem da arcada dentária" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Tomografia = {
    Titulo,
    Coluna,
    Header,
    Main,
};

export default Tomografia;