import "./Documentacao.css"
const Documentacao = () => {

    return (
        <div id="documentacao">
            <div className="header"></div>
            <div className="main"></div>
        </div>
    )

}
const BarraInicio = () => {
    return (
        <div>
            <div className="inicio titulos">
                <div className="titulo">Documentação</div>
                <div className="barra"></div>
            </div>

        </div>
    )
}

const Coluna = () => {
    return (
        <div className="coluna">
            <div className="parte1"></div>
            <div className="parte2"></div>

        </div>
    )
}

const BarraSecundario = () => {
    return (
        <div className="barra-secundario">
            <div className="parte1"></div>
        </div>

    )
}

export default {
    Documentacao,
    BarraInicio,
    Coluna,
    BarraSecundario
};