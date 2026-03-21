import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--bg-secondary)', 
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
              Curating exceptional wines, spirits, and artisan delicacies for the discerning enthusiast.
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
            <h4 className="heading-3" style={{ marginBottom: '20px' }}>Shop</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="#wine" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  Wine
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#whisky" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Whisky
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#liquors" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Liquors
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#deli" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Deli
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '20px' }}>Customer Service</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Contact Us
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Shipping & Returns
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  FAQ
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '20px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                <MapPin size={16} style={{ color: 'var(--text-secondary)', flexShrink: 0, marginTop: '2px' }} />
                <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  123 Wine Street, Vineyards District
                </span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
                <a href="tel:+1234567890" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  +1 (234) 567-890
                </a>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
                <a href="mailto:hello@wineacademy.com" className="body-small" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none' 
                }}>
                  hello@wineacademy.com
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
            © 2025 Wine Academy. All rights reserved.
          </p>
          <p className="body-small" style={{ color: 'var(--text-light)' }}>
            Please drink responsibly. You must be 21+ to purchase.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
