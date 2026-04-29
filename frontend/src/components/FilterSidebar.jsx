import React from 'react';
import { X } from 'lucide-react';
import { filterOptions } from '../data/mock';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters }) => {
  const hasActiveFilters = filters.types.length > 0 || filters.countries.length > 0 || filters.priceRange;

  const handleTypeChange = (value) => {
    const newTypes = filters.types.includes(value)
      ? filters.types.filter(t => t !== value)
      : [...filters.types, value];
    onFilterChange({ ...filters, types: newTypes });
  };

  const handleCountryChange = (value) => {
    const newCountries = filters.countries.includes(value)
      ? filters.countries.filter(c => c !== value)
      : [...filters.countries, value];
    onFilterChange({ ...filters, countries: newCountries });
  };

  const handlePriceChange = (priceRange) => {
    onFilterChange({ ...filters, priceRange });
  };

  return (
    <aside style={{ 
      width: '280px',
      padding: '0 32px 0 0',
      borderRight: '1px solid var(--border-light)'
    }}>
      {/* Filter Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '32px'
      }}>
        <h3 className="heading-3">Φίλτρα</h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-wine)',
              fontSize: '13px',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Καθαρισμός
          </button>
        )}
      </div>

      {/* Wine Type Filter */}
      <div style={{ marginBottom: '32px' }}>
        <h4 className="body-regular" style={{ 
          fontWeight: 600, 
          marginBottom: '16px',
          fontFamily: "'Inter', sans-serif"
        }}>
          Τύπος Κρασιού
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filterOptions.wineTypes.map((type) => (
            <label 
              key={type.id}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <input
                type="checkbox"
                checked={filters.types.includes(type.value)}
                onChange={() => handleTypeChange(type.value)}
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                  accentColor: 'var(--accent-wine)'
                }}
              />
              <span className="body-small">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Country Filter */}
      <div style={{ marginBottom: '32px' }}>
        <h4 className="body-regular" style={{ 
          fontWeight: 600, 
          marginBottom: '16px',
          fontFamily: "'Inter', sans-serif"
        }}>
          Χώρα Προέλευσης
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filterOptions.countries.map((country) => (
            <label 
              key={country.id}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <input
                type="checkbox"
                checked={filters.countries.includes(country.value)}
                onChange={() => handleCountryChange(country.value)}
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                  accentColor: 'var(--accent-wine)'
                }}
              />
              <span className="body-small">{country.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div style={{ marginBottom: '32px' }}>
        <h4 className="body-regular" style={{ 
          fontWeight: 600, 
          marginBottom: '16px',
          fontFamily: "'Inter', sans-serif"
        }}>
          Εύρος Τιμής
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filterOptions.priceRanges.map((range) => (
            <label 
              key={range.id}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange?.id === range.id}
                onChange={() => handlePriceChange(range)}
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                  accentColor: 'var(--accent-wine)'
                }}
              />
              <span className="body-small">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
