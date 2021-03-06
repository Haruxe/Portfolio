import React from "react";
import { motion } from "framer-motion";
import c4 from "../../assets/c4.png";
import { Link } from "react-router-dom";
import pag from "../../assets/pag.png";
import catjam from "../../assets/catjam.gif";

function Blog() {
  return (
    <div className="px-4 pb-4 h-screen">
      <div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="pt-[7rem] text-red-500 text-6xl font-bold font-serif">
            Blog Posts
          </h1>
        </motion.div>
        <div className="h-[2px] w-1/12 bg-gray-400 mt-5" />
      </div>
      <div className="lg:w-1/2 w-full">
        <Link to="/blog/7.9.22">
          <motion.div
            className="text-white lg:text-2xl text-xl relative font-bold bg-transparent font-serif p-5 outline outline-1 outline-gray-500 rounded-sm mt-8 cursor-pointer"
            whileHover={{ backgroundColor: "#2222228f" }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <img src={catjam} className="w-12 absolute top-5 right-5" />
            <h1>7.9.22</h1>
            <h1>Week 2 Progress //</h1>
            <p className="mt-3 text-lg font-medium">
              News for the blog, whats up in crypto, and personal updates!
            </p>
          </motion.div>
        </Link>
      </div>
      <div className="lg:w-1/2 w-full">
        <Link to="/blog/7.2.22">
          <motion.div
            className="text-white lg:text-2xl text-xl relative font-bold bg-transparent font-serif p-5 outline outline-1 outline-gray-500 rounded-sm mt-8 cursor-pointer"
            whileHover={{ backgroundColor: "#2222228f" }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <img src={c4} className="w-12 absolute top-5 right-5" />
            <h1>7.2.22</h1>
            <h1>The Haruxe Security Blog. //</h1>
            <p className="mt-3 text-lg font-medium">
              Creating a blog to track my progress, teach others about my
              learning process, and how to follow along.
            </p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
