import React, { useState } from 'react';
import { Truck, Gift, Phone } from 'lucide-react';
import { features } from '../data/mock';

const getIcon = (iconName) => {
  const icons = {
    Truck: Truck,
    Gift: Gift,
    Phone: Phone
  };
  const Icon = icons[iconName];
  return Icon ? <Icon size={40} strokeWidth={1.5} /> : null;
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
                {getIcon(feature.icon)}
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
