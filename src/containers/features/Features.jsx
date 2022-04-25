import React from 'react'
import './Features.css';
import icon from '../../assets/EthLogo.png';
import ISTQB from '../../assets/ISTQB.jpg';
import UNITY from '../../assets/UNITY.png';
import JungleFriends from '../../assets/Promo.gif';
import HardBreach from '../../assets/Hardbreach.png';

const Feature = () => (
<>
<div className='folio__Features_Body' id='projects'>
    <div className='folio__Features_Body_Text'>
      <div className='folio__Features_Body_Icon'>
        <img src={icon} alt='icon' />
      </div>
      <div className='folio__Features_Title'>
      <p>
        PERSONAL PROJECTS
      </p>
      </div>
      <div className='folio__Features_Title_Sub' id='folio'>
        <p>
          
        </p>
      </div>
      <div className='folio__certificate' >
              <div className = 'folio__certificate-entry'>
                <a href='https://twitter.com/JungleFriendNFT' alt='junglefriends' target='_blank'><img src={JungleFriends} alt='jungleGIF' className='scale-in-center'/></a>
                <p>
                Jungle Friends NFT
                </p>
                <p className='folio__caption-text'>
                Work in Progress NFT: TBA
                </p>
              </div>
              <div className = 'folio__certificate-entry' >
                <a href='https://harux.itch.io/hardbreach' alt='hardbreach' target='_blank'><img src={HardBreach} alt='hardbreachPNG' className='scale-in-center'/></a>
                <p>
                Hardbreach
                </p>
                <p className='folio__caption-text'>
                Hardbreach is a game I developed in one week built for a game jam competition with one teammate.
                </p>
              </div>
            </div>
      <div className='folio__Features_Body_mainText'>
          <p>
            I am currently working on a DeFi application, stay tuned!!
          </p>
        </div>
    </div>
</div>
</>
)

const Feature2 = () => (
  <>
  <div className='folio__Features_Body' id='about'>
      <div className='folio__Features_Body_Text'>
        <div className='folio__Features_Body_Icon' >
          <img src={icon} alt='icon' />
        </div>
        <p id='bio'>
          ABOUT ME
        </p>
        <div className='folio__Features_Body_mainText'>
          <p>
            I am an eager Ethereum blockchain developer with experience developing full-stack decentralized applications and releasing highly secure smart contracts
            on the Ethereum network. I have a history in game development in the Unity Engine, which got me started in interactive software.
            Due to my background in software testing and extensive testing in private
            blockchain networks, I am able to create and audit contracts to become gas efficient and highly secure.
            I enjoy creating all kinds of blockchain-based applications that challenge my skills because they help me grow my knowledge.
            I can also develop various front-end applications that interact with these applications with both Ethers and Web3.
          </p>
        </div>
      </div>
  </div>
  </>
  )

  const Feature3 = () => (
    <>
    <div className='folio__Features_Body' id='education'>
        <div className='folio__Features_Body_Text'>
          <div className='folio__Features_Body_Icon'>
            <img src={icon} alt='icon' />
          </div>
          <p>
            FORMAL EDUCATION
          </p>
          <div className='folio__Features_Body_mainText'>
            <div className='folio__certificate'>
              <div className = 'folio__certificate-entry'>
                <a href='https://atsqa.org/certified-testers/profile/4c580dcca1fc45b0ad87bcb9df7f3a6b' target='_blank'><img src={ISTQB} alt='ISTQB' className='scale-in-center'/></a>
                <p>
                My ISTB Advanced Level Test Analyst Certification gives me
                the tools to create various testing enviornments to ensure
                the integrity of my software in all levels of development.
                </p>
              </div>
              <div className = 'folio__certificate-entry'>
                <a href='https://www.credly.com/badges/392a6e11-235e-4efd-8d45-594036528fee/linked_in' target='_blank'><img src={UNITY} alt='UNITY' id='unity' className='scale-in-center'/></a>
                <p>
                Whilst developing games for Unity, I achieved the Certified Programmer Certification while developing a game jam project.
                </p>
              </div>
            </div>
        </div>
        </div>
    </div>
    </>
    )

function Features() {
  return (
    <div className='folio__Features'>
      <Feature />
      <Feature2 />
      <Feature3 />
    </div>
  )
}

export default Features