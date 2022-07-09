import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LeftArrowAlt, Music } from "styled-icons/boxicons-solid";
import catjam from "../../../assets/catjam.gif";
import { Clockify } from "styled-icons/simple-icons";
import { Spotify, Youtube } from "styled-icons/remix-fill";

function BlogPost2() {
  return (
    <div className="px-7 pb-4 mb-20">
      <div>
        <Link to="/blog">
          <LeftArrowAlt className="w-10 pt-[7rem] text-white mb-4" />
        </Link>

        <h1 className=" text-red-500 lg:text-3xl font-bold font-serif my-3 text-2xl">
          7.2.22
        </h1>

        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className=" text-red-500 lg:text-6xl font-bold font-serif text-2xl">
            Week 2 Progress//
          </h1>
        </motion.div>

        <p className="mt-3 lg:text-xl text-md text-gray-100 w-full lg:w-1/2">
          News for the blog, whats up in crypto, and personal updates!
        </p>
        <img src={catjam} className="md:w-[80px] w-[40px] my-5" />
        <div className="h-[1px] w-[80px] bg-gray-400 mt-5" />
      </div>
      <div className="text-white lg:text-lg text-md mt-4 w-full lg:w-3/4 px-3">
        <h1 className="lg:text-4xl text-2xl mb-3 font-bold font-serif">
          Blog Update
        </h1>
        <p className="indent-10">
          Due to popular demand, I will continue posting on this blog every
          Saturday to keep y'all up to date with me and the space. Thanks for
          taking the time to show up!
        </p>
        <h1 className="lg:text-4xl text-2xl mb-3 font-bold font-serif mt-4">
          News In Crypto
        </h1>
        <p className="indent-10">
          Irresponsible lending platforms (*cough* Celsius) continue to ravage
          the web3 space claiming to oppose the big banks and traditional CeFi
          finance, whilst making immense risks with the supposedly 'safe' lent
          crypto. This week though, Celsius finishes paying off their Bitcoin
          loans entirely, avoiding liquidation. It can be seen on Thursday that
          one of Celcius' linked accounts repayed the remaining $41.2 million in{" "}
          DAI according to a{" "}
          <a
            href="https://etherscan.io/tx/0xea97f1dee874f21636dfce49382e68b890c51ec045fd0eae7df41a0b5f62e573"
            target={"_blank"}
            className="text-blue-400"
          >
            transaction
          </a>{" "}
          that occured on the Ethereum Network. This is a good step towards
          repaying their total loans they owe and re-stablizing their platform.
        </p>
        <p className="indent-10">
          In other news, the CeFi platform Binance has launched their much
          anticipated zero-fee policy for trades which has surged the volume
          traded on the platform. Cefi continues to be the standard for
          onloading/offloading fiat and for beginners in the space. We still
          have a ways to go to bring more transparency and power to the DeFi
          ecosystem as well as ease of use/costs per transactions.
        </p>
        <h1 className="lg:text-4xl text-2xl mb-3 font-bold font-serif mt-4">
          Personal Updates
        </h1>
        <p className="indent-10">
          This week, I have gotten more potential freelance opportunities in my
          journey to becoming an all-star dev/auditor. I learned more about the
          $6M Aurora and $1M Moonbeam bug bounty payouts' reports explained
          fantastically by the man, the myth the legend,{" "}
          <a
            href="https://pwning.mirror.xyz/"
            target={"_blank"}
            className="text-red-400"
          >
            pwning.eth
          </a>{" "}
          who has made history becoming one of Immunefi's biggest bounty
          hunters. He explains more about how delegateCall() can have some
          unintended consequences on built in native functions because it
          carries msg.value but does not send the ether to the address called.
          Reading up on pwning.eth's reports gives some great insight on how
          even giant protocols can have vulnerablities for us whitehats to
          claim. Theres hope for us!
        </p>
        <p className="indent-10">
          On a personal bounty note, I have found my first few high risk
          vulnerabilities! Big progress from just finding small QA and gas
          optimization reports. Thanks to the{" "}
          <a
            href="https://etherscan.io/tx/0xea97f1dee874f21636dfce49382e68b890c51ec045fd0eae7df41a0b5f62e573"
            target={"_blank"}
            className="text-blue-400"
          >
            KaijuKingz
          </a>{" "}
          and{" "}
          <a
            href="https://etherscan.io/tx/0xea97f1dee874f21636dfce49382e68b890c51ec045fd0eae7df41a0b5f62e573"
            target={"_blank"}
            className="text-blue-400"
          >
            SkidsDAO
          </a>{" "}
          Discords for providing space for me to grow, and I will continue to
          work with them in the future. If you want to join some great
          developers, these communities are some of the best I have come across.
        </p>
        <h1 className="lg:text-4xl text-2xl mb-3 font-bold font-serif mt-4">
          Miscellaneous
        </h1>
        <p className="indent-10">
          To keep the blog more interesting ( and take up space... ), I am going
          to share my favorite song of the week and some insightful new tools I
          am using during the week.
        </p>
        <h1 className="lg:text-4xl text-2xl mb-3 font-bold font-serif mt-10 align-middle">
          New Tool: <Clockify className="w-10 my-auto ml-5" />{" "}
          <a
            className="uppercase text-red-400"
            href="https://clockify.me/"
            target={"_blank"}
          >
            Clockify
          </a>
        </h1>
        <h1 className="lg:text-4xl text-2xl mb-3 font-bold font-serif align-middle">
          Song: <Music className="w-10 my-auto ml-5" />{" "}
          <a
            className="uppercase text-blue-400"
            href="https://www.youtube.com/watch?v=NgsWGfUlwJI"
            target={"_blank"}
          >
            Glimpse of Us - Joji
          </a>
        </h1>
        <h1 className="lg:text-4xl text-2xl mb-3 font-bold font-serif align-middle">
          Youtube Video: <Youtube className="w-10 my-auto ml-5" />{" "}
          <a
            className="uppercase text-red-400"
            href="https://www.youtube.com/watch?v=Hvk63LADbFc"
            target={"_blank"}
          >
            SunnyV2
          </a>
        </h1>
      </div>
    </div>
  );
}

export default BlogPost2;
