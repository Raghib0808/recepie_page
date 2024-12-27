import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
 // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are passionate about bringing you the best recipes from around the world. 
            Explore, cook, and enjoy delicious meals with our easy-to-follow guides.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search/pasta">Search Recipes</Link></li>
            <li><Link to="/cuisine/italian">Cuisines</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

         

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: raghibanis21@gmail.com</p>
          <p>Phone: 9044605608</p>
          <p>Ghaziabad</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Recipe App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;