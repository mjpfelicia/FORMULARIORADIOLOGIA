import React from "react";
import "./LocalizacaoClinica.css";

import IconeAcessibilidade from "../IconeAcessibilidade/IconeAcessibilidade"; // Importando o ícone de acessibilidade


const LocalizacaoComInfo = () => {
    return (
        <>
            <h1>São Bernardo (centro)</h1>
            <div className="localizacao-container">
                <div className="mapa-com-info">
                    <div className="mapa">
                        <iframe
                            title="mapa-sao-bernardo"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.694257799105!2d-46.5480889850229!3d-23.50721796589102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42661040a3ff%3A0xf93b5ccf59d09b88!2sR.%20Carlos%20Gomes%2C%20165%20-%20Centro%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1621616000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className="info-lateral">
                        <div>
                            <div className="info-lateral">
                                <IconeAcessibilidade />

                            </div>

                            <p><strong>Acessibilidade Total</strong></p>
                            <p>Estacionamento próprio</p>
                            <p>para ambulância</p>
                        </div>
                        <div>
                            <p className="espaco"></p>
                            <p><strong>Rua Carlos Gomes, 165</strong></p>
                        </div>

                        <div>
                            <p><strong>Unidade São Bernardo</strong></p>
                            <p>CROSP-CL 3088</p>
                            <p>Responsável técnico:</p>
                            <p>Dr. Felicio Bento Zampieri</p>
                            <p>CROSP 2553</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocalizacaoComInfo;
