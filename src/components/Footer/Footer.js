import React from "react";
import "./Footer.css"; // Make sure you have a corresponding CSS file for styling

const Footer = () => {
  const year = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} Critical Hit. All rights reserved.</p>
        <p>Your one-stop shop for all your tabletop gaming dice needs.</p>
      </div>
    </footer>
  );
};

export default Footer;
