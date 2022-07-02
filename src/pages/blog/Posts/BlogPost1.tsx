import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LeftArrowAlt } from "styled-icons/boxicons-solid";

function BlogPost1() {
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
          initial={{ x: -200, opacity: 0 }}
        >
          <h1 className=" text-red-500 lg:text-6xl font-bold font-serif text-2xl">
            My Ethereum Security Blog. //
          </h1>
        </motion.div>

        <p className="mt-3 lg:text-xl text-md text-gray-100 w-full lg:w-1/2">
          Creating a blog to track my progress, teach others about my learning
          process, and how to follow along.
        </p>
        <div className="h-[1px] w-[80px] bg-gray-400 mt-5" />
      </div>
      <div className="text-white lg:text-lg text-md mt-4 w-full lg:w-3/4 px-3">
        <h1 className="lg:text-4xl text-2xl mb-3 font-bold font-serif">
          Why Do I Do What I Do?
        </h1>
        <p className="indent-10">
          Smart contract security is becoming worse and worse as the crypto
          economy collapses because of new projects being pushed and hurried to
          deployment. There is no end to the amount of vulnerabilities on live
          contracts and the payouts for them are absurd. Upwards of{" "}
          <span className="font-bold">$10 million </span>
          are being touted on bug bounty platforms like{" "}
          <a
            className="text-blue-400"
            href="https://immunefi.com/"
            target={"_blank"}
          >
            Immunefi
          </a>
          . That being said, IMHO these bug bounty programs are extremely
          lucrative but can be an incredibly large time investment with no
          promise of riches. Skilled bug bounty hunters like the #1 Code4rena
          bounty hunter Christoph Michel AKA{" "}
          <a
            className="text-red-400"
            href="https://cmichel.io/"
            target={"_blank"}
          >
            CMichel
          </a>{" "}
          ( who by the way also has a fantastic blog ) remain hunting bugs
          rather than working for an auditing firm the old fashioned way with
          audits.
        </p>
        <h1 className="lg:text-4xl text-2xl my-3 font-bold font-serif">
          Where / When Did I Start?
        </h1>
        <p className="indent-10">
          I started in the web3 space just 3 months ago. So crazy to think about
          how much I have learnt and grown along such a short amount of time. In
          this time I have learnt HTML, CSS, JavaScript, React, Solidity, and
          much much more. I couldn't have gotten along this quickly without the
          fantastic web3 community where I have been welcomed from the very
          start. I built some basic front-end apps to display my skills in that
          front, and I quickly grew into developing smart contracts in Solidity
          where I built my first full-stack application for GitCoin's L2
          Hackathon in May.
        </p>
        <p className="indent-10">
          During this time, HUGE hacks occured on the Ethereum platform the
          likes of{" "}
          <a
            href="https://www.forbes.com/sites/jonathanponciano/2022/03/29/second-biggest-crypto-hack-ever-600-million-in-ethereum-stolen-from-nft-gaming-blockchain/?sh=7f1839f42686"
            className="text-blue-400"
            target={"_blank"}
          >
            $600 million in Ether being stolen from the Ronin Network
          </a>
          . As soon as I learned more, I was hooked. My first option to getting
          into the blockchain security field was doing bug bounties, a way for
          an ethical hacker to get their fix of finding vulns and get payed
          doing so. But it turned out that going straight into bug bounties
          without knowledge of what to look for is not such a good idea.
        </p>
        <h1 className="lg:text-4xl text-2xl my-3 font-bold font-serif">
          My Resources
        </h1>
        <p className="indent-10">
          The absolute best resources for learning about vulnerabilities are
          with CTFs ( Capture The Flag ) challenges like{" "}
          <a
            className="text-red-400"
            target={"_blank"}
            href="https://www.joshfrancisco.io/blog/7.2.22"
          >
            Ethernauts
          </a>{" "}
          and{" "}
          <a
            className="text-red-400"
            target={"_blank"}
            href="https://www.damnvulnerabledefi.xyz/"
          >
            Damn Vulnerable Defi
          </a>
          , which I didn't even complete out of forcing myself to do them - they
          were legitimately fun and I highly recommend doing them for developers
          as well.
        </p>
        <p className="indent-10">
          In addition to just learning the native language of Ethereum,
          Solidity, I had to learn how the EVM ( Ethereum Virtual Machine )
          worked inside and out. There are a lot of resources on Youtube that I
          recommend following, like{" "}
          <a
            href="https://www.youtube.com/watch?v=FNZ5o9S9prU"
            className="text-blue-400"
            target={"_blank"}
          >
            this video
          </a>{" "}
          though not Ethereum focused, explains how stack-based computations are
          done. OpCodes are also a very important thing to learn because that is
          the intermidiary from the EVM bytecode that the EVM reads directly
          into more human readable instructions simular to assembly. A list of
          all of the Opcodes can be conveniantly found{" "}
          <a
            href="https://www.evm.codes/"
            className="text-blue-400"
            target={"_blank"}
          >
            here
          </a>
          .
        </p>
        <p className="indent-10">
          Discord and Twitter are extremely important in web3 becuase we are
          basically all zoomers. Networking with people in the same position as
          you is EXTREMELY important. Surrounding yourself with like-minded
          people who are more skilled and experienced than you will teach you to
          be humble, not be afraid to ask dumb questions ( which you absolutely
          inevitably will have ), and lastly it will get you more motivated to
          learn more. The infosec community in Ethereum is relatively small, but
          once you find your niche of people like I have, you will grow very
          quickly. This space is one of the rare cases where you can become very
          skilled in a very short amount of time. Don't stop learning.
        </p>
        <h1 className="lg:text-4xl text-2xl my-3 font-bold font-serif">
          Goals For The Future
        </h1>
        <p className="indent-10">
          My absolute end goal is to be top 50 on the code4rena leaderboard.
          Competition is becoming more fierce and those who have already
          solidified themselves with experience on the platform will only make
          it more difficult for me to get there. I will achieve this by slowly
          participating in every single Code4rena competition, no matter the
          risk of the vulnerabilities that I find. As of right now, I have only
          submitted two findings for gas optimizations and one potential medium
          vulnerability that is most likely to be invalid. Reading Code4rena
          results to find vulnerabilites I missed is extremely enlightening to
          start to notice patterns on even previously audited projects.
        </p>
        <p className="indent-10">
          As for this blog, I will continue to update it as I progress, the
          frequency of which I am not sure. Probably monthly, though that is
          subject to change. The main thing on my list is to update y'all on new
          posts, but other than that I wish everyone luck in these trying times
          in crypto.
        </p>
      </div>
    </div>
  );
}

export default BlogPost1;
