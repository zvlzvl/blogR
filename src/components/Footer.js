import React from 'react';
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We provide high-quality products and services.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;