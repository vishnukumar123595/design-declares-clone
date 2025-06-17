

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const AboutDesignDeclares = () => {
  useEffect(() => {
          AOS.init({ duration: 1000 });
      }, []);


    return (
        <section className="about" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="120">
            <div className="info-left-about">
                <h2>About Design Declares</h2>
            </div>

            <div className="info-right-about">
                <h1 className="main-heading-about">
                    Climate breakdown has begun. And business as usual is not an option.
                </h1>

                <p><strong>That&apos;s why we started Design Declares.</strong></p>
                <p>Inspired by a global declaration movement sounding the alarm in industries everywhere, we&apos;re an industry-recognised initiative representing the fears,
                    hopes and commitment to action of a growing group of designers, design studios, agencies and institutions.</p>
                <div>
                    <button className="custom-button" onClick={() =>
                            window.open(
                                '/',
                                '_blank',
                                'noopener,noreferrer'
                            )
                        }>See Global Declarations</button>
                </div>
                <div className="info-about-subsections">
                    <div>
                        <p>Together, we sit at the very beginning of the creative process.
                            The tools we use and the choices we make can influence society&apos;s behaviour,
                            change economies and challenge everything that&apos;s come before.
                        </p>
                    </div>

                    <div>
                        <p> Because design, whether it&apos;s a product, a piece of packaging or an exhibition space, has impact.
                            It&apos;s up to us whether that impact is harmful or healing.
                        </p>
                        <p>
                            We&apos;re glad you&apos;re here. Let&apos;s get to work
                        </p>
                    </div>
                </div>
                <div>
                    <button className="custom-button" onClick={() =>
                            window.open(
                                '/',
                                '_blank',
                                'noopener,noreferrer'
                            )
                        }>Declare Emergency Now</button>
                </div>
                <div className="info-about-subsections">
                    <div>
                        <ul>
                            <li>Design Declares is free.</li>
                            <li>&apos;Design&apos; to us means industrial, digital, graphic, communication and service design.</li>
                            <li>Design Declares offers support to all its signatories through shared best practice, resources and insights, all found in the Toolkit.</li>
                            <li>Our signatories use the clarity of the 8 Acts of Emergency as a way to start meaningful conversations and actions in collaboration with colleagues,
                                collaborators and clients.</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>We welcome declarations from companies with an office and/or employing at least one full-time designer, and from practising freelance designers who are registered as self-employed in the UK.
                                All signatories will be named and published on this site.</li>
                            <li>As a collective voice, we will liaise with other industry organisations and networks,
                                constructively engaging with government, clients and design media.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
};



export default AboutDesignDeclares