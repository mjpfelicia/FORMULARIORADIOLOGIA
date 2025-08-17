import "./Radiografia.css";

const Titulo = () => {
    return (
        <>
            <h1>Radiografia</h1>
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
        <div id="radiografia">
            <div className="main">
                test
            </div>
        </div>
    );
}

const Radiografia = {
    Titulo,
    Coluna,
    Header,
    Main,
}

export default Radiografia;