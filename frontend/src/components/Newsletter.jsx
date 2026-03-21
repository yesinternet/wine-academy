import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 className="hero-medium" style={{ marginBottom: '16px' }}>
            Γίνετε Μέλος της Κοινότητάς μας
          </h2>
          <p className="body-large" style={{ 
            color: 'var(--text-secondary)', 
            marginBottom: '40px'
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
                padding: '16px 20px',
                border: '1px solid var(--border-medium)',
                borderRadius: '0px',
                fontSize: '15px',
                fontFamily: "'Inter', sans-serif",
                background: '#ffffff',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--text-primary)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-medium)';
              }}
            />
            <button 
              type="submit"
              className="btn-primary"
              style={{ 
                minWidth: window.innerWidth <= 640 ? '100%' : '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              Εγγραφή
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
