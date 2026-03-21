import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/mock';

const Categories = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="hero-medium">Shop by Category</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
            Explore our carefully curated collections
          </p>
        </div>

        <div className="grid-product-showcase">
          {categories.map((category) => (
            <div key={category.id} className="product-card hover-lift">
              <img 
                src={`${category.image}?auto=compress&cs=tinysrgb&w=400`}
                alt={category.name}
                className="product-card-image"
                style={{ height: '320px' }}
              />
              <div style={{ padding: '24px' }}>
                <h3 className="heading-2" style={{ marginBottom: '12px' }}>
                  {category.name}
                </h3>
                <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  {category.description}
                </p>
                <p className="body-small" style={{ color: 'var(--text-meta)', marginBottom: '20px' }}>
                  {category.productCount}
                </p>
                <button className="btn-icon">
                  Browse Collection
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
