import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav style={{ 
      padding: '24px 0',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container">
        <ol style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {items.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {index > 0 && (
                <ChevronRight size={14} style={{ color: 'var(--text-light)' }} />
              )}
              {item.href ? (
                <a 
                  href={item.href}
                  className="body-small"
                  style={{ 
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {item.label}
                </a>
              ) : (
                <span className="body-small" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
