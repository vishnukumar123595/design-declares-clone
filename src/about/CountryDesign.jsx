
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo2 from '../assets/logo2.svg';
import logo1 from '../assets/logo1.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';
import logo5 from '../assets/logo5.svg';
import logo6 from '../assets/logo6.svg';
import { useEffect } from 'react';

const CountryDesign = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const logos = [
        { src: logo1, alt: 'Design Declares Logo 1' },
        { src: logo2, alt: 'Design Declares Logo 2' },
        { src: logo3, alt: 'Design Declares Logo 3' },
        { src: logo4, alt: 'Design Declares Logo 4' },
        { src: logo5, alt: 'Design Declares Logo 5' },
        { src: logo6, alt: 'Design Declares Logo 6' },
    ];

    return (
        <section className="about" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="120">
            <div className="info-left-about">
                <h2>The Designers Behind Design Declares UK</h2>
            </div>

            <div className="info-right-about-country">
                <p>Inspired by the global emergency declaration movement demanding accountability and action across industries,
                    Design Declares is the initiative of a multidisciplinary group of design professionals and agencies who all believe in the power of design to change things.</p>


                <div className="info-about-subsections-country">
                    {logos.map(({ src, alt }, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={alt}
                            className="newsletterImage"
                            loading="lazy"
                        //   width="120"
                        //   height="auto"
                        />
                    ))}
                </div>

            </div>

        </section>
    );
};



export default CountryDesign