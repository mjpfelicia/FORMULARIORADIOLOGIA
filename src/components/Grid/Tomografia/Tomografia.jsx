import "./Tomografia.css"

const Tomografia = () => {
    return (
        <div id="tomografia">
            <header>
                <h1 className="titulo-tomografia">Tomografia</h1>
            </header>

            <main>
                <div className="forms">
                    <div className="form1">
                        <form action="">
                            <div className="group1">
                                <label htmlFor="endodontia"></label>
                                <input type="checkbox" name="endodontia" id="endodontia" />
                            </div>
                        </form>
                    </div>
                    <div className="form2"></div>
                    <div className="form3"></div>
                </div>

            </main>

        </div>
    )
}

export default Tomografia;