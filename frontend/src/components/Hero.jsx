import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="grid-two-column">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
            <h1 className="hero-large">
              Discover exceptional wines, spirits & artisan delicacies
            </h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Curated selections for the discerning palate. From renowned vineyards to rare whiskies, 
              each bottle tells a story waiting to be savored.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-primary">
                Explore Collection
              </button>
              <button className="btn-icon">
                Learn More
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/5490196/pexels-photo-5490196.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Wine tasting experience"
              className="product-card-image"
              style={{ 
                width: '100%', 
                height: '500px', 
                objectFit: 'cover',
                borderRadius: '0px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
