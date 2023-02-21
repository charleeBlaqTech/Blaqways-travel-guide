import React from 'react'
import { Link } from 'react-router-dom'
import "./FooterStyles.css"
const Footer = () => {
  return (
    <section id="footer" className="section-pd">
        <div className="row-1">
            <div className="column">
                <h3>BlaqWaYs Travel</h3>
                <h4>Contact</h4>
                <p>Adress:no 8 Ekere Street, comfort-oboh Lagos, Nigeria</p>
                <p>Phone:08101605165||08119324346</p>
                <p>Email:dauducharles1994@gmail.com</p>
                <h5>follow Us</h5>
                <div className="social-media">
                    <a href="https://web.facebook.com/princedaudu.charles"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://twitter.com/Off_charleeblaq"><i className="fa-brands fa-square-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/charleeblaqtech"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/charleeBlaqTech"><i className="fa-brands fa-square-github"></i></a>
                </div>
    
            </div>
            <div className="column">
                <h4>About</h4>
                <Link to="/about">About us</Link>
                <a href="#">destinations information</a>
                <a href="#">privacy policy</a>
                <a href="#">Terms & condition</a>
                <Link to="/contact">contact us</Link>
    
            </div>
            <div className="column">
                <h4>FAQS</h4>
                <Link to="/">sign in</Link>
                <a href="/explore">Explore Destinations</a>
                <a href="#">Tour Guide</a>
                <a href="#">Africa</a>
                <a href="#">Europe</a>
            </div>
        </div>
        <div className="row-2">
            <p>copy-right 2023@dauduCharles</p>
        </div>
       
    </section>
  )
}

export default Footer