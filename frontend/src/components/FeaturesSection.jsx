import React, { useState } from 'react';
import { features } from '../data/mock';

// Custom elegant SVG icons
const DeliveryIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 18V28C8 29.1046 8.89543 30 10 30H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M34 30H38C39.1046 30 40 29.1046 40 28V24L36 18H30V28C30 29.1046 30.8954 30 32 30H34Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="17" cy="32" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="34" cy="32" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 18H26C27.1046 18 28 18.8954 28 20V28C28 29.1046 27.1046 30 26 30H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M30 22H36L38 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GiftIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="28" height="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 28V38C14 39.1046 14.8954 40 16 40H32C33.1046 40 34 39.1046 34 38V28" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M24 20V40" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M24 20C24 20 21 17 18 17C15 17 13 19 13 21C13 23 15 24 17 24H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 20C24 20 27 17 30 17C33 17 35 19 35 21C35 23 33 24 31 24H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10C14 8.89543 14.8954 8 16 8H32C33.1046 8 34 8.89543 34 10V38C34 39.1046 33.1046 40 32 40H16C14.8954 40 14 39.1046 14 38V10Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20 36H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 32H34" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 12H34" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const getCustomIcon = (iconName) => {
  const icons = {
    Truck: DeliveryIcon,
    Gift: GiftIcon,
    Phone: PhoneIcon
  };
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent /> : null;
};

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="section-padding-small" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
          gap: '32px'
        }}>
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              style={{
                textAlign: 'center',
                padding: '48px 32px',
                background: '#ffffff',
                transition: 'all 0.3s ease',
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index ? '0 8px 30px rgba(0, 0, 0, 0.12)' : '0 2px 10px rgba(0, 0, 0, 0.04)',
                border: `2px solid ${hoveredIndex === index ? 'var(--accent-wine)' : 'transparent'}`,
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: hoveredIndex === index ? 'var(--accent-wine)' : 'var(--bg-secondary)',
                color: hoveredIndex === index ? '#ffffff' : 'var(--text-primary)',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }}>
                {getCustomIcon(feature.icon)}
              </div>
              <h3 className="heading-3" style={{ marginBottom: '12px' }}>
                {feature.title}
              </h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
