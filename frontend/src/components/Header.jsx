import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="navigation-header">
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
              <li><a href="#wine" className="navigation-link">Wine</a></li>
              <li><a href="#whisky" className="navigation-link">Whisky</a></li>
              <li><a href="#liquors" className="navigation-link">Liquors</a></li>
              <li><a href="#deli" className="navigation-link">Deli</a></li>
              <li><a href="#about" className="navigation-link">About</a></li>
            </ul>

            {/* Utilities */}
            <div className="navigation-utilities">
              <button 
                aria-label="Search"
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
                aria-label="Account"
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
                aria-label="Shopping Cart"
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
                    color: 'var(--bg-primary)',
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
                aria-label="Menu"
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
              <li style={{ marginBottom: '16px' }}>
                <a href="#wine" className="navigation-link">Wine</a>
              </li>
              <li style={{ marginBottom: '16px' }}>
                <a href="#whisky" className="navigation-link">Whisky</a>
              </li>
              <li style={{ marginBottom: '16px' }}>
                <a href="#liquors" className="navigation-link">Liquors</a>
              </li>
              <li style={{ marginBottom: '16px' }}>
                <a href="#deli" className="navigation-link">Deli</a>
              </li>
              <li style={{ marginBottom: '16px' }}>
                <a href="#about" className="navigation-link">About</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
