import "./Protocolos.css";

const Titulo = () => {
    return (
        <>
            <h1>Protocolos</h1>
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
        <div id="protocolos">
            <header></header>
            <main></main>


        </div>
    );
}
const Protocolos = {
    Titulo,
    Coluna,
    Header,
    Main,
}

export default Protocolos;