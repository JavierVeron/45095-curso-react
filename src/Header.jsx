import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid imagen1 p-3">
            <div className="row my-6">
                <div className="col-md-6" style={{letterSpacing:"5px"}}>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeclassname={"active"} to={"/"}><b>Inicio</b></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeclassname={"active"} to={"/category/celulares"}><b>Celulares</b></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeclassname={"active"} to={"/category/notebooks"}><b>Notebooks</b></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 text-end">
                    <Link to={"/"}><img src="images/logo-mostaza-blanco.png" alt={"Mostaza"} width={80} title={"Mostaza"} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;