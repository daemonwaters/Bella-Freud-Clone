import React from 'react'
import { FaArrowAltCircleRight, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import shopPic from '../media/shop.jpeg';
import {ReactComponent as FooterLogo} from '../media/FooterSvg.svg';

function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-logo">
                    <FooterLogo/>
                </div>
                <div className="footer-info">
                    <div>
                        <h3>DELIVERY & RETURNS</h3>
                        <p>Free UK Standard Delivery on all orders over £250</p>
                        <a href="#">see more</a>
                    </div>
                    <div>
                        <h3>MY ACCOUNT</h3>
                        <p>To access your account</p>
                        <a href="#">see more</a>
                    </div>
                    <div>
                        <h3>NEED HELP?</h3>
                        <p>Monday to Friday: 10.00am - 4.00pm</p>
                        <a href="#">see more</a>
                    </div>
                </div>
            </div>
            <div className="email-sec">
                <h2>
                SIGN UP TO OUR NEWSLETTER LIST
                </h2>
                <div className="email-wrapper">
                    <FaEnvelope/>
                    <input type="text" placeholder="email addres"/>
                    <FaArrowAltCircleRight/>
                </div>
                <span>
                    <FaFacebook/>
                    <FaInstagram/>
                </span>
            </div>
            <div className="addres-sec">
                <div className="near-you">
                        <img src={shopPic} alt="near-shop"/>
                        <div className="shop-address">
                            <h4>
                            YOUR NEAREST STORE
                            </h4>
                            <h3>
                            49 CHILTERN STREET
                            </h3>
                            <span>
                            <p>Bella Freud</p>
                            <p>49 Chiltern Street</p>
                            <p>London</p>
                            <p>W1U 6LY</p>
                            <p>T:+44 (0) 20 7935 0777</p>
                            <p>Nearest tube station: Baker Street</p>
                            <a href="#">
                                VIEW STORE
                            </a>
                            </span>
                        </div>
                </div>
                <div className="gridish">
                    <div className="footer-grid-item">
                        <h3>biography</h3>
                    </div>
                    <div className="footer-grid-item">
                        <h3>filmography</h3>
                    </div>
                    <div className="footer-grid-item">
                        <h3>happenings</h3>
                    </div>
                    <div className="footer-grid-item">
                        <h3>my accout</h3>
                    </div>
                    <div className="footer-grid-item">
                        <h3>delivery & returns</h3>
                    </div>
                    <div className="footer-grid-item">
                        <h3>contact us</h3>
                    </div>
                </div>
            </div>
            <div className="end-footer">
                <p>
                      © 2021 Bella Freud | Created by blubolt
                </p>
                <nav>
                    <span>Careers</span>
                    <span>Stockists</span>
                    <span>Privacy & Plicy Notice</span>
                    <span>Legal</span>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
