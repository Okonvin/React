import img from '../../public/assets/img.jpeg'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
            <header>
                    <nav className="navbar-container">
                        <div className="logo">
                        <Link to="/">
                            <img src={img} alt="Cloudtop G Logo" className="logo-img"/>
                            <span>Cloudtop G</span>
                        </Link>
                        </div>
                        <div className="items">
                        <ul className="nav-items">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about.html">About</a></li>
                            <li><a href="/services.html">Services</a></li>
                            <li><a href="/contact.html">Contact</a></li>
                        </ul>
                        </div>
                        <div className="buttons">
                        <Link to="/signup" className="btn btn-primary">Get Started</Link>
                        <button className="btn btn-secondary">Log out</button>
                        </div>
                        {/* <!-- Mobile menu toggle --> */}
                        <div className="menu-toggle">&#9776;</div>
                    </nav>
            </header>

        </>
    )
}

export default Header
