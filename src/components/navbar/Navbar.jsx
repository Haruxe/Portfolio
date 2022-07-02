import React, { useState } from "react";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/boxicons-logos/Github";
import "./Navbar.css";
import resume from "../../assets/Josh_Francisco_Resume.pdf";
import { FileEarmarkPerson } from "styled-icons/bootstrap";
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <p>
      <a href="/#projects">PROJECTS</a>
    </p>
    <p>
      <a href="/#about">ABOUT</a>
    </p>
    <p>
      <a href="/#education">EDUCATION</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="folio__navbar">
      <div className="folio__navbar-links">
        <div className="folio__navbar-links_logo text-red-500 font-serif">
          <p>
            <a href="/">JF</a>
          </p>
        </div>
        <div className="folio__navbar-links_container2 flex flex-row">
          <div className="folio__navbar-links_container">
            <Menu id="sup" />
          </div>
          <p>
            <Link to="/blog">BLOG</Link>
          </p>
        </div>
      </div>
      <div className="folio__navbar-contact">
        <a href="https://twitter.com/haruxeETH" target="_blank">
          <Twitter size={35} className="media" />
        </a>
        <a href="https://www.linkedin.com/in/joshfrancisco/" target="_blank">
          <LinkedinSquare size={35} className="media" />
        </a>
        <a href="https://github.com/Haruxe" target="_blank">
          <Github size={35} className="media" />
        </a>
        <a href={resume} download>
          <FileEarmarkPerson size={35} className="media" />
        </a>
      </div>
    </div>
  );
}
/*
<div className='folio__navbar-menu'>
            {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
                <div className='folio__navbar-menu_container scale-in-ver-top'>
                    <Menu />
                </div>
            )}
        </div>
        */

export default Navbar;
