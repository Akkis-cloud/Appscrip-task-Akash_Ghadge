import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import Amex from '../Footer_Assets/Amex.png';
import Appl from '../Footer_Assets/Appl.png';
import Dpay from '../Footer_Assets/Dpay.png';
import Gpay from '../Footer_Assets/Gpay.png';
import Mcard from '../Footer_Assets/Mcard.png';
import mdi_linkedin from '../Footer_Assets/mdi_linkedin.png';
import PP from '../Footer_Assets/PP.png';
import svg from '../Footer_Assets/svg.png';
import a from '../Footer_Assets/a.png';
import usa from '../Footer_Assets/usa.png';
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-above-line">
        <div className="footer-column">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-column">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p><img src={usa} alt="American Flag" /> <strong>USD</strong></p>
          <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-below-line">
        <div className="footer-column">
          <h3>mettā muse</h3>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <p>Terms & Conditions</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </div>
        <div className="combined-column">
          <h3>FOLLOW US</h3>
          <div className="social-media-icons">
            <img src={svg} alt="Instagram" />
            <img src={a} alt="LinkedIn" />
          </div>
          <h3>mettā muse ACCEPTS</h3>
          <div className="payment-cards">
            <img src={Gpay} alt="Gpay" />
            <img src={Mcard} alt="Mastercard" />
            <img src={PP} alt="PayPal" />
            <img src={Amex} alt="American Express" />
            <img src={Appl} alt="Discover" />
            <img src={Dpay} alt="JCB" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p> Copyright &copy; 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
