
import React, { useEffect, useState } from 'react';
import { Accordion } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
const InfoSection = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const renderIcon = (key) => {
    return activeKey === key ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />;
  };

   useEffect(() => {
          AOS.init({ duration: 1000 });
      }, []);

  return (
    <section className="info-section">
      <div className="info-left">
        <h2>This is Breakdown</h2>
      </div>

      <div className="info-right" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="120">
        <h1 className="main-heading">
          The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
        </h1>

        <div className="custom-accordion">
          {accordionData.map(({ key, title, paragraphs }, index) => (
            <div key={key} className="accordion-item">
              <div
                className="custom-header"
                onClick={() => toggleAccordion(key)}
              >
                <span className="accordion-text">{title}</span>
                {renderIcon(key)}
              </div>

              {activeKey === key && (
                <div className="accordion-body">
                  <div className="accordion-columns">
                    {paragraphs.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                </div>
              )}

              {index < accordionData.length - 1 && <hr className="accordion-divider" />}
            </div>
          ))}
        </div>

        {/* <button className="custom-button" >View our D! Intro Video</button> */}
        <button
          className="custom-button"
          onClick={() =>
            window.open(
              'https://youtu.be/XpnOe94eXdM?si=ee4iwmq3rpNReGSN',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          View our D! Intro Video
        </button>
      </div>
    </section>
  );
};

const accordionData = [
  {
    key: '0',
    title: 'Role of Design',
    paragraphs: [
      'As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.',
      'Because designers are makers. We make ideas real. We generate solutions. We build the world – dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it.',
    ],
  },
  {
    key: '1',
    title: 'Time for Change',
    paragraphs: [
      'Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.',
      'This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs.',
      'It means introducing principles of sustainability, circularity and – ultimately – regenerative design into our practice to recapture and repurpose resources and materials.',
      'And it means acting systemically – seeing the bigger picture and working with others to sharpen design’s incredible capacity to influence and accelerate climate repair and justice.',
    ],
  },
  {
    key: '2',
    title: 'Act with Urgency',
    paragraphs: [
      'We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action – meaningful steps that can begin to connect what we know to what we do.',
      'This is the most important brief of our lives. Join us as we begin to design a climate-positive future.',
    ],
  },
];

export default InfoSection;
