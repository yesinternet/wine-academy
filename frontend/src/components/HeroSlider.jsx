import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/mock';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-padding hero-animated-bg" style={{ background: '#ffffff', position: 'relative' }}>
      <div className="container">
        <div className="grid-two-column">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
            <h1 className="hero-large" style={{ 
              transition: 'opacity 0.5s ease',
              opacity: 1
            }}>
              {heroSlides[currentSlide].title}
            </h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              {heroSlides[currentSlide].subtitle}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="btn-primary">
                {heroSlides[currentSlide].cta}
              </button>
              
              {/* Slider Navigation Dots */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    style={{
                      width: currentSlide === index ? '32px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: currentSlide === index ? 'var(--text-primary)' : 'var(--border-light)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0
                    }}
                    aria-label={`Μετάβαση στο slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <img 
              src={`${heroSlides[currentSlide].image}?auto=compress&cs=tinysrgb&w=800`}
              alt={heroSlides[currentSlide].title}
              className="product-card-image"
              style={{ 
                width: '100%', 
                height: '500px', 
                objectFit: 'cover',
                borderRadius: '0px',
                transition: 'opacity 0.5s ease'
              }}
            />
            
            {/* Slider Arrow Controls */}
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '0px',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
              aria-label="Προηγούμενο slide"
            >
              <ChevronLeft size={24} color="var(--text-primary)" />
            </button>
            
            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '0px',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
              aria-label="Επόμενο slide"
            >
              <ChevronRight size={24} color="var(--text-primary)" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
