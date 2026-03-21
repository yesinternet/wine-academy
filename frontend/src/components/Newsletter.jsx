import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Ευχαριστούμε για την εγγραφή σας! Ελέγξτε το email σας για μια προσφορά καλωσορίσματος.');
      setEmail('');
    }
  };

  return (
    <section className="section-padding-small" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: '#ffffff',
          padding: '60px 48px',
          border: '2px solid var(--accent-wine)',
          boxShadow: '0 8px 30px rgba(186, 62, 43, 0.1)',
          position: 'relative'
        }}>
          {/* Decorative Corner Elements */}
          <div style={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            width: '40px',
            height: '40px',
            borderTop: '2px solid var(--accent-wine)',
            borderLeft: '2px solid var(--accent-wine)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-2px',
            right: '-2px',
            width: '40px',
            height: '40px',
            borderBottom: '2px solid var(--accent-wine)',
            borderRight: '2px solid var(--accent-wine)'
          }} />
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--accent-wine)',
              color: '#ffffff',
              borderRadius: '50%'
            }}>
              <Mail size={32} />
            </div>
            <h2 className="hero-medium" style={{ marginBottom: '16px' }}>
              Γίνετε Μέλος της Κοινότητάς μας
            </h2>
            <p className="body-large" style={{ 
              color: 'var(--text-secondary)', 
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Εγγραφείτε για να λαμβάνετε αποκλειστικές προσφορές, σημειώσεις γευσιγνωσίας και συστάσεις ειδικών
            </p>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '16px',
              maxWidth: '600px',
              margin: '0 auto',
              flexDirection: window.innerWidth <= 640 ? 'column' : 'row'
            }}>
              <input 
                type="email"
                placeholder="Εισάγετε το email σας"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '18px 24px',
                  border: '2px solid var(--border-medium)',
                  borderRadius: '0px',
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  background: '#ffffff',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-wine)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-medium)';
                }}
              />
              <button 
                type="submit"
                className="btn-primary"
                style={{ 
                  minWidth: window.innerWidth <= 640 ? '100%' : '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'var(--accent-wine)',
                  color: '#ffffff',
                  borderColor: 'var(--accent-wine)'
                }}
              >
                Εγγραφή
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
