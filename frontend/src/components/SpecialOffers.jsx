import React from 'react';
import { specialOffers } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const SpecialOffers = () => {
  return (
    <section className="section-padding-small" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="hero-medium">Ειδικές Προσφορές</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
            Περιορισμένες επιλογές σε εξαιρετική αξία
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
          gap: '32px'
        }}>
          {specialOffers.map((offer) => (
            <div 
              key={offer.id} 
              style={{ 
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0px',
                height: '400px'
              }}
              className="hover-lift"
            >
              <img 
                src={`${offer.image}?auto=compress&cs=tinysrgb&w=800`}
                alt={offer.title}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                padding: '48px 32px 32px',
                color: '#ffffff'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: '#ffffff',
                  color: 'var(--text-primary)',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  fontFamily: "'Suisse Medium', sans-serif"
                }}>
                  {offer.discount}
                </div>
                <h3 className="heading-2" style={{ color: '#ffffff', marginBottom: '8px' }}>
                  {offer.title}
                </h3>
                <p className="body-regular" style={{ 
                  color: '#ffffff', 
                  opacity: 0.9,
                  marginBottom: '16px'
                }}>
                  {offer.description}
                </p>
                <button 
                  className="btn-icon" 
                  style={{ color: '#ffffff' }}
                >
                  Αγοράστε Τώρα
                  <ArrowRight size={12} style={{ color: '#ffffff' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
