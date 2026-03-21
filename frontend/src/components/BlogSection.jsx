import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../data/mock';

const BlogSection = () => {
  return (
    <section className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="hero-medium">Το Blog μας</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
            Συμβουλές, οδηγοί και ιστορίες από τον κόσμο του κρασιού
          </p>
        </div>

        <div className="grid-product-showcase">
          {blogPosts.map((post) => (
            <div key={post.id} className="product-card hover-lift">
              <img 
                src={`${post.image}?auto=compress&cs=tinysrgb&w=400`}
                alt={post.title}
                className="product-card-image"
                style={{ height: '280px' }}
              />
              <div style={{ padding: '24px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontFamily: "'Suisse Medium', sans-serif"
                  }}>
                    {post.category}
                  </span>
                  <span className="body-small" style={{ 
                    color: 'var(--text-meta)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Calendar size={14} />
                    {post.date}
                  </span>
                </div>
                <h3 className="heading-2" style={{ marginBottom: '12px' }}>
                  {post.title}
                </h3>
                <p className="body-regular" style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: '20px',
                  lineHeight: 1.7
                }}>
                  {post.excerpt}
                </p>
                <button className="btn-icon">
                  Διαβάστε Περισσότερα
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

export default BlogSection;
