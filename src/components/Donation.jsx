
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Donation = () => {
 useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="Donation">
            <div className="info-left-Donation">
                <h2>Donate to D!</h2>
            </div>

            <div className="info-right-Donation" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="120"
>
                <h1 className="main-heading-Donation">
                    Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry.
                    Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
                </h1>
                <div className='Donation-button'>
                    <button
                        className="custom-button"
                        onClick={() =>
                            window.open(
                                'https://wise.com/pay/r/uZ5h3pxRMmTE_pk',
                                '_blank',
                                'noopener,noreferrer'
                            )
                        }
                    >
                        DONATE $10
                    </button>

                    <button
                        className="custom-button"
                        onClick={() =>
                            window.open(
                                'https://wise.com/pay/r/u2IiQNt2ebixruk',
                                '_blank',
                                'noopener,noreferrer'
                            )
                        }
                    >
                     Donate $20
                    </button>

                    <button
                        className="custom-button"
                        onClick={() =>
                            window.open(
                                'https://wise.com/pay/r/2vqUbqPfU9hvVLE',
                                '_blank',
                                'noopener,noreferrer'
                            )
                        }
                    >
                        Donate $30
                    </button>

                </div>
            </div>
        </section>
    );
};



export default Donation;