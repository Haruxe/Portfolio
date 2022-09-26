import React from "react";
import "./Features.css";
import "../../index.css";
import { motion } from "framer-motion";
// const Feature2 = () => (
//   <>
//     <div className="folio__Features_Body" id="about">
//       <div className="folio__Features_Body_Text text-white">
//         <div className="flex font-serif font-bold p-4 lg:text-4xl text-2xl">
//           <p id="bio">ABOUT ME</p>
//         </div>

//         <motion.div
//           className="folio__Features_Body_mainText text-left indent-10 my-5 pl-[1rem]"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.4 }}
//         >
//           <p>
//             I am Josh Francisco, a self-taught Web3 developer and auditor. I
//             learnt my programming fundementals from developing games with Unity.
//             I have a history in QA, and through the process of going through
//             ISTQB's foundation and advanced level testing certificates, I have
//             always been taught to build highly tested software. I have led
//             development and design in various web3 applications and have
//             experience with EVM security from CTFs like OpenZeppelin's
//             Ethernaut, and Damn Vulnerable Defi. I audit smart contracts on
//             Code4rena and Immunify, and I also develop front end applications in
//             hackathons and other community events. I believe that security is a
//             necessity when it comes to any online network, and it holds a very
//             important role in blockchain especially in this time of early
//             adoption. As the Web3 space is still in its infancy, making
//             cryptocurrency and assets like NFTs easy to build atop of is of
//             utmost importance so that both individuals and organizations can
//             build great things.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   </>
// );

function Features() {
  function Panel({ title, summary, code, link, img }) {
    return (
      <motion.div
        className="folio__certificate-entry p-5 rounded-md max-w-[400px] relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <img src={img} alt={title} className={"max-h-[400px] mx-auto"} />
        <p className="font-serif font-bold text-xl mt-5 my-auto">{title}</p>
        {summary ? <p className="mt-3 text-md">{summary}</p> : <></>}
        <div className="flex mt-6 space-x-5 w-full justify-center mx-auto">
          {link ? (
            <motion.a
              className="outline outline-1 outline-gray-600 flex w-1/3 py-2 justify-center align-middle"
              whileHover={{ backgroundColor: "#2e2e2e93" }}
              href={link}
              target={"_blank"}
            >
              <p className="text-white my-auto font-bold text-lg">Site</p>
            </motion.a>
          ) : (
            <></>
          )}
          {code ? (
            <motion.a
              className="outline outline-1 outline-gray-600 flex w-1/3 py-2 justify-center align-middle"
              whileHover={{ backgroundColor: "#2e2e2e93" }}
              href={code}
              target={"_blank"}
            >
              <p className="text-white my-auto font-bold text-lg">Code</p>
            </motion.a>
          ) : (
            <></>
          )}
        </div>
      </motion.div>
    );
  }

  function Title({ text }) {
    return (
      <div className="flex font-serif font-bold p-4 lg:text-2xl text-2xl text-center mx-auto flex-col">
        <p className="mx-auto">{text}</p>
        <div className="w-1/12 bg-white h-[2px] mt-3 mx-auto" />
      </div>
    );
  }

  function PanelHolder({ title, content }) {
    return (
      <div className="folio__Features">
        <div className="folio__Features_Body " id="projects">
          <div className="folio__Features_Body_Text text-white">
            <Title text={title} />
            <div className="flex flex-row flex-wrap">
              {content ? content : <></>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function SectionOne() {
    return (
      <>
        <Panel
          title="KaijuKingz Logs"
          summary="Genesiscollection with allowlist / professional website."
          code="https://github.com/erc1337-Coffee/Extractions_Log"
          link="https://kaijukingzlog.vercel.app/"
          img="/images/Kaijulogs.gif"
        />
        <Panel
          title="Web3SG Genesis"
          summary="A website monitoring KaijuKingz NFT Transactions."
          code="https://github.com/Haruxe/web3sg"
          link="https://web3sg.net"
          img="/images/web3sg.gif"
        />
        <Panel
          title="WalletWrapped"
          summary="A website for tracking Ethereum wallet information."
          code="https://github.com/Haruxe/WalletWrapped"
          link="https://walletwrapped.info"
          img="/images/wall.gif"
        />
        <Panel
          title="Anti"
          summary="A social media platform built atop Polygon and Moralis that I
          built for a Hackathon."
          code="https://github.com/Haruxe/Anti"
          link="https://anti-966l3isq5-haruxe.vercel.app/home"
          img="/images/anti.gif"
        />
        <Panel
          title="Hardbreach"
          summary="A Unity game I built in a week for a game-jam competition."
          link="https://harux.itch.io/hardbreach"
          img="/images/Hardbreach.gif"
        />
        <Panel
          title="Knight Shift: King's March"
          summary="A social media platform built atop Polygon and Moralis that I
          built for a Hackathon."
          link="https://harux.itch.io/knight-shift-kings-march"
          img="/images/knight.gif"
        />
      </>
    );
  }

  function SectionTwo() {
    return (
      <>
        <Panel
          title="ISTQB Advanced Tester"
          link="https://atsqa.org/certified-testers/profile/4c580dcca1fc45b0ad87bcb9df7f3a6b"
          img="/images/ISTQB.jpg"
        />
        <Panel
          title="Unity Associate Programmer"
          link="https://www.credly.com/badges/392a6e11-235e-4efd-8d45-594036528fee"
          img="/images/UNITY.png"
        />
      </>
    );
  }

  return (
    <>
      <PanelHolder title="My Projects" content={<SectionOne />} />
      <PanelHolder title="Education" content={<SectionTwo />}></PanelHolder>
    </>
  );
}

export default Features;
