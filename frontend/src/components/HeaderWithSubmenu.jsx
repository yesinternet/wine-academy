import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { navigationMenu } from '../data/mock';

const HeaderWithSubmenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <header className="navigation-header" style={{ background: '#ffffff', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="/" className="navigation-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_5b97b585-6f20-429d-8ef2-87a49e2bc709/artifacts/1encx8h3_logo-wine-academy.png" 
              alt="Wine Academy" 
              style={{ height: '50px', width: 'auto' }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <ul className="navigation-menu" style={{ display: window.innerWidth <= 1024 ? 'none' : 'flex' }}>
              {navigationMenu.map((item) => (
                <li 
                  key={item.id}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => item.submenu.length > 0 && setActiveSubmenu(item.id)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <a 
                    href={item.href} 
                    className="navigation-link"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '4px',
                      color: item.id === 1 ? '#ba3e2b' : 'var(--text-primary)'
                    }}
                  >
                    {item.label}
                    {item.submenu.length > 0 && <ChevronDown size={14} />}
                  </a>
                  
                  {/* Submenu Dropdown */}
                  {item.submenu.length > 0 && activeSubmenu === item.id && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      marginTop: '8px',
                      background: '#ffffff',
                      border: '1px solid var(--border-light)',
                      borderRadius: '0px',
                      minWidth: '240px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      zIndex: 1000,
                      padding: '16px 0'
                    }}>
                      {item.submenu.map((subitem, index) => (
                        <a
                          key={index}
                          href={subitem.href}
                          style={{
                            display: 'block',
                            padding: '12px 24px',
                            color: 'var(--text-primary)',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontFamily: "'Inter', sans-serif",
                            transition: 'all 0.2s ease',
                            borderLeft: '2px solid transparent'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#fffef2';
                            e.currentTarget.style.borderLeftColor = 'var(--accent-wine)';
                            e.currentTarget.style.color = 'var(--accent-wine)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.borderLeftColor = 'transparent';
                            e.currentTarget.style.color = 'var(--text-primary)';
                          }}
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Utilities */}
            <div className="navigation-utilities">
              <button 
                aria-label="Αναζήτηση"
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: '8px',
                  color: 'var(--text-primary)'
                }}
              >
                <Search size={20} />
              </button>
              <button 
                aria-label="Λογαριασμός"
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: '8px',
                  color: 'var(--text-primary)'
                }}
              >
                <User size={20} />
              </button>
              <button 
                aria-label="Καλάθι Αγορών"
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: '8px',
                  position: 'relative',
                  color: 'var(--text-primary)'
                }}
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    background: 'var(--text-primary)',
                    color: '#ffffff',
                    fontSize: '10px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {cartCount}
                  </span>
                )}
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="mobile-menu-toggle"
                aria-label="Μενού"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: '8px',
                  display: window.innerWidth <= 1024 ? 'block' : 'none',
                  color: 'var(--text-primary)'
                }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav style={{
            display: 'block',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-light)',
            marginTop: '20px'
          }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navigationMenu.map((item) => (
                <li key={item.id} style={{ marginBottom: '16px' }}>
                  <a href={item.href} className="navigation-link">
                    {item.label}
                  </a>
                  {item.submenu.length > 0 && (
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: '12px 0 0 16px', 
                      margin: 0 
                    }}>
                      {item.submenu.map((subitem, index) => (
                        <li key={index} style={{ marginBottom: '8px' }}>
                          <a 
                            href={subitem.href} 
                            style={{ 
                              fontSize: '13px',
                              color: 'var(--text-secondary)',
                              textDecoration: 'none'
                            }}
                          >
                            {subitem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default HeaderWithSubmenu;
