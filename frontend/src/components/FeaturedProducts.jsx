import React from 'react';
import { Link } from 'react-router-dom';
import { featuredProducts } from '../data/mock';

const FeaturedProducts = () => {
  return (
    <section className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="hero-medium">Προτεινόμενα Προϊόντα</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
            Επιλεγμένες φιάλες που ξεχωρίζουν για την ποιότητα και τη δεξιοτεχνία τους
          </p>
        </div>

        <div className="grid-product-showcase">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="product-card hover-lift" style={{ background: '#ffffff', border: '1px solid var(--border-light)' }}>
                <img 
                  src={`${product.image}?auto=compress&cs=tinysrgb&w=400`}
                  alt={product.name}
                  className="product-card-image"
                  style={{ height: '280px', objectFit: 'contain', padding: '20px', background: '#ffffff' }}
                />
                <div style={{ padding: '16px' }}>
                  <p className="body-small" style={{ 
                    color: 'var(--text-meta)', 
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {product.category}
                  </p>
                  <h3 className="product-card-title" style={{ marginBottom: '8px', padding: 0 }}>
                    {product.name}
                  </h3>
                  <p className="product-card-description" style={{ marginBottom: '16px', padding: 0 }}>
                    {product.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-light)'
                  }}>
                    <span className="heading-3">€{product.price}</span>
                    <button 
                      className="btn-secondary"
                      style={{ padding: '8px 16px' }}
                    >
                      Προσθήκη
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
