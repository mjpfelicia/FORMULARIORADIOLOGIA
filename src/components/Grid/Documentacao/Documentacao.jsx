import "./Documentacao.css"
const Main = () => {

    return (
        <div id="documentacao">
            <div className="main"></div>
        </div>
    )
}

const Titulo = () => {
    return (
        <div className="amarelo">
            <h1>Documentação</h1>
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

const Header = () => {
    return (
        <div className="barra-secundario">
            <div className="parte1"></div>
        </div>

    )
}

const Documentacao = {
    Main,
    Titulo,
    Coluna,
    Header
};

export default Documentacao;