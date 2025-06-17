
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
const GlobalChapter = () => {
 useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="globalchapter">
            <div className="info-left-chapter">
                <h2>Select Global Chapter:</h2>
            </div>

            <div className="info-right-chapter" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="120"
>
                <h1 className="main-heading-Donation">
                    UNITED KINGDOM
                </h1>
                <h1 className="main-heading-Donation">
                    IRELAND
                </h1>
                <h1 className="main-heading-Donation">
                    BRASIL
                </h1>
                <h1 className="main-heading-Donation">
                    AUSTRILIA
                </h1>
                
            </div>
        </section>
    );
};



export default GlobalChapter