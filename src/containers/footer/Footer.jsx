import React from "react";
import { Heart } from "styled-icons/remix-fill";
import "./Footer.css";

function Footer() {
  return (
    <div className="folio__footer_container">
      <div className="folio__footer_text">
        Created with <Heart className="w-5" /> by Josh Francisco
      </div>
    </div>
  );
}

export default Footer;
