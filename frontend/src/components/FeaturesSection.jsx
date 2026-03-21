import React from 'react';
import { Truck, Gift, Phone } from 'lucide-react';
import { features } from '../data/mock';

const getIcon = (iconName) => {
  const icons = {
    Truck: Truck,
    Gift: Gift,
    Phone: Phone
  };
  const Icon = icons[iconName];
  return Icon ? <Icon size={32} strokeWidth={1.5} /> : null;
};

const FeaturesSection = () => {
  return (
    <section className="section-padding-small" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
          gap: '48px'
        }}>
          {features.map((feature) => (
            <div 
              key={feature.id}
              style={{
                textAlign: 'center',
                padding: '32px 24px',
                background: '#ffffff',
                transition: 'transform 0.2s ease',
              }}
              className="hover-lift"
            >
              <div style={{
                width: '64px',
                height: '64px',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)'
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
