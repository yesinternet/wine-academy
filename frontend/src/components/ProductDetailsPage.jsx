import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import HeaderWithSubmenu from './HeaderWithSubmenu';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
import { allWineProducts } from '../data/mock';
import { ShoppingCart, Info, Truck, Shield } from 'lucide-react';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = allWineProducts.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div style={{ background: '#ffffff' }}>
        <HeaderWithSubmenu />
        <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
          <h1 className="hero-medium">Το προϊόν δεν βρέθηκε</h1>
          <Link to="/" className="btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>
            Επιστροφή στην Αρχική
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related products (same type, excluding current)
  const relatedProducts = allWineProducts
    .filter(p => p.type === product.type && p.id !== product.id)
    .slice(0, 4);

  const breadcrumbItems = [
    { label: 'Αρχική', href: '/' },
    { label: 'Κρασιά', href: '/category/wine' },
    { label: product.name, href: null }
  ];

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    alert(`Προστέθηκε στο καλάθι: ${quantity}x ${product.name}`);
  };

  return (
    <div style={{ background: '#ffffff' }}>
      <HeaderWithSubmenu />
      <Breadcrumb items={breadcrumbItems} />

      <div className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        {/* Product Main Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          marginBottom: '80px'
        }}>
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div style={{
              background: '#fafafa',
              border: '1px solid var(--border-light)',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '500px'
            }}>
              <img 
                src={`${images[selectedImage]}?auto=compress&cs=tinysrgb&w=800`}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'contain',
                  padding: '40px'
                }}
              />
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${Math.min(images.length, 4)}, 1fr)`,
                gap: '12px'
              }}>
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    style={{
                      background: '#fafafa',
                      border: selectedImage === index ? '2px solid var(--text-primary)' : '1px solid var(--border-light)',
                      padding: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      height: '100px'
                    }}
                  >
                    <img 
                      src={`${img}?auto=compress&cs=tinysrgb&w=200`}
                      alt={`${product.name} - Εικόνα ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Category & Stock */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '16px'
            }}>
              <span className="body-small" style={{
                color: 'var(--text-meta)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {product.type} • {product.country}
              </span>
              {product.inStock && (
                <span style={{
                  padding: '4px 12px',
                  background: '#e8f5e9',
                  color: '#2e7d32',
                  fontSize: '12px',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  ΔΙΑΘΕΣΙΜΟ
                </span>
              )}
            </div>

            {/* Product Name */}
            <h1 className="hero-medium" style={{ marginBottom: '24px' }}>
              {product.name}
            </h1>

            {/* Price */}
            <div style={{
              padding: '24px 0',
              borderTop: '1px solid var(--border-light)',
              borderBottom: '1px solid var(--border-light)',
              marginBottom: '32px'
            }}>
              <span style={{
                fontSize: '36px',
                fontWeight: '300',
                fontFamily: "'Playfair Display', serif",
                color: 'var(--text-primary)'
              }}>
                €{product.price}
              </span>
            </div>

            {/* Short Description */}
            <p className="body-large" style={{ 
              marginBottom: '32px',
              color: 'var(--text-secondary)',
              lineHeight: '1.7'
            }}>
              {product.longDescription || product.description}
            </p>

            {/* Quantity & Add to Cart */}
            <div style={{ marginBottom: '32px' }}>
              <label className="body-regular" style={{ 
                display: 'block', 
                marginBottom: '12px',
                fontWeight: '500'
              }}>
                Ποσότητα
              </label>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  display: 'flex',
                  border: '1px solid var(--border-medium)',
                  background: '#ffffff'
                }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      width: '48px',
                      height: '48px',
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      fontSize: '20px',
                      color: 'var(--text-primary)'
                    }}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    style={{
                      width: '60px',
                      textAlign: 'center',
                      border: 'none',
                      borderLeft: '1px solid var(--border-medium)',
                      borderRight: '1px solid var(--border-medium)',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      width: '48px',
                      height: '48px',
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      fontSize: '20px',
                      color: 'var(--text-primary)'
                    }}
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="btn-primary"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    height: '48px'
                  }}
                >
                  <ShoppingCart size={20} />
                  Προσθήκη στο Καλάθι
                </button>
              </div>
            </div>

            {/* Product Features */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              padding: '24px',
              background: '#fafafa',
              border: '1px solid var(--border-light)',
              marginBottom: '32px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <Truck size={24} style={{ margin: '0 auto 8px', color: 'var(--text-secondary)' }} />
                <p className="body-small" style={{ fontWeight: '500', marginBottom: '4px' }}>
                  Δωρεάν Μεταφορικά
                </p>
                <p className="body-small" style={{ color: 'var(--text-meta)', fontSize: '12px' }}>
                  Άνω των 100€
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Shield size={24} style={{ margin: '0 auto 8px', color: 'var(--text-secondary)' }} />
                <p className="body-small" style={{ fontWeight: '500', marginBottom: '4px' }}>
                  Ασφαλής Πληρωμή
                </p>
                <p className="body-small" style={{ color: 'var(--text-meta)', fontSize: '12px' }}>
                  SSL Encryption
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Info size={24} style={{ margin: '0 auto 8px', color: 'var(--text-secondary)' }} />
                <p className="body-small" style={{ fontWeight: '500', marginBottom: '4px' }}>
                  Γνήσια Προϊόντα
                </p>
                <p className="body-small" style={{ color: 'var(--text-meta)', fontSize: '12px' }}>
                  100% Αυθεντικά
                </p>
              </div>
            </div>

            {/* Product Details Table */}
            {product.volume && (
              <div style={{
                border: '1px solid var(--border-light)',
                marginBottom: '32px'
              }}>
                <h3 className="heading-3" style={{
                  padding: '16px 20px',
                  background: '#fafafa',
                  borderBottom: '1px solid var(--border-light)',
                  margin: 0
                }}>
                  Χαρακτηριστικά
                </h3>
                <table style={{ width: '100%' }}>
                  <tbody>
                    {product.volume && (
                      <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px', 
                          fontWeight: '500',
                          width: '40%'
                        }}>
                          Όγκος
                        </td>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px',
                          color: 'var(--text-secondary)'
                        }}>
                          {product.volume}
                        </td>
                      </tr>
                    )}
                    {product.alcohol && (
                      <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px', 
                          fontWeight: '500'
                        }}>
                          Αλκοόλ
                        </td>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px',
                          color: 'var(--text-secondary)'
                        }}>
                          {product.alcohol}
                        </td>
                      </tr>
                    )}
                    {product.vintage && (
                      <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px', 
                          fontWeight: '500'
                        }}>
                          Χρονιά
                        </td>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px',
                          color: 'var(--text-secondary)'
                        }}>
                          {product.vintage}
                        </td>
                      </tr>
                    )}
                    {product.grapes && (
                      <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px', 
                          fontWeight: '500'
                        }}>
                          Ποικιλίες
                        </td>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px',
                          color: 'var(--text-secondary)'
                        }}>
                          {product.grapes}
                        </td>
                      </tr>
                    )}
                    {product.region && (
                      <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px', 
                          fontWeight: '500'
                        }}>
                          Περιοχή
                        </td>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px',
                          color: 'var(--text-secondary)'
                        }}>
                          {product.region}, {product.country}
                        </td>
                      </tr>
                    )}
                    {product.temperature && (
                      <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px', 
                          fontWeight: '500'
                        }}>
                          Θερμοκρασία Σερβιρίσματος
                        </td>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px',
                          color: 'var(--text-secondary)'
                        }}>
                          {product.temperature}
                        </td>
                      </tr>
                    )}
                    {product.pairings && (
                      <tr>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px', 
                          fontWeight: '500'
                        }}>
                          Συνδυασμοί Φαγητού
                        </td>
                        <td className="body-regular" style={{ 
                          padding: '12px 20px',
                          color: 'var(--text-secondary)'
                        }}>
                          {product.pairings}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div style={{ 
              textAlign: 'center',
              marginBottom: '48px'
            }}>
              <h2 className="hero-medium" style={{ marginBottom: '12px' }}>
                Σχετικά Προϊόντα
              </h2>
              <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
                Ανακαλύψτε παρόμοιες επιλογές
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '32px'
            }}>
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div 
                    className="product-card hover-lift" 
                    style={{ background: '#ffffff', border: '1px solid var(--border-light)' }}
                  >
                    <img 
                      src={`${relatedProduct.image}?auto=compress&cs=tinysrgb&w=400`}
                      alt={relatedProduct.name}
                      className="product-card-image"
                      style={{ height: '240px', objectFit: 'contain', padding: '20px', background: '#ffffff' }}
                    />
                    <div style={{ padding: '16px' }}>
                      <p className="body-small" style={{ 
                        color: 'var(--text-meta)', 
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {relatedProduct.type}
                      </p>
                      <h3 className="product-card-title" style={{ marginBottom: '8px', padding: 0 }}>
                        {relatedProduct.name}
                      </h3>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        paddingTop: '12px',
                        borderTop: '1px solid var(--border-light)'
                      }}>
                        <span className="heading-3">€{relatedProduct.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
