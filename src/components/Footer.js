import React from 'react'
import { FaLinkedinIn, FaGooglePlusG,FaInstagramSquare} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import logo from './1.png'


export default function Footer() {
  return (
    <>
    <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>New delhi</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>860******4</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>avnishkt16@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to="index.html"><img src={logo} className="img-fluid" alt="logo"/></Link>
                            </div>
                            <div className="footer-text">
                                <p></p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <Link to="#">< FaGooglePlusG/></Link>
                                <Link to="#"><FaLinkedinIn/></Link>
                                <Link to="#"><FaInstagramSquare/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">about</Link></li>
                                <li><Link to="/">services</Link></li>
                                <li><Link to="/">portfolio</Link></li>
                                <li><Link to="/">Contact</Link></li>
                                <li><Link to="/">About us</Link></li>
                                <li><Link to="/">Our Services</Link></li>
                                <li><Link to="/">Expert Team</Link></li>
                                <li><Link to="/">Contact us</Link></li>
                                <li><Link to="/">Latest News</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved Avnish</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Terms</Link></li>
                                <li><Link to="/">Privacy</Link></li>
                                <li><Link to="/">Policy</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <style>
    
    {
        `
        .footer.ul {
            margin: 0px;
            padding: 0px;
        }
        .footer-section {
          background: #151414;
          position: relative;
        }
        .footer-cta {
          border-bottom: 1px solid #373636;
        }
        .single-cta i {
          color: #ff5e14;
          font-size: 30px;
          float: left;
          margin-top: 8px;
        }
        .cta-text {
          padding-left: 15px;
          display: inline-block;
        }
        .cta-text h4 {
          color: #fff;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .cta-text span {
          color: #757575;
          font-size: 15px;
        }
        .footer-content {
          position: relative;
          z-index: 2;
        }
        .footer-pattern img {
          position: absolute;
          top: 0;
          left: 0;
          height: 330px;
          background-size: cover;
          background-position: 100% 100%;
        }
        .footer-logo {
          margin-bottom: 30px;
        }
        .footer-logo img {
            max-width: 200px;
        }
        .footer-text p {
          margin-bottom: 14px;
          font-size: 14px;
              color: #7e7e7e;
          line-height: 28px;
        }
        .footer-social-icon span {
          color: #fff;
          display: block;
          font-size: 20px;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 20px;
        }
        .footer-social-icon a {
          color: #fff;
          font-size: 16px;
          margin-right: 15px;
        }
        .footer-social-icon i {
          height: 40px;
          width: 40px;
          text-align: center;
          line-height: 38px;
          border-radius: 50%;
        }
        .facebook-bg{
          background: #3B5998;
        }
        .twitter-bg{
          background: #55ACEE;
        }
        .google-bg{
          background: #DD4B39;
        }
        .footer-widget-heading h3 {
          color: #fff;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 40px;
          position: relative;
        }
        .footer-widget-heading h3::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -15px;
          height: 2px;
          width: 50px;
          background: #ff5e14;
        }
        .footer-widget ul li {
          display: inline-block;
          float: left;
          width: 50%;
          margin-bottom: 12px;
        }
        .footer-widget ul li a:hover{
          color: #0dd6e6;
        }
        .footer-widget ul li a {
          color: #878787;
          text-transform: capitalize;
        }
        .subscribe-form {
          position: relative;
          overflow: hidden;
        }
        .subscribe-form input {
          width: 100%;
          padding: 14px 28px;
          background: #2E2E2E;
          border: 1px solid #2E2E2E;
          color: #fff;
        }
        .subscribe-form button {
            position: absolute;
            right: 0;
            background: #ff5e14;
            padding: 13px 20px;
            border: 1px solid #ff5e14;
            top: 0;
        }
        .subscribe-form button i {
          color: #fff;
          font-size: 22px;
          transform: rotate(-6deg);
        }
        .copyright-area{
          background: #202020;
          padding: 25px 0;
        }
        .copyright-text p {
          margin: 0;
          font-size: 14px;
          color: #878787;
        }
        .copyright-text p a{
          color: #ff5e14;
        }
        .footer-menu li {
          display: inline-block;
          margin-left: 20px;
        }
        .footer-menu li:hover a{
          color: #0dd6e6;
        }
        .footer-menu li a {
          font-size: 14px;
          color: #878787;
        }
        `
    }
    </style>
    </>
  )
}
