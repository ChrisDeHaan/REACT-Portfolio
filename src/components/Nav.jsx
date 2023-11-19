import { Link, useLocation } from 'react-router-dom';
import './Nav.css'

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <header className='p-3 text-white'>
            <div className='row col-11 mx-auto align-items-center'>
                <div className='col-10 col-md-4 mx-auto text-center'>
                    <h1 className='display-4'>Chris DeHaan</h1>
                </div>
                <nav className = 'col-10 col-md-8 mx-auto text-white'>
                    <ul className="nav text-center">
                        <li className="nav-item col-12 col-sm-3 nav-custom fs-3">
                            <Link
                                to="/"
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                            >
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item col-12 col-sm-3 fs-3">
                            <Link
                                to="/Portfolio"
                                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item col-12 col-sm-3 fs-3">
                            <Link
                                to="/Contact"
                                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item col-12 col-sm-3 fs-3">
                            <Link
                                to="/Resume"
                                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavTabs;