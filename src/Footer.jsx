import React from "react";
import './App.css';

const currYear = new Date().getFullYear();

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright ⓒ {currYear}</p>
      </footer>
    </div>
  );
}

export default Footer;