import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AgeVerification = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleVerify = (isAdult) => {
    if (isAdult) {
      localStorage.setItem('ageVerified', 'true');
      setIsOpen(false);
    } else {
      alert('Πρέπει να είστε 18 ετών ή μεγαλύτεροι για να αποκτήσετε πρόσβαση σε αυτόν τον ιστότοπο.');
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: '#ffffff',
        maxWidth: '500px',
        width: '100%',
        padding: '48px',
        borderRadius: '0px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <img 
          src="https://customer-assets.emergentagent.com/job_5b97b585-6f20-429d-8ef2-87a49e2bc709/artifacts/1encx8h3_logo-wine-academy.png" 
          alt="Wine Academy" 
          style={{ height: '60px', width: 'auto', margin: '0 auto 32px' }}
        />
        <h2 className="hero-medium" style={{ marginBottom: '16px' }}>
          Καλώς ήρθατε στη Wine Academy
        </h2>
        <p className="body-large" style={{ 
          color: 'var(--text-secondary)', 
          marginBottom: '32px'
        }}>
          Για να επισκεφθείτε τον ιστότοπό μας, πρέπει να έχετε συμπληρώσει τη νόμιμη ηλικία κατανάλωσης αλκοόλ στη χώρα κατοικίας σας.
        </p>
        <p className="body-regular" style={{ 
          color: 'var(--text-primary)', 
          marginBottom: '32px',
          fontWeight: 700,
          fontFamily: "'Suisse Medium', sans-serif"
        }}>
          Είστε 18 ετών ή μεγαλύτεροι;
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={() => handleVerify(true)}
            className="btn-primary"
            style={{ minWidth: '150px' }}
          >
            Ναι, είμαι
          </button>
          <button 
            onClick={() => handleVerify(false)}
            className="btn-primary"
            style={{ 
              minWidth: '150px',
              background: 'transparent',
              color: 'var(--text-primary)'
            }}
          >
            Όχι, δεν είμαι
          </button>
        </div>
        <p className="body-small" style={{ 
          color: 'var(--text-light)', 
          marginTop: '32px'
        }}>
          Εισερχόμενοι σε αυτόν τον ιστότοπο, συμφωνείτε με τους Όρους & Προϋποθέσεις μας
        </p>
      </div>
    </div>
  );
};

export default AgeVerification;
