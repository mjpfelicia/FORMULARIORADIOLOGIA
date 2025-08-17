import "./Tomografia.css";

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
            <div className="main"></div>
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