import React from 'react'
import {Link} from 'gatsby'
import footerMap from "../../assets/images/footer-map.png"
import {StaticImage} from "gatsby-plugin-image";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 footer-about-us">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <StaticImage src={"../assets/images/dora-ai-logo@0.5x.png"} className="logo logo-white" alt="logo"/>
                            </a>
                            <p>Bringing AI to the blockchain by seamlessly integrating the latest AI technology and binding it to our utility token. $Dora will elevate your business towards unparalleled success</p>

                            <ul className="social-link">
                                {/*<li>*/}
                                {/*    <Link to="#" className="d-block" target="_blank" rel="noreferrer">*/}
                                {/*        <i className='bx bxl-facebook'></i>*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                {/*<li>*/}
                                {/*    <Link to="#" className="d-block" target="_blank" rel="noreferrer">*/}
                                {/*        <i className='bx bxl-instagram'></i>*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <Link to="#" className="d-block" target="_blank" rel="noreferrer">*/}
                                {/*        <i className='bx bxl-linkedin'></i>*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                    <li>
                                    <Link to="/tokenomics">
                                        Tokenomics
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/whitepaper">
                                        Whitepaper
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                        Our Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i>
                                    Cluj-Napoca, Transylvania, <br /> Romania
                                </li>
                                {/*<li>*/}
                                {/*    <i className='bx bx-phone-call'></i>*/}
                                {/*    <a href="tel:+40755881771">+40 755 881 771</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <i className='bx bx-envelope'></i>*/}
                                {/*    <a href="mailto:hello@rewy.com">contact.salspot@gmail.com</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright @{currentYear} <strong className="text-strong">Dora</strong> All rights reserved</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src={footerMap} alt="footer-logo" />
            </div>
        </footer>
    );
}

export default Footer;
