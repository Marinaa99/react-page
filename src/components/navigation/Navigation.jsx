import React, {useState, useEffect} from "react";
import "./Navigation.scss";
import logo from "../../assets/images/logo.png"

const Navigation = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isHeaderFixed, setHeaderFixed] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const header = document.getElementById("header");

            if (scrollPosition > 0) {
                setHeaderFixed(true);
                header.classList.add("header");
                header.classList.add("bg");

            } else {
                setHeaderFixed(false);
                header.classList.remove("header");
                header.classList.remove("bg");

            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { text: 'Home', url: '#' },
        { text: 'Services', url: '#' },
        { text: 'StartUp', url: '#' },
        { text: 'Career', url: '#' },
        { text: 'Company', url: '#' },
        { text: 'Blog', url: '#' },
    ]
    return (
        <header className="header">
        <div className="__header" id="header">
          <img className="__header__logo" src={logo} alt="Logo"/>
            <nav className={`__nav ${isMenuOpen ? 'active' : ''}`}>
                <div className="__nav-icon">
                    <div className="__nav-icon__line"></div>
                    <div className="__nav-icon__line"></div>
                    <div className="__nav-icon__line"></div>
                </div>
                <ul className={`__nav-links ${isMenuOpen ? 'active' : ''}`} id="navigation-list">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="__nav-square">
                <span>cg</span>
            </div>
            <div className="__menu-button" id="menu-toggle" onClick={toggleMenu}>
                <div className={`__menu-button__line ${isMenuOpen ? "active" : ""}`}></div>
                <div className={`__menu-button__line ${isMenuOpen ? "active" : ""}`}></div>
                <div className={`__menu-button__line ${isMenuOpen ? "active" : ""}`}></div>
            </div>
        </div>
        </header>
    )
}


export default Navigation;