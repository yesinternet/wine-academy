import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      background: '#ffffff', 
      borderTop: '1px solid var(--border-light)'
    }}>
      <div className="container" style={{ padding: '80px 40px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(4, 1fr)',
          gap: '48px',
          marginBottom: '60px'
        }}>
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_5b97b585-6f20-429d-8ef2-87a49e2bc709/artifacts/1encx8h3_logo-wine-academy.png" 
              alt="Wine Academy" 
              style={{ height: '40px', width: 'auto', marginBottom: '20px' }}
            />
            <p className="body-small" style={{ 
              color: 'var(--text-secondary)', 
              marginBottom: '20px',
              lineHeight: 1.6
            }}>
              Επιμελούμε εξαιρετικά κρασιά, ποτά και artisan ντελικατέσεν για τον απαιτητικό γευσιγνώστη.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" aria-label="Facebook" style={{ color: 'var(--text-primary)' }}>
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" style={{ color: 'var(--text-primary)' }}>
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" style={{ color: 'var(--text-primary)' }}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '20px' }}>Αγορά</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="#wine" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  Κρασιά
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#champagne" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Σαμπάνια
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#whisky" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Ουίσκι
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#spirits" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Ποτά
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#deli" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Ντελικατέσεν
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '20px' }}>Εξυπηρέτηση Πελατών</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Επικοινωνία
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Αποστολή & Επιστροφές
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Συχνές Ερωτήσεις
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Όροι & Προϋποθέσεις
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '20px' }}>Επικοινωνία</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                <MapPin size={16} style={{ color: 'var(--text-secondary)', flexShrink: 0, marginTop: '2px' }} />
                <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  Οδός Κρασιών 123, Αθήνα
                </span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
                <a href="tel:+302101234567" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  +30 210 123 4567
                </a>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
                <a href="mailto:info@wineacademy.gr" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  info@wineacademy.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p className="body-small" style={{ color: 'var(--text-light)' }}>
            © 2025 Wine Academy. Όλα τα δικαιώματα διατηρούνται.
          </p>
          <p className="body-small" style={{ color: 'var(--text-light)' }}>
            Παρακαλούμε πίνετε υπεύθυνα. Πρέπει να είστε 18+ για αγορά.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
