import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'; // ✅ NEW
import { motion } from "framer-motion";

import casestudy1 from '../assets/casestudy1.webp';
import casestudy2 from '../assets/casestudy2.webp';
import casestudy3 from '../assets/casestudy3.webp';
import casestudy4 from '../assets/casestudy4.webp';
import casestudy5 from '../assets/casestudy5.webp';
import casestudy6 from '../assets/casestudy6.webp';
import casestudy7 from '../assets/casestudy7.webp';
import casestudy8 from '../assets/casestudy8.webp';
import casestudy9 from '../assets/casestudy9.webp';
import casestudy10 from '../assets/casestudy10.webp';

const LatestMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedChapter, setSelectedChapter] = useState('All');

  const categories = ['All', 'Events', 'Case Studies', 'Updates', 'Perspective'];
  const chapters = ['All', 'D! UK', 'D! Ireland', 'D! Australia'];

  const newsEvents = [
    {
      image: casestudy1,
      badges: ['Case Studies', 'D! Ireland'],
      dateTime: '2025-04-24T15:30',
      dateDisplay: '24.04.2025, 03:30 PM',
      description: 'Embedding Sustainability in the Design Curriculum',
      sub_text: 'Outlining the journey of how the Design Declares initiative was integrated into the National College of Art and Design’s curriculum for BA Graphic Design students.',
      link: '/casestudy1'
    },
    {
      image: casestudy2,
      badges: ['Events', 'D! UK'],
      dateTime: '2024-12-06T14:30',
      dateDisplay: '06.12.2024, 02:30 PM',
      description:"SD4P Collective: How can Service Design drive meaningful sustainability impact",
      sub_text: 'Recap: SD4P Collective working session – 28th March 2025',
      link: '/casestudy2'
    },
    {
      image: casestudy3,
      badges: ['Perspective', 'D! Australia'], // 🛠️ Fixed typo
      dateTime: '2025-03-12T11:00',
      dateDisplay: '12.03.2025, 11:00 AM',
      description: "Sasha Titchkosky Interview",
      sub_text: 'An Interview with Koskela Founder and Design Declares Australia Board Member - Sasha Titchkosky',
      link: '/perspectives/food-packaging-ireland'
    },
    {
      image: casestudy4,
      badges: ['Perspective', 'D! Australia'], // 🛠️ Fixed typo
      dateTime: '2025-02-10T10:00',
      dateDisplay: '10.02.2025, 10:00 AM',
      description:"Andrew simpson interview",
      sub_text: 'An Interview with Vert Design and Design Declares Australia CEO - Andew Simpson',
      link: '/perspectives/circular-design'
    },
    {
      image: casestudy5,
      badges: ['Events', 'D! UK'],
      dateTime: '2025-05-01T16:00',
      dateDisplay: '01.05.2025, 04:00 PM',
      description:"Designing Tomorrow: Speculative Thinking Shapes Our Present",
      sub_text: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
      link: '/events/sustainability-toolkit'
    },
    {
      image: casestudy6,
      badges: ['Events', 'D! UK'],
      dateTime: '2025-01-15T13:00',
      dateDisplay: '15.01.2025, 01:00 PM',
      description:"D! june event recap",
      sub_text: 'Design Declares has always been about people. From the moment that Design Council CDO Cat Drew introduced Alexie Sommer and Jo Barnard back in 2022, followed by Abb-d Taiyo and Aurelie Lionet coming onboard and aligning to the vision, we knew Design Declares was something special.',
      link: '/events/green-design-conference'
    },
    {
      image: casestudy7,
      badges: ['Case Studies', 'D! UK'],
      dateTime: '2025-04-09T12:00',
      dateDisplay: '09.04.2025, 12:00 PM',
      description: 'reducing website carbon emissions',
      sub_text:"In an industry first, MEK have documented exactly how they approached and solved this challenge so they can inspire others to do the same and help businesses transition to sustainable digital practices.",
      link: '/case-studies/design-education-climate'
    },
    {
      image: casestudy8,
      badges: ['Case Studies', 'D! UK'],
      dateTime: '2025-06-10T09:30',
      dateDisplay: '10.06.2025, 09:30 AM',
      description: 'Creative climate investigations',
      sub_text: 'An in-depth case from a major UK apparel brand.',
      link: '/case-studies/fashion-circular-design'
    },
    {
      image: casestudy9,
      badges: ['Updates', 'D! UK'],
      dateTime: '2025-06-01T14:00',
      dateDisplay: '01.06.2025, 02:00 PM',
      description: 'Becoming a community interest company',
      sub_text:"Design Declares has become a certified CIC, a people-powered Community Interest Company with planet-led ambitions.",
      link: '/updates/june-policy'
    },
    {
      image: casestudy10,
      badges: ['Case Studies', 'D! UK'],
      dateTime: '2025-07-01T10:00',
      dateDisplay: '01.07.2025, 10:00 AM',
      description: 'Connecting climate scientists and design educators',
      sub_text:"Climify podcast is to connect climate scientists and design educators together so that we can bring climate-related projects into our classrooms.",
      link: '/case-studies/hackathon-regenerative-futures'
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh(); // Optional: refresh AOS after dynamic changes
  }, []);

  const filteredNews = newsEvents.filter((event) => {
    const categoryMatch =
      selectedCategory === 'All' || event.badges.includes(selectedCategory);
    const chapterMatch =
      selectedChapter === 'All' || event.badges.includes(selectedChapter);
    return categoryMatch && chapterMatch;
  });

  return (
    <section
      className="latest-news-section-menu"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="true"
      data-aos-offset="120"
    >
      <div className="latest-news-left-menu">
        <h2 className="latest-news-heading-menu">Latest</h2>

        <div className="filter-group-menu">
          <h3 className="filter-heading-menu">Categories</h3>
          <div className="filter-badges-menu">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-badge-menu ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group-menu">
          <h3 className="filter-heading-menu">View by Chapter</h3>
          <div className="filter-badges-menu">
            {chapters.map((chapter, idx) => (
              <button
                key={idx}
                className={`filter-badge-menu ${selectedChapter === chapter ? 'active' : ''}`}
                onClick={() => setSelectedChapter(chapter)}
              >
                {chapter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="latest-news-right-menu">
        <div className="latest-news-content-menu">
          <div className="latest-news-column-menu right-column-menu">
            {filteredNews.map((event, idx) => (
              <Link to={event.link} className="image-text-pair-menu" key={idx}>
                <motion.img
                  src={event.image}
                  alt={`Thumbnail for ${event.description}`}
                  initial={{ scale: 1 }}
                  className="newsImages-menu"
                  whileHover={{
                    scale: 1.05,
                    transition: { type: 'spring', bounce: 0.4, duration: 0.4 },
                  }}
                />
                <div className="image-text-content-menu">
                  <div className="filter-badge-group-menu">
                    {event.badges.map((badge, i) => (
                      <span className="filter-badge-menu" key={i}>
                        {badge}
                      </span>
                    ))}
                    <time dateTime={event.dateTime} >{event.dateDisplay}</time>
                  </div>
                  <p className="news-description-latest-menu">{event.description}</p>
                  {event.sub_text && (
                    <p className="news-subtext-latest-menu">{event.sub_text}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestMenu;
