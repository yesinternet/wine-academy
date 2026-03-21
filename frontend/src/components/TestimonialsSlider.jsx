import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/mock';

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const testimonialsPerView = window.innerWidth <= 768 ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * testimonialsPerView,
    (currentIndex * testimonialsPerView) + testimonialsPerView
  );

  return (
    <section className="section-padding-small" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="hero-medium">Τι Λένε οι Πελάτες μας</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
            Εμπιστεύονται από λάτρεις του κρασιού και γευσιγνώστες
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
            gap: '32px',
            transition: 'opacity 0.5s ease'
          }}>
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                style={{
                  background: '#ffffff',
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

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                style={{
                  position: 'absolute',
                  left: '-60px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  borderRadius: '0px',
                  width: '48px',
                  height: '48px',
                  display: window.innerWidth <= 1024 ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--text-primary)';
                  e.currentTarget.querySelector('svg').style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.querySelector('svg').style.color = 'var(--text-primary)';
                }}
                aria-label="Προηγούμενες κριτικές"
              >
                <ChevronLeft size={24} color="var(--text-primary)" />
              </button>
              
              <button
                onClick={nextSlide}
                style={{
                  position: 'absolute',
                  right: '-60px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  borderRadius: '0px',
                  width: '48px',
                  height: '48px',
                  display: window.innerWidth <= 1024 ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--text-primary)';
                  e.currentTarget.querySelector('svg').style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.querySelector('svg').style.color = 'var(--text-primary)';
                }}
                aria-label="Επόμενες κριτικές"
              >
                <ChevronRight size={24} color="var(--text-primary)" />
              </button>
            </>
          )}
        </div>

        {/* Dots Navigation */}
        {totalSlides > 1 && (
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            justifyContent: 'center',
            marginTop: '40px'
          }}>
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                style={{
                  width: currentIndex === index ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentIndex === index ? 'var(--text-primary)' : 'var(--border-light)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0
                }}
                aria-label={`Μετάβαση στην ομάδα κριτικών ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSlider;
