import "./Grid.css";

const Grid = ({ tomografia, radiografia, documentacao, protocolos, servicos }) => {
    return (
        <div class="parent">
            <div class="verde verde1 titulo">{<tomografia.Titulo/>}</div>
            <div class="verde verde2"> {<tomografia.Main/>}</div>
            <div class="verde verde3">{<tomografia.Header/>}</div>

            <div class="azul1 azul titulo">{<radiografia.Titulo />}</div>
            <div class="azul2 azul">{<radiografia.Coluna />}</div>
            <div class="azul3 azul">{<radiografia.Header />}</div>
            <div class="azul4 azul">{<radiografia.Main />}</div>

            <div class="amarelo1 amarelo titulo">{<documentacao.Titulo />}</div>
            <div class="amarelo2 amarelo">{<documentacao.Coluna />}</div>
            <div class="amarelo3 amarelo">{<documentacao.Header />}</div>
            <div class="amarelo4 amarelo">{<documentacao.Main />}</div>

            <div class="rosa1 rosa titulo">{<protocolos.Titulo/>}</div>
            <div class="rosa2 rosa">{<protocolos.Coluna/>}</div>
            <div class="rosa3 rosa">{<protocolos.Main/>}</div>
            <div class="rosa4 rosa">{<protocolos.Header/>}</div>
            
            <div class="roxo1 roxo titulo">{<servicos.Titulo/>}</div>
            <div class="roxo2 roxo">{<servicos.Coluna/>}</div>
            <div class="roxo3 roxo">{<servicos.Main/>}</div>
            <div class="roxo4 roxo">{<servicos.Header/>}</div>
        </div>

    );
}

export default Grid;