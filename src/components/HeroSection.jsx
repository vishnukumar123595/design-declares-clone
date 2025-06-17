
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeroSection = ({ onRevealComplete }) => {
     const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);


  useEffect(() => {
    const leftTimer = setTimeout(() => {
      setShowLeft(true);

      const rightTimer = setTimeout(() => {
        setShowRight(true);

        // ✅ Tell App.js that HeroSection has finished showing
        if (onRevealComplete) onRevealComplete();

      }, 1000);

      return () => clearTimeout(rightTimer);
    }, 1500);

    return () => clearTimeout(leftTimer);
  }, []);


  useEffect(() => {
          AOS.init({ duration: 1000 });
      }, []);


    return (
        <section className="HeroSection" >
            <div className="info-left-herosection">
                {showLeft && (
                <h2 className='hero-heading fade in' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="120">Design Declares <span className="highlight-orange"><br />UK</span></h2>
                )}
            </div>

            <div className="info-right-herosection">
                 {showRight && (
                <p className="main-heading-herosection fade in" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="120">
                    Design Declares is a growing group of designers, design studios, 
                    agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement,
                     we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
                </p>
                 )}
                
            </div>
        </section>
    );
};



export default HeroSection
