import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/signin')
    }

    return (
        <header>
            <nav className="navbar-container" aria-label="Main">
                <div className="logo">
                    <Link to="/">
                        <img src="/assets/img.jpeg" alt="" className="logo-img" />
                        <span>Cloudtop G</span>
                    </Link>
                </div>
                <ul className={`nav-items${open ? ' active' : ''}`}>
                    <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
                    <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
                    <li><a href="#work" onClick={() => setOpen(false)}>Our work</a></li>
                    <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
                </ul>
                <div className="buttons">
                    <Link to="/signup" className="btn btn-primary">Get started</Link>
                    <button className="btn btn-secondary" onClick={handleLogout}>Log out</button>
                </div>
                <button
                    className="menu-toggle"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    &#9776;
                </button>
            </nav>
        </header>
    )
}

export default Header
