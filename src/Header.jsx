const Header = () => {
    return (
        <div className="container-fluid imagen1 p-3">
            <div className="row my-6">
                <div className="col-md-6" style={{letterSpacing:"5px"}}>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-danger" aria-current="page" href="/"><b>Inicio</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="/locales"><b>Locales</b></a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 text-end">
                    <img src="images/logo-mostaza-blanco.png" alt={"Mostaza"} width={80} title={"Mostaza"} />
                </div>
            </div>
        </div>
    )
}

export default Header;