import React from "react";
import "./Header.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="mt-[4rem] flex p-6" id="top">
      <div className="">
        <div className="lg:text-[60px] text-[50px] text-green-500 font-bold font-serif">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-gray-200">Hi. I'm</h1>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, animationDelay: 1 }}
          >
            <h1 className=" ">Josh Francisco.</h1>
          </motion.div>
        </div>
        <div className="lg:text-xl text-lg mt-4 text-gray-200 ">
          <h1>I develop and protect highly secure web3 protocols.</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
