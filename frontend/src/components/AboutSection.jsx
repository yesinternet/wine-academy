import React from 'react';
import { educationalContent } from '../data/mock';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="grid-two-column">
          <div>
            <img 
              src={`${educationalContent.image}?auto=compress&cs=tinysrgb&w=800`}
              alt="Wine Academy Experience"
              style={{ 
                width: '100%', 
                height: '500px', 
                objectFit: 'cover',
                borderRadius: '0px'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
            <div>
              <h2 className="hero-medium" style={{ marginBottom: '16px' }}>
                {educationalContent.title}
              </h2>
              <p className="heading-3" style={{ 
                color: 'var(--text-secondary)', 
                fontWeight: 400,
                marginBottom: '24px'
              }}>
                {educationalContent.subtitle}
              </p>
              <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
                {educationalContent.description}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {educationalContent.features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--text-primary)', flexShrink: 0 }} />
                  <span className="body-regular">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
