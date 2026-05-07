function Header(){
    return(
        <>
            <header>
                    <nav class="navbar-container">
                        <div class="logo">
                        <a href="/">
                            <img src={logoImg} alt="Cloudtop G Logo" class="logo-img"/>
                            <span>Cloudtop G</span>
                        </a>
                        </div>
                        <div class="items">
                        <ul class="nav-items">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about.html">About</a></li>
                            <li><a href="/services.html">Services</a></li>
                            <li><a href="/contact.html">Contact</a></li>
                        </ul>
                        </div>
                        <div class="buttons">
                        <a href="/Login_page/index.html" class="btn btn-primary">Get Started</a>
                        <button class="btn btn-secondary">Log out</button>
                        </div>
                        {/* <!-- Mobile menu toggle --> */}
                        <div class="menu-toggle">&#9776;</div>
                    </nav>
            </header>

        </>
    )
}