import "./Radiagrafia.css"

const Radiografia = () => {
    return (
        <div id="radiografia">

            <header className="titulo">
                <div className="titulo-nome">
                    <h1>Radiografia</h1>
                </div>

                <div className="titulo-espaco azul"></div>
            </header>

            <main>
                <form>

                    <div className="endodontia">
                        <label htmlFor="endodontia"></label>

                        <input type="checkbox" name="endodontia" id="endodontia" />
                    </div>
                </form>

            </main>
        </div>
    )
}

export default Radiografia;