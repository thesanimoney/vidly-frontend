import {Link} from "react-router-dom";
import {useToken} from "../state/useToken.ts";

function Header() {
    const localtoken = localStorage.getItem("token")
    const {token} = useToken()
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex">
                <a className="navbar-brand fw-bold text-secondary" href="#">Auth App</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex justify-content-between w-100 px-3">
                        <div className="login d-flex">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="">Check Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/me'}>Account Details</Link>
                            </li>
                        </div>
                        <div className="d-flex">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/login'}>{localtoken || token ? 'Logout' : 'Login'}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/register'}>Register</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Header;