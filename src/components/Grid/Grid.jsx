import "./Grid.css";

const Grid = ({ tomografia={}, radiografia={}, documentacao = {}, protocolos = {}, servicos = {} }) => {
    return (
        <div className="parent">
            <div className="verde verde1 titulo">{tomografia?.Titulo ? <tomografia.Titulo /> : <></>}</div>
            <div className="verde verde2"> {tomografia?.Main ? <tomografia.Main /> : <></>}</div>
            <div className="verde verde3">{tomografia?.Header ? <tomografia.Header /> : <></>}</div>

            <div className="azul1 azul titulo">{radiografia?.Titulo ? <radiografia.Titulo /> : <></>}</div>
            <div className="azul2 azul">{radiografia?.Coluna ? <radiografia.Coluna /> : <></>}</div>
            <div className="azul3 azul">{radiografia?.Header ? <radiografia.Header /> : <></>}</div>
            <div className="azul4 azul">{radiografia?.Main ? <radiografia.Main /> : <></>}</div>

            <div className="amarelo1 amarelo titulo">{documentacao?.Titulo ? <documentacao.Titulo /> : <></>}</div>
            <div className="amarelo2 amarelo">{documentacao?.Coluna ? <documentacao.Coluna /> : <></>}</div>
            <div className="amarelo3 amarelo">{documentacao?.Header ? <documentacao.Header /> : <></>}</div>
            <div className="amarelo4 amarelo">{documentacao?.Main ? <documentacao.Main /> : <></>}</div>

            <div className="rosa1 rosa titulo">{protocolos?.Titulo ? <protocolos.Titulo /> : <></>}</div>
            <div className="rosa2 rosa">{protocolos?.Coluna ? <protocolos.Coluna /> : <></>}</div>
            <div className="rosa3 rosa">{protocolos?.Main ? <protocolos.Main /> : <></>}</div>
            <div className="rosa4 rosa">{protocolos?.Header ? <protocolos.Header /> : <></>}</div>

            <div className="roxo1 roxo titulo">{servicos?.Titulo ? <servicos.Titulo /> : <></>}</div>
            <div className="roxo2 roxo">{servicos?.Coluna ? <servicos.Coluna /> : <></>}</div>
            <div className="roxo3 roxo">{servicos?.Main ? <servicos.Main /> : <></>}</div>
            <div className="roxo4 roxo">{servicos?.Header ? <servicos.Header /> : <></>}</div>
        </div>

    );
}

export default Grid;