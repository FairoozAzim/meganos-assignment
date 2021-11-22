import React, { useEffect, useState } from 'react';
import './MainSection.css'
import Fade from 'react-reveal/Fade';
import main from '../../../images/main.png'
import blackLogo from '../../../images/logo-black.png'
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import SplitText from '../SplitText/SplitText';



const MainSection = () => {

 
    const [animation, setAnimation] = useState(false);
    const text= 'Made For Motion';

    const animateOnScroll = () => {
        //console.log(window.scrollY);
        if(window.scrollY >= 20 && window.scrollY <= 2500){
            setAnimation(true);
        }
        else {
            setAnimation(false);
        }
    }
    useEffect(() => {
        animateOnScroll()
        window.addEventListener('scroll',animateOnScroll)
    })
    return (
        <div className='mt-5 ms-0 '>

        {/*===== right and left float items===== */}

       <div className='right-text'>
       <div className='d-flex right-fixed'>
       <img src={blackLogo} alt='Frame logo' className='me-2 w-25'/>
       {
           !animation ? <p className='motion mt-4 me-0 d-inline'>{text}</p>
           :
            <SplitText
            text={text}
            ></SplitText>       
          
       }
       </div>
       </div>
       <div className='left-contact'>
           <div className='left-fixed d-flex flex-column'>
            <FaFacebook className='mb-3 social'/>
            <FaTwitter className='mb-3 social'/>
            <FaInstagram className='mb-3 social'/>
           </div>

       </div>

       {/*================== main section================ */}

      <div className='main-container'>
      <img src={main} className='img-fluid main-img' alt='a boy and a girl'></img>
        <div className='info-div'>
           <Fade bottom>
           <h1>Melissa Bentivoglio CEO & Co-Founder</h1> 
           <p>Melissa Bentivoglio is a classically trained ballet dancer and a renowned pilates and fitness instructor. Melissa credits her dedication to pilates as having changed her life after years of elite level performance. In 2018, she designed her own proprietary reformer for use in her own studio. By launching Frame, she hopes to make pilates more widely available and accessible, so that everyone has a chance to improve their quality of life.</p>
           <h1>Lee Belzberg 
            Co-Founder</h1>
            <p>Following in the footsteps of his family, Lee Belzberg continues the Belzberg legacy with Frame. He seeks to combine his deep expertise of wealth management, real-estate banking, and private equity with his passion for health and wellness. Lee is excited to venture into new frontiers and take his strategic vision and entrepreneurial spirit to the digital-fitness startup space.</p>
           </Fade>
           
        </div> 
      </div>
        <div className='container-fluid d-flex flex-column flex-lg-row mt-5 mb-5 ms-lg-4'>
            <div className='intro me-lg-5'>
                <Fade bottom>
                <h4>Mark Mastrov Investor, Board of Director</h4>
                <p className='mt-5 mb-5'>Mark Mastrov is an American businessman who was born in Oakland, CA. In addition to serving on the board and investing in Frame, he is the founder and former CEO of 24-Hour Fitness as well as many other fitness ventures worldwide. Mastrov is also a member of the Sacramento Kings ownership group.</p>
                </Fade>
            </div>
            <div className='intro ms-lg-5'>
            <Fade bottom>
            <h4>Michael Bruno <br/> Investor</h4> 
            <p className='mt-5'>Michael Bruno is the owner and CEO of Core Health and Fitness. Core Health & Fitness is the world’s largest privately-held marketer and distributor of commercial fitness solutions to health clubs, community recreational centers, hotels, government, educational facilities and more.</p>
            </Fade>
            </div>
        </div>
        </div>
    );
};

export default MainSection;