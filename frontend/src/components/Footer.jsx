
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
    FaEnvelope
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <a
                    href="https://github.com/heetjain8377-wq"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/heet-jain-722b68374/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://instagram.com/heet.jain.31149"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://wa.me/916265151365"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                >
                    <FaWhatsapp />
                </a>


                <a
                    href="https://mail.google.com/mail/?view=cm&to=heetjain8377@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email me"
                    title="Send me an email"
                >
                    <FaEnvelope />
                </a>
            </div>

            <p>
                © {new Date().getFullYear()} Heet Jain.
                Built with React.
            </p>

            <a href="#home" className="back-to-top">
                Back to top ↑
            </a>
        </footer>
    );
};

export default Footer;
