
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LatestNews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const newsEvents = [
    {
      badges: ['Events', 'D! UK'],
      dateTime: '2025-04-24T15:30',
      dateDisplay: '24.04.2025, 03:30 PM',
      description: 'SD4P Collective: How can Service Design drive meaningful sustainability impact',
    },
    {
      badges: ['Events', 'D! UK'],
      dateTime: '2024-12-06T14:30',
      dateDisplay: '06.12.2024, 02:30 PM',
      description: 'Designing Tomorrow: Speculative Thinking Shapes Our Present',
    },
  ];

  const newsRecaps = [
    {
      text: 'Recap: SD4P Collective working session – 28th March 2025',
      link: '/recap-sd4p-session',
      ariaLabel: 'Read story about SD4P Collective working session on March 28th, 2025',
    },
    {
      text: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
      link: '/november-event-story',
      ariaLabel: 'Read story about Design Declares November event',
    },
  ];

  return (
    <section className="latest-news-section">
      <div className="latest-news-left">
        <h2 className="latest-news-heading">Latest</h2>
      </div>

      <div
        className="latest-news-right"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-once="true"
        data-aos-offset="120"
      >
        <div className="latest-news-content">
          {/* Events */}
          <div className="latest-news-column left-column" role="list" aria-label="Upcoming News Events">
            {newsEvents.map((event, idx) => (
              <div className="news-event" key={idx}>
                <div className="news-badge-group">
                  {event.badges.map((badge, i) => (
                    <span className="news-badge" key={i}>
                      {badge}
                    </span>
                  ))}
                  <time dateTime={event.dateTime} className="news-date">
                    {event.dateDisplay}
                  </time>
                </div>
                <p className="news-description">{event.description}</p>
              </div>
            ))}
          </div>

          {/* Recaps */}
          <div className="latest-news-column right-column" role="list" aria-label="Recent News Recaps">
            {newsRecaps.map((recap, idx) => (
              <div className="news-recap" key={idx}>
                <p>{recap.text}</p>
                <a
                  href={recap.link}
                  className="news-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={recap.ariaLabel}
                >
                  Read story
                </a>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            type="button"
            className="custom-button-latestnews"
            onClick={() =>
              window.open('/latest', '_blank', 'noopener,noreferrer')
            }
          >
            See all the latest
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
