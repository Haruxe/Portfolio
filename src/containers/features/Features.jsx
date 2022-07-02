import React from "react";
import "./Features.css";
import "../../index.css";
import icon from "../../assets/EthLogo.png";
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
          <p>PERSONAL PROJECTS</p>
        </div>
        <div className="flex flex-row flex-wrap space-y-5">
          <div className="folio__certificate-entry p-5 rounded-md max-w-[500px]">
            <a href="https://kaijukingzlog.vercel.app/" target="_blank">
              <img src={KaijuLogs} alt="Kaiju Logs" />
            </a>
            <p className="font-serif font-bold text-4xl mt-5 my-auto">
              KaijuKingz Logs
            </p>
            <p className="mt-3 text-2xl">
              A website that reads transaction data and URI of KaijuKingz NFTs.
            </p>
            <p className="text-2xl mt-5 font-mono">REACT · ETHERS.JS</p>
          </div>

          <div className="folio__certificate-entry p-5 rounded-md w-full max-w-[500px] align-middle">
            <a
              href="https://junglefriendsmint.vercel.app"
              alt="junglefriends"
              target="_blank"
              className="max-w-[500px] max-h-[500px]"
            >
              <img src={frndz} alt="Kaiju Logs" />
            </a>
            <p className="font-serif font-bold text-4xl mt-5 my-auto">
              Jungle FRNDZ
            </p>
            <p className="mt-3 text-2xl">
              A Proof of concept NFT minting and marketing website.
            </p>
            <p className="text-2xl mt-5 font-mono">NEXT.JS · THREE.JS</p>
          </div>

          <div className="folio__certificate-entry p-5 rounded-md w-full max-w-[500px] align-middle">
            <a
              href="https://walletwrapped.info"
              alt="walletwrapped link"
              target="_blank"
            >
              <img src={WalletWrapped} alt="Kaiju Logs" />
            </a>
            <p className="font-serif font-bold text-4xl mt-5 my-auto">
              WalletWrapped
            </p>
            <p className="mt-3 text-2xl">
              A basic website for tracking Ethereum wallet information.
            </p>
            <p className="text-2xl mt-5 font-mono">REACT · TAILWIND.CSS</p>
          </div>

          <div className="folio__certificate-entry p-5 rounded-md w-full max-w-[500px] align-middle">
            <a
              href="https://harux.itch.io/hardbreach"
              alt="hardbreach"
              target="_blank"
            >
              <img src={HardBreach} alt="hardbreachPNG" />
            </a>
            <p className="font-serif font-bold text-4xl mt-5 my-auto">
              Hardbreach
            </p>
            <p className="mt-3 text-2xl">
              A Unity game I built in a week for a game-jam competition.
            </p>
            <p className="text-2xl mt-5 font-mono">C# · UNITY</p>
          </div>

          <div className="folio__certificate-entry p-5 rounded-md w-full max-w-[500px] justify-center">
            <a
              href="https://www.youtube.com/watch?v=V8xgyfnKuFQ"
              alt="anti"
              target="_blank"
            >
              <img src={anti} alt="hardbreachPNG" />
            </a>
            <p className="font-serif font-bold text-4xl mt-5 my-auto">Anti</p>
            <p className="mt-3 text-2xl">
              A social media platform built atop Polygon and Moralis that I
              built for a Hackathon.
            </p>
            <p className="text-2xl mt-5 font-mono">
              SOLIDITY · REACT · MORALIS
            </p>
          </div>

          <div className="folio__certificate-entry p-5 rounded-md w-full max-w-[500px]">
            <a
              href="https://harux.itch.io/knight-shift-kings-march"
              alt="knightshift"
              target="_blank"
            >
              <img src={knight} alt="knightPNG" className="w-full" />
            </a>
            <p className="font-serif font-bold text-4xl mt-5 my-auto">
              Knight Shift: King's March
            </p>
            <p className="mt-3 text-2xl">
              Another Unity game built with a team for a game-jam.
            </p>
            <p className="text-2xl mt-5 font-mono">C# · UNITY</p>
          </div>
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

        <div className="folio__Features_Body_mainText text-left indent-10 mt-5 pl-[1rem]">
          <p>
            I am Josh Francisco, a Web3 developer and auditor. In the beginning,
            I learnt my programming fundementals from developing games with
            Unity. I have a history in QA, and through the process of going
            through ISTQB's foundation and advanced level testing certificates,
            I have always been taught to build highly tested software. I have
            led development and design in various web3 applications and have
            experience with EVM security from CTFs like OpenZeppelin's
            Ethernaut, and Damn Vulnerable Defi. I audit smart contracts on
            Code4rena and Immunify, and I also develop front end apps in
            hackathons and other community events. I believe that security is a
            necessity when it comes to any online network, and it holds a very
            important role in blockchain especially in this time of early
            adoption. As the Web3 space is still in its infancy, making
            cryptocurrency and assets like NFTs easy to build atop of is of
            utmost importance so that both individuals and organizations can
            build great things.
          </p>
        </div>
      </div>
    </div>
  </>
);

const Feature3 = () => (
  <>
    <div className="folio__Features_Body text-white" id="education">
      <div className="folio__Features_Body_Text">
        <div className="flex font-serif font-bold p-4 lg:text-4xl text-2xl">
          <p>Achievements</p>
        </div>
        <div className="flex flex-row flex-wrap space-y-5">
          <div className="folio__certificate-entry p-5 rounded-md max-w-[500px]">
            <a href="https://kaijukingzlog.vercel.app/" target="_blank">
              <img src={ISTQB} alt="ISTQB" className="scale-in-center" />
            </a>
            <p className="font-serif font-bold text-4xl mt-5 my-auto">
              ISTQB Advanced Tester
            </p>
            <p className="mt-3 text-2xl">
              This gives me the tools to properly test and develop software.
            </p>
          </div>

          <div className="folio__certificate-entry p-5 rounded-md max-w-[500px]">
            <a href="https://kaijukingzlog.vercel.app/" target="_blank">
              <img
                src={UNITY}
                alt="UNITY"
                className="scale-in-center w-1/2 mx-auto max-h-[380px]"
              />
            </a>
            <p className="font-serif font-bold text-4xl mt-5 my-auto">
              Unity Associate Programmer
            </p>
            <p className="mt-3 text-2xl">
              A certificate I achieved to ensure quality in Unity games.
            </p>
          </div>

          <div className="folio__certificate-entry p-5 rounded-md max-w-[500px]">
            <a href="https://ethernaut.openzeppelin.com/" target="_blank">
              <img
                src={oz}
                alt="OPENZEPPELIN"
                className="scale-in-center w-full max-h-[350px]"
              />
            </a>
            <p className="font-serif font-bold text-4xl mt-5 my-auto">
              Ethernaut
            </p>
            <p className="mt-3 text-2xl">
              In June 2022, I completed the Ethernaut CTF created by Open
              Zeppelin. The CTF involves taking advantage of numerous exploits
              that are provided with the EVM.
            </p>
          </div>

          <div className="folio__certificate-entry p-5 rounded-md max-w-[500px]">
            <a href="https://ethernaut.openzeppelin.com/" target="_blank">
              <img
                src={dvd}
                alt="DVD"
                className="scale-in-center w-full max-h-[350px]"
              />
            </a>
            <p className="font-serif font-bold text-4xl mt-5 my-auto">
              Damn Vulnerable Defi
            </p>
            <p className="mt-3 text-2xl">
              Also in June 2022, I completed Damn Vulnerable Defi, another CTF
              for EVM exploits in Solidity.
            </p>
          </div>
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
