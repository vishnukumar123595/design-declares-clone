

import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutImage1 from '../assets/AboutImage1.webp';
import AboutImage2 from '../assets/AboutImage2.webp';
import AboutImage3 from '../assets/AboutImage3.webp';
import AboutImage4 from '../assets/AboutImage4.webp';
import { useEffect } from 'react';

const members = [
    {
        name: 'Abb-d Taiyo',
        role: 'Driftime®',
        img: AboutImage1,
    },
    {
        name: 'Alexie Sommer',
        role: 'URGE Collective',
        img: AboutImage2,
    },
    {
        name: 'Aurelie Lionet',
        role: 'Design for Life',
        img: AboutImage3,
    },
    {
        name: 'Jo Barnard',
        role: 'Morrama',
        img: AboutImage4,
    },
];

const SteeringGroup = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section
            className="about"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-once="true"
            data-aos-offset="120"
        >
            <div className="info-left-about">
                <h2>Steering Group</h2>
            </div>

            <div className="info-right-about-country">
                <div className="info-about-subsections-steeringgroup">
                    {members.map(({ name, role, img }) => (
                        <div className="member-card" key={name}>
                            <img src={img} alt={name} className="newsletterImage" />
                            <h4>{name}</h4>
                            <p>{role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SteeringGroup;
