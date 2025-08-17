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
        <div className="header">

        </div>
    );
}

const Main = () => {
    return (
        <div id="tomografia">
            <div className="main">
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
                            <input type="text" className="linha-simples" />
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