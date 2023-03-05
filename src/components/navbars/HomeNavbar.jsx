import { Link } from "react-router-dom"

const HomeNavbar = () => {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    {/* eslint-disable-next-line */}
                    <a className="navbar-item">
                        TO-DO App
                    </a>
                    {/* eslint-disable-next-line */}
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        {/* eslint-disable-next-line */}
                        <a className="navbar-item">
                            <Link to="/">
                                Home
                            </Link>
                        </a>
                        <a className="navbar-item" href="mailto:samirn@cdac.in">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default HomeNavbar