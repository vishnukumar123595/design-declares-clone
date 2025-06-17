
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeroSection = () => {
  useEffect(() => {
          AOS.init({ duration: 1000 });
      }, []);


    return (
        <section className="HeroSection" >
            <div className="info-left-herosection">
                <h2 className='hero-heading' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="120">Design Declares <span className="highlight-orange"><br />UK</span></h2>
            </div>

            <div className="info-right-herosection">
                <p className="main-heading-herosection" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="120">
                    Design Declares is a growing group of designers, design studios, 
                    agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement,
                     we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
                </p>
                
            </div>
        </section>
    );
};



export default HeroSection
