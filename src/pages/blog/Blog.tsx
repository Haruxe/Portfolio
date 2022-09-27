import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Blog() {
  function BlogEntry({
    date,
    title,
    image,
    summary = "",
    lastPost = false,
    link,
  }) {
    return (
      <div className="lg:w-1/2 w-full">
        <div>
          <motion.div
            className={
              lastPost
                ? "text-white relative font-bold bg-transparent font-serif p-5 outline outline-1 outline-gray-500 rounded-sm mt-8"
                : "text-white cursor-pointer relative font-bold bg-transparent font-serif p-5 outline outline-1 outline-gray-500 rounded-sm mt-8 hover:bg-[#ffffff15]"
            }
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Link to={link}>
              <img src={image} className="w-8 absolute top-5 right-5" />
              <h1 className="text-xl">{date}</h1>
              <h1 className="text-xl mt-1">{title}</h1>
              {lastPost ? (
                <p className="mt-2 md:text-md text-sm font-medium">
                  I am continuing to post, except on{" "}
                  <a
                    className="text-purple-400 cursor-pointer hover:text-purple-600 z-20"
                    href="https://mirror.xyz/haruxe.eth"
                    target={"_blank"}
                  >
                    mirror.xyz
                  </a>
                  . Follow me there!
                </p>
              ) : (
                <p className="mt-2 md:text-md text-sm font-normal">{summary}</p>
              )}
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }
  return (
    <div className="px-4 pb-4 h-screen">
      <div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="pt-[7rem] text-green-500 text-4xl font-bold font-serif">
            Blog Posts
          </h1>
        </motion.div>
        <div className="h-[2px] w-[50px] bg-gray-400 mt-3" />
      </div>
      <div className="lg:w-1/2 w-full">
        <div>
          <motion.div
            className={
              "text-white relative font-bold bg-transparent font-serif p-5 outline outline-1 outline-gray-500 rounded-sm mt-8"
            }
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <div>
              <img
                src={"/images/kaijuSuit.png"}
                className="w-8 absolute top-5 right-5"
              />
              <h1 className="text-xl">9.25.22</h1>
              <h1 className="text-xl mt-1">{"Update //"}</h1>
              <p className="mt-2 md:text-md text-sm font-medium">
                I am continuing to post, except on{" "}
                <a
                  className="text-purple-400 cursor-pointer hover:text-purple-600 z-20"
                  href="https://mirror.xyz/haruxe.eth"
                  target={"_blank"}
                >
                  mirror.xyz
                </a>
                . Follow me there!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <BlogEntry
        title={"Week 2 Progress //"}
        date={"7.9.22"}
        image={"/images/catjam.gif"}
        summary={"News for the blog, whats up in crypto, and personal updates!"}
        link="/blog/1"
      />
      <BlogEntry
        title={"The Haruxe Security Blog. //"}
        date={"7.2.22"}
        image={"/images/c4.png"}
        summary={
          "Creating a blog to track my progress, teach others about my learning process, and how to follow along."
        }
        link="/blog/2"
      />
    </div>
  );
}

export default Blog;
