import "./Servicos.css";

const Titulo = () => {
    return (<>
        <h1>Serviços</h1>
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
        <div id="servicos">
            <main></main>
        </div>
    );
}

const Servicos = {
    Titulo,
    Coluna,
    Header,
    Main,
}

export default Servicos;