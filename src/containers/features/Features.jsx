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
      <div className="folio__Features_Body_Text">
        <div className="flex font-serif font-bold p-4">
          <p>PERSONAL PROJECTS</p>
        </div>
        <div className="folio__Features_Title_Sub" id="folio"></div>
        <div className="folio__certificate">
          <div className="folio__certificate-entry">
            <a
              href="https://kaijukingzlog.vercel.app/"
              alt="kaiju link"
              target="_blank"
            >
              <img
                src={KaijuLogs}
                alt="Kaiju Logs"
                className="scale-in-center"
              />
            </a>
            <p className="font-serif font-bold">KaijuKingz Logs</p>
            <p className="folio__caption-text">
              In June 2022 I created a website that reads transaction data
              centered around the NFT ecosystem, KaijuKingz.
            </p>
            <p className="folio__caption-text_sub">REACT · ETHERS.JS</p>
          </div>
          <div className="folio__certificate-entry">
            <a
              href="https://junglefriendsmint.vercel.app"
              alt="junglefriends"
              target="_blank"
            >
              <img src={frndz} alt="knightPNG" className="scale-in-center" />
            </a>
            <p className="font-serif font-bold">Jungle FRNDZ</p>
            <p className="folio__caption-text">
              As a proof of concept, I created a demo site for the minting of an
              NFT called Jungle FRNDZ.
            </p>
            <p className="folio__caption-text_sub">
              NEXT.JS · THREE.JS · TAILWIND.CSS
            </p>
          </div>
          <div className="folio__certificate-entry">
            <a
              href="https://walletwrapped.info"
              alt="walletwrapped link"
              target="_blank"
            >
              <img
                src={WalletWrapped}
                alt="jungleGIF"
                className="scale-in-center"
              />
            </a>
            <p className="font-serif font-bold">WalletWrapped</p>
            <p className="folio__caption-text">
              WalletWrapped is a website I created for users to be able to learn
              useful and fun tracking information about their/other's NFT and
              wallet history. It leverages etherscan's api to make calls
              regarding user's transactions.
            </p>
            <p className="folio__caption-text_sub">
              REACT · TYPESCRIPT · TAILWIND.CSS
            </p>
          </div>
          <div className="folio__certificate-entry">
            <a
              href="https://harux.itch.io/hardbreach"
              alt="hardbreach"
              target="_blank"
            >
              <img
                src={HardBreach}
                alt="hardbreachPNG"
                className="scale-in-center"
              />
            </a>
            <p className="font-serif font-bold">Hardbreach</p>
            <p className="folio__caption-text">
              Hardbreach is a game I developed in one week built for a game jam
              competition with one teammate in January of this year. Hardbreach
              is a first person strategy game based around moving quickly to
              avoid projectiles. I built the game in Unity3D with C#.
            </p>
            <p className="folio__caption-text_sub">C# · UNITY</p>
          </div>
          <div className="folio__certificate-entry">
            <a
              href="https://www.youtube.com/watch?v=V8xgyfnKuFQ"
              alt="anti"
              target="_blank"
            >
              <img src={anti} alt="hardbreachPNG" className="scale-in-center" />
            </a>
            <p className="font-serif font-bold">Anti</p>
            <p className="folio__caption-text">
              Anti is a social media platform designed to aggregate social media
              accounts for developers in the Web3 space with NFT profile
              pictures. Developers can submit projects and links to them, with
              the posts being hosted on a combination of IPFS and the Polygon
              Network (Mumbai). When posting, users can set the flair/tag of the
              post, which helps others find their posts quicker.
            </p>
            <p className="folio__caption-text_sub">
              SOLIDITY · REACT · MORALIS
            </p>
          </div>
          <div className="folio__certificate-entry">
            <a
              href="https://harux.itch.io/knight-shift-kings-march"
              alt="knightshift"
              target="_blank"
            >
              <img src={knight} alt="knightPNG" className="scale-in-center" />
            </a>
            <p className="font-serif font-bold">Knight Shift: King's March</p>
            <p className="folio__caption-text">
              I led developmnet in a game called "Knight Shift" which is an
              entry to a game jam I entered with 2 other teammates. We built the
              game in Unity3D with C#.
            </p>
            <p className="folio__caption-text_sub">C# · UNITY</p>
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
      <div className="folio__Features_Body_Text">
        <div className="flex font-serif font-bold">
          <p id="bio">ABOUT ME</p>
        </div>

        <div className="folio__Features_Body_mainText text-left indent-10 mt-5 pl-[1rem]">
          <p>
            Hello! I am Josh Francisco, a Web3 developer and auditor specialized
            in security. In the beginning, I learnt my programming fundementals
            from developing games with Unity. I have a history in QA, and
            through the process of going through ISTQB's foundation and advanced
            level testing certificates, I have always been taught to build
            highly tested software. I have led development and design in various
            web3 applications and have experience with EVM security from CTFs
            like OpenZeppelin's Ethernaut, and Damn Vulnerable Defi. I audit
            smart contracts on Code4rena and Immunify, and I also develop front
            end apps in hackathons and other community events. I believe that
            security is a necessity when it comes to any online network, and it
            holds a very important role in blockchain especially in this time of
            early adoption. As the Web3 space is still in its infancy, making
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
    <div className="folio__Features_Body" id="education">
      <div className="folio__Features_Body_Text">
        <div className="font-serif font-bold flex">
          <p>EDUCATION</p>
        </div>

        <div className="folio__Features_Body_mainText">
          <div className="folio__certificate">
            <div className="folio__certificate-entry">
              <a
                href="https://atsqa.org/certified-testers/profile/4c580dcca1fc45b0ad87bcb9df7f3a6b"
                target="_blank"
              >
                <img src={ISTQB} alt="ISTQB" className="scale-in-center" />
              </a>
              <p>
                My ISTB Advanced Level Test Analyst Certification gives me the
                tools to create various testing enviornments to ensure the
                integrity of my software in all levels of development. It also
                tought me in depth about the different software development
                cycles like agile to organize my development and allows me to
                integrate with different teams.
              </p>
            </div>
            <div className="folio__certificate-entry">
              <a
                href="https://www.credly.com/badges/392a6e11-235e-4efd-8d45-594036528fee/linked_in"
                target="_blank"
              >
                <img
                  src={UNITY}
                  alt="UNITY"
                  id="unity"
                  className="scale-in-center"
                />
              </a>
              <p>
                In order to test my experience with C# in Unity, I achieved the
                Unity Programmer Certification.
              </p>
            </div>
            <div className="folio__certificate-entry">
              <a href="https://ethernaut.openzeppelin.com/" target="_blank">
                <img src={oz} alt="OPENZEPPELIN" className="scale-in-center" />
              </a>
              <p>
                In June 2022, I completed the Ethernaut CTF created by Open
                Zeppelin. The CTF involves taking advantage of numerous exploits
                that are provided with the EVM.
              </p>
            </div>
            <div className="folio__certificate-entry">
              <a href="https://www.damnvulnerabledefi.xyz/" target="_blank">
                <img src={dvd} alt="DVD" className="scale-in-center" />
              </a>
              <p>
                Also in June 2022, I completed Damn Vulnerable Defi, another CTF
                for EVM exploits in Solidity.
              </p>
            </div>
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
