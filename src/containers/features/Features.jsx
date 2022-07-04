import React from "react";
import "./Features.css";
import "../../index.css";
import { motion } from "framer-motion";
import ISTQB from "../../assets/ISTQB.jpg";
import UNITY from "../../assets/UNITY.png";
import HardBreach from "../../assets/Hardbreach.gif";
import WalletWrapped from "../../assets/wall.gif";
import anti from "../../assets/anti.gif";
import knight from "../../assets/knight.gif";
import frndz from "../../assets/frndz.gif";
import oz from "../../assets/oz.jpg";
import dvd from "../../assets/damn.png";
import KaijuLogs from "../../assets/Kaijulogs.gif";

const Feature = () => (
  <>
    <div className="folio__Features_Body " id="projects">
      <div className="folio__Features_Body_Text text-white">
        <div className="flex font-serif font-bold p-4 lg:text-4xl text-2xl">
          <p>MY PROJECTS</p>
        </div>
        <div className="flex flex-row flex-wrap space-y-5">
          <motion.div
            className="folio__certificate-entry p-5 rounded-md max-w-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={KaijuLogs} alt="Kaiju Logs" />
            <p className="font-serif font-bold text-3xl mt-5 my-auto">
              KaijuKingz Logs
            </p>
            <p className="mt-3 text-2xl">
              A website to measure statistics of KaijuKingz NFT transactions.
            </p>
            <div className="flex w-full h-12 justify-center space-x-8 mt-8">
              <motion.a
                className="outline outline-1 outline-gray-600 flex w-1/3 justify-center align-middle"
                whileHover={{ backgroundColor: "#2e2e2e93" }}
                href="https://kaijukingzlog.vercel.app/"
                target={"_blank"}
              >
                <p className="text-white my-auto font-bold text-xl">Site</p>
              </motion.a>
              <motion.a
                className="outline outline-1 outline-gray-600 flex w-1/3 justify-center align-middle"
                whileHover={{ backgroundColor: "#2e2e2e93" }}
                href="https://github.com/erc1337-Coffee/Extractions_Log"
                target={"_blank"}
              >
                <p className="text-white my-auto font-bold text-xl">Code</p>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="folio__certificate-entry p-5 rounded-md w-full max-w-[500px] align-middle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={frndz} alt="Kaiju Logs" />
            <p className="font-serif font-bold text-3xl mt-5 my-auto">
              Jungle FRNDZ
            </p>
            <p className="mt-3 text-2xl">
              A Proof of concept NFT minting and marketing website.
            </p>
            <div className="flex w-full h-12 justify-center space-x-8 mt-8">
              <motion.a
                className="outline outline-1 outline-gray-600 flex w-1/3 justify-center align-middle"
                whileHover={{ backgroundColor: "#2e2e2e93" }}
                href="https://junglefriendsmint.vercel.app"
                target={"_blank"}
              >
                <p className="text-white my-auto font-bold text-xl">Site</p>
              </motion.a>
              <motion.a
                className="outline outline-1 outline-gray-600 flex w-1/3 justify-center align-middle"
                whileHover={{ backgroundColor: "#2e2e2e93" }}
                href="https://github.com/Haruxe/junglefriendsmint"
                target={"_blank"}
              >
                <p className="text-white my-auto font-bold text-xl">Code</p>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="folio__certificate-entry p-5 rounded-md w-full max-w-[500px] align-middle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={WalletWrapped} alt="Kaiju Logs" />
            <p className="font-serif font-bold text-3xl mt-5 my-auto">
              WalletWrapped
            </p>
            <p className="mt-3 text-2xl">
              A website for tracking Ethereum wallet information.
            </p>
            <div className="flex w-full h-12 justify-center space-x-8 mt-8">
              <motion.a
                className="outline outline-1 outline-gray-600 flex w-1/3 justify-center align-middle"
                whileHover={{ backgroundColor: "#2e2e2e93" }}
                href="https://walletwrapped.info"
                target={"_blank"}
              >
                <p className="text-white my-auto font-bold text-xl">Site</p>
              </motion.a>
              <motion.a
                className="outline outline-1 outline-gray-600 flex w-1/3 justify-center align-middle"
                whileHover={{ backgroundColor: "#2e2e2e93" }}
                href="https://github.com/Haruxe/WalletWrapped"
                target={"_blank"}
              >
                <p className="text-white my-auto font-bold text-xl">Code</p>
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="folio__certificate-entry p-5 rounded-md w-full max-w-[500px] justify-center align-middle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={anti} alt="Anti" />
            <p className="font-serif font-bold text-3xl mt-5 my-auto">Anti</p>
            <p className="mt-3 text-2xl">
              A social media platform built atop Polygon and Moralis that I
              built for a Hackathon.
            </p>
            <div className="flex w-full h-12 justify-center space-x-8 mt-8">
              <motion.a
                className="outline outline-1 outline-gray-600 flex w-1/3 justify-center align-middle"
                whileHover={{ backgroundColor: "#2e2e2e93" }}
                href="https://anti-966l3isq5-haruxe.vercel.app/home"
                target={"_blank"}
              >
                <p className="text-white my-auto font-bold text-xl">Site</p>
              </motion.a>
              <motion.a
                className="outline outline-1 outline-gray-600 flex w-1/3 justify-center align-middle"
                whileHover={{ backgroundColor: "#2e2e2e93" }}
                href="https://github.com/Haruxe/Anti"
                target={"_blank"}
              >
                <p className="text-white my-auto font-bold text-xl">Code</p>
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="folio__certificate-entry p-5 rounded-md w-full max-w-[500px] align-middle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={HardBreach} alt="hardbreachPNG" />
            <p className="font-serif font-bold text-3xl mt-5 my-auto">
              Hardbreach
            </p>
            <p className="mt-3 text-2xl">
              A Unity game I built in a week for a game-jam competition.
            </p>
            <div className="flex w-full h-12 justify-center space-x-8 mt-8">
              <motion.a
                className="outline outline-1 outline-gray-600 flex w-1/3 justify-center align-middle"
                whileHover={{ backgroundColor: "#2e2e2e93" }}
                href="https://harux.itch.io/hardbreach"
                target={"_blank"}
              >
                <p className="text-white my-auto font-bold text-xl">Play</p>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="folio__certificate-entry p-5 rounded-md w-full max-w-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={knight} alt="knightPNG" className="w-full" />
            <p className="font-serif font-bold text-3xl mt-5 my-auto">
              Knight Shift: King's March
            </p>
            <p className="mt-3 text-2xl">
              A Unity game built with a team for a game-jam.
            </p>
            <div className="flex w-full h-12 justify-center space-x-8 mt-8">
              <motion.a
                className="outline outline-1 outline-gray-600 flex w-1/3 justify-center align-middle"
                whileHover={{ backgroundColor: "#2e2e2e93" }}
                href="https://harux.itch.io/knight-shift-kings-march"
                target={"_blank"}
              >
                <p className="text-white my-auto font-bold text-xl">Play</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="folio__Features_Body_mainText"></div>
      </div>
    </div>
  </>
);

const Feature2 = () => (
  <>
    <div className="folio__Features_Body" id="about">
      <div className="folio__Features_Body_Text text-white">
        <div className="flex font-serif font-bold p-4 lg:text-4xl text-2xl">
          <p id="bio">ABOUT ME</p>
        </div>

        <motion.div
          className="folio__Features_Body_mainText text-left indent-10 my-5 pl-[1rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p>
            I am Josh Francisco, a self-taught Web3 developer and auditor. I
            learnt my programming fundementals from developing games with Unity.
            I have a history in QA, and through the process of going through
            ISTQB's foundation and advanced level testing certificates, I have
            always been taught to build highly tested software. I have led
            development and design in various web3 applications and have
            experience with EVM security from CTFs like OpenZeppelin's
            Ethernaut, and Damn Vulnerable Defi. I audit smart contracts on
            Code4rena and Immunify, and I also develop front end applications in
            hackathons and other community events. I believe that security is a
            necessity when it comes to any online network, and it holds a very
            important role in blockchain especially in this time of early
            adoption. As the Web3 space is still in its infancy, making
            cryptocurrency and assets like NFTs easy to build atop of is of
            utmost importance so that both individuals and organizations can
            build great things.
          </p>
        </motion.div>
      </div>
    </div>
  </>
);

const Feature3 = () => (
  <>
    <div className="folio__Features_Body text-white" id="education">
      <div className="folio__Features_Body_Text">
        <div className="flex font-serif font-bold p-4 lg:text-4xl text-2xl">
          <p>ACHIEVEMENTS</p>
        </div>
        <div className="flex flex-row flex-wrap space-y-5">
          <motion.div
            className="folio__certificate-entry p-5 rounded-md max-w-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <a href="https://kaijukingzlog.vercel.app/" target="_blank">
              <img src={ISTQB} alt="ISTQB" className="scale-in-center" />
            </a>
            <p className="font-serif font-bold text-3xl mt-5 my-auto">
              ISTQB Advanced Tester
            </p>
            <p className="mt-3 text-xl">
              This gives me the tools to properly test and develop software.
            </p>
          </motion.div>

          <motion.div
            className="folio__certificate-entry p-5 rounded-md max-w-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <a href="https://kaijukingzlog.vercel.app/" target="_blank">
              <img
                src={UNITY}
                alt="UNITY"
                className="scale-in-center w-1/2 mx-auto max-h-[380px]"
              />
            </a>
            <p className="font-serif font-bold text-3xl mt-5 my-auto">
              Unity Associate Programmer
            </p>
            <p className="mt-3 text-xl">
              A certificate I achieved to ensure quality in Unity games.
            </p>
          </motion.div>

          <motion.div
            className="folio__certificate-entry p-5 rounded-md max-w-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <a href="https://ethernaut.openzeppelin.com/" target="_blank">
              <img
                src={oz}
                alt="OPENZEPPELIN"
                className="scale-in-center w-full max-h-[350px]"
              />
            </a>
            <p className="font-serif font-bold text-3xl mt-5 my-auto">
              Ethernaut
            </p>
            <p className="mt-3 text-xl">
              In June 2022, I completed the Ethernaut CTF created by Open
              Zeppelin. The CTF involves taking advantage of numerous exploits
              that are provided with the EVM.
            </p>
          </motion.div>

          <motion.div
            className="folio__certificate-entry p-5 rounded-md max-w-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <a href="https://ethernaut.openzeppelin.com/" target="_blank">
              <img
                src={dvd}
                alt="DVD"
                className="scale-in-center w-full max-h-[350px]"
              />
            </a>
            <p className="font-serif font-bold text-3xl mt-5 my-auto">
              Damn Vulnerable Defi
            </p>
            <p className="mt-3 text-xl">
              Also in June 2022, I completed Damn Vulnerable Defi, another CTF
              for EVM exploits in Solidity.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </>
);

function Features() {
  return (
    <div className="folio__Features">
      <Feature />
      <Feature2 />
      <Feature3 />
    </div>
  );
}

export default Features;
