import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import HeaderWithSubmenu from './HeaderWithSubmenu';
import Breadcrumb from './Breadcrumb';
import FilterSidebar from './FilterSidebar';
import Footer from './Footer';
import { allWineProducts, sortOptions } from '../data/mock';

const CategoryPage = () => {
  const [filters, setFilters] = useState({
    types: [],
    countries: [],
    priceRange: null
  });
  const [sortBy, setSortBy] = useState('popularity');

  const breadcrumbItems = [
    { label: 'Αρχική', href: '/' },
    { label: 'Κρασιά', href: null }
  ];

  // Filter products
  const filteredProducts = useMemo(() => {
    let products = [...allWineProducts];

    // Filter by type
    if (filters.types.length > 0) {
      products = products.filter(p => filters.types.includes(p.type));
    }

    // Filter by country
    if (filters.countries.length > 0) {
      products = products.filter(p => filters.countries.includes(p.country));
    }

    // Filter by price
    if (filters.priceRange) {
      products = products.filter(p => 
        p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
      );
    }

    return products;
  }, [filters]);

  // Sort products
  const sortedProducts = useMemo(() => {
    let products = [...filteredProducts];

    switch (sortBy) {
      case 'price_asc':
        return products.sort((a, b) => a.price - b.price);
      case 'price_desc':
        return products.sort((a, b) => b.price - a.price);
      case 'name_asc':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'newest':
        return products.reverse();
      default:
        return products;
    }
  }, [filteredProducts, sortBy]);

  const handleClearFilters = () => {
    setFilters({
      types: [],
      countries: [],
      priceRange: null
    });
  };

  return (
    <div style={{ background: '#ffffff' }}>
      <HeaderWithSubmenu />
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <div style={{ display: 'flex', gap: '48px' }}>
          {/* Filters Sidebar */}
          <FilterSidebar 
            filters={filters}
            onFilterChange={setFilters}
            onClearFilters={handleClearFilters}
          />

          {/* Products Grid */}
          <div style={{ flex: 1 }}>
            {/* Category Header with Sort */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '32px'
            }}>
              <div>
                <h1 className="hero-medium" style={{ marginBottom: '8px' }}>Κρασιά</h1>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  {sortedProducts.length} προϊόντα
                </p>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '12px 16px',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '0px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  background: '#ffffff',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '32px'
              }}>
                {sortedProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div 
                      className="product-card hover-lift" 
                      style={{ background: '#ffffff', border: '1px solid var(--border-light)' }}
                    >
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
                          {product.type} • {product.country}
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
            ) : (
              <div style={{ 
                textAlign: 'center', 
                padding: '80px 20px',
                color: 'var(--text-secondary)'
              }}>
                <p className="body-large">Δεν βρέθηκαν προϊόντα με τα επιλεγμένα φίλτρα.</p>
                <button 
                  onClick={handleClearFilters}
                  className="btn-primary"
                  style={{ marginTop: '24px' }}
                >
                  Καθαρισμός Φίλτρων
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
