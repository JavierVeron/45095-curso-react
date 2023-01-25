import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row my-6">
                <div className="col-md-6">
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
                    <Logo />
                </div>
            </div>
        </div>
    )
}

export default Navbar;