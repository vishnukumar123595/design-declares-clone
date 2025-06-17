

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Globalpartners = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleGetInTouchClick = () => {
    window.open('/contactform', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      className="about"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="true"
      data-aos-offset="120"
    >
      <div className="info-left-about">
        <h2>Global Partnerships</h2>
      </div>

      <div className="info-right-about">
        <p>
          We invite our colleagues from across the design industry to join us in declaring an emergency,
          and starting to take urgent action.*
        </p>

        <div className="info-about-subsections">
          <div>
            <p>
              The acts of emergency above are the first (big) steps. As we all commit to this work,
              we must also commit to doing it in a way that is genuinely inclusive and equitable.
            </p>
            <p>
              It doesn’t matter where on the journey you are. What matters is that you’re here,
              and you’re ready to do the work. Because there is no design on a dead planet.
            </p>
          </div>

          <div>
            <p>
              *We are actively seeking partnerships to expand Design Declares around the world.
              If that sounds like something you’re interested in, please get in touch.
            </p>
            <p>Join our list of global partners...</p>
            <p>UK, Ireland, Brazil, Australia</p>
          </div>
        </div>

        <div>
          <button className="custom-button" onClick={handleGetInTouchClick}>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Globalpartners;
