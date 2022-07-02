import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="folio__header" id="top">
      <div className="folio__header_text_containter ">
        <div className="folio__header_text_main">
          <h1>Hi. I'm</h1>
          <h1 className="text-red-500 font-bold font-serif ">
            Josh Francisco.
          </h1>
        </div>
        <div className="folio__header_text_sub mb-5">
          <h1>I develop and audit highly secure web3 software.</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
