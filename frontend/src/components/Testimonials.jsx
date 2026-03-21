import React from 'react';
import { testimonials } from '../data/mock';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="section-padding-small" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="hero-medium">What Our Customers Say</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
            Trusted by enthusiasts and connoisseurs alike
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
          gap: '32px'
        }}>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              style={{
                background: 'var(--bg-primary)',
                padding: '32px',
                borderRadius: '0px',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill="var(--text-primary)" 
                    stroke="var(--text-primary)"
                  />
                ))}
              </div>
              <p className="body-regular" style={{ 
                color: 'var(--text-primary)', 
                marginBottom: '24px',
                lineHeight: 1.7
              }}>
                "{testimonial.content}"
              </p>
              <div>
                <p className="body-regular" style={{ 
                  fontWeight: 700, 
                  marginBottom: '4px',
                  fontFamily: "'Suisse Medium', sans-serif"
                }}>
                  {testimonial.name}
                </p>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
