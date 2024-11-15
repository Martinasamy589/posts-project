import './Styles/Footer.css';

export const Footer = () => {
    return (
        <div className='app-container'>
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Cafe. All Rights Reserved.</p>
                    <ul className="footer-links">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <div className="social-media">
                        <a href="https://wa.me/your-phone-number" target="_blank" className="social-icon whatsapp"><i className="fab fa-whatsapp"></i></a>
                        <a href="https://instagram.com/your-username" target="_blank" className="social-icon instagram"><i className="fab fa-instagram"></i></a>
                        <a href="https://facebook.com/your-username" target="_blank" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
