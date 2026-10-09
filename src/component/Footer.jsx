function Footer() {
    return (
        <footer className="footer-div">
            <div className="footer">
                <div className="f-1">
                    <img src="https://cloudtopg.netlify.app/assets/simple-CznWBSRE.svg" alt="Cloudtop G" />
                    <p>mikayla_beer@feil.name<br />906-179-8309</p>
                </div>
                <div className="f-2">
                    <h2>Get in touch</h2>
                    <p>Don't miss updates on our new templates and extensions.</p>
                    <button className="footer-btn">Contact us</button>
                </div>
                <div className="f-3">
                    <h2>Our guidelines</h2>
                    <ul className="footer-ul">
                        <li>Terms</li>
                        <li>Privacy policy</li>
                        <li>Cookies policy</li>
                        <li>Discover</li>
                    </ul>
                </div>
                <div className="f-4">
                    <h2>Our address</h2>
                    <p>518 Schmeler Neck Bartlett, Illinois</p>
                </div>
            </div>
            <div className="footer-bottom">© {new Date().getFullYear()} Cloudtop G. All rights reserved.</div>
        </footer>
    )
}

export default Footer
