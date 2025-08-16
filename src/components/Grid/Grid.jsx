import "./Grid.css";

const Grid = ({ tomografia, radiologia, documentacao, protocolos, servicos }) => {
    return (
        <div class="parent">
            <div class="verde1 titulos">
                <div class="verder1-titulo title-height">
                    <h1 >
                        TOMOGRAFIA
                    </h1>
                </div>
                <div class="verde1-barra title-height"></div>
            </div>
            <div class="verde2">
                {tomografia}
            </div>
            <div class="azul1 azul">
                <div class="radiografia titulos">
                    <div class="radiografia-titulo">Radiografia</div>
                    <div class="radiografia-barra"></div>
                </div>
            </div>
            <div class="azul2 azul">
                <div className="azul-caminho1 azul">
                    <div className="conteudo"></div>
                </div>
                <div className="azul-caminho2 azul"></div>
            </div>
            <div class="azul3 azul">{radiologia}</div>

            <div class="amarelo1 amarelo">
                {<documentacao.BarraInicio />}
            </div>
            <div class="amarelo2 amarelo">
                {<documentacao.Coluna />}
            </div>
            <div class="amarelo3 amarelo">
                {<documentacao.BarraSecundario />}
            </div>
            <div class="amarelo4 amarelo">
                {<documentacao.Documentacao />}
            </div>

            <div class="rosa1 rosa">{<protocolos.Titulo/>}</div>
            <div class="rosa2 rosa">{<protocolos.Coluna/>}</div>
            <div class="rosa3 rosa">{<protocolos.Main/>}</div>
            <div class="rosa4 rosa">{<protocolos.Header/>}</div>
            
            <div class="roxo1 roxo">{<servicos.Titulo/>}</div>
            <div class="roxo2 roxo">{<servicos.Coluna/>}</div>
            <div class="roxo3 roxo">{<servicos.Main/>}</div>
            <div class="roxo4 roxo">{<servicos.Header/>}</div>
        </div>

    );
}

export default Grid;