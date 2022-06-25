import React from "react";
import "./Header.css";
import icon from "../../assets/eth.gif";

function Header() {
  return (
    <div className="folio__header" id="top">
      <div className="folio__header_text_containter">
        <div className="folio__header_text_main">
          <h1>Hi. I'm</h1>
          <h1 className="slide-in-right text-red-500 font-bold">
            Josh Francisco.
          </h1>
        </div>
        <div className="folio__header_text_sub slide-in-right-delay">
          <h1>I develop highly secure web3 software.</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
