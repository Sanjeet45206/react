// Footer.js
import React from "react";

function Footer({ tagline, copyright }) {
  return (
    <footer>
      <p>{tagline}</p>
      <p>{copyright}</p>
    </footer>
  );
}

export default Footer;
