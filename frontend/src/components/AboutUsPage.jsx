import React from 'react';
import { Link } from 'react-router-dom';
import HeaderWithSubmenu from './HeaderWithSubmenu';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
import { Wine, Award, Users, Heart, MapPin, Clock } from 'lucide-react';

const AboutUsPage = () => {
  const breadcrumbItems = [
    { label: 'Αρχική', href: '/' },
    { label: 'Σχετικά με εμάς', href: null }
  ];

  const values = [
    {
      icon: <Award size={40} />,
      title: "Ποιότητα & Αυθεντικότητα",
      description: "Κάθε φιάλη στη συλλογή μας είναι προσεκτικά επιλεγμένη και εγγυημένα αυθεντική από διακεκριμένους παραγωγούς."
    },
    {
      icon: <Users size={40} />,
      title: "Εξειδικευμένη Καθοδήγηση",
      description: "Η ομάδα των ειδικών μας είναι πάντα διαθέσιμη να σας καθοδηγήσει στην επιλογή του ιδανικού κρασιού ή ποτού."
    },
    {
      icon: <Heart size={40} />,
      title: "Πάθος για το Κρασί",
      description: "Το πάθος μας για την οινολογία και τα fine spirits μεταδίδεται σε κάθε πτυχή της εμπειρίας που προσφέρουμε."
    },
    {
      icon: <Wine size={40} />,
      title: "Επιμελημένη Συλλογή",
      description: "Από κλασικούς οίνους έως σπάνια αποστάγματα, η συλλογή μας ικανοποιεί κάθε γευσιγνώστη και συλλέκτη."
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Η Αρχή",
      description: "Ίδρυση του Wine Academy με όραμα να φέρουμε τα καλύτερα κρασιά και spirits στην ελληνική αγορά."
    },
    {
      year: "2015",
      title: "Επέκταση",
      description: "Ανοίγουμε το πρώτο μας φυσικό κατάστημα στην Αθήνα και επεκτείνουμε τη συλλογή μας σε premium spirits."
    },
    {
      year: "2020",
      title: "Ψηφιακή Παρουσία",
      description: "Λανσάρουμε το e-shop μας, προσφέροντας την πλήρη εμπειρία Wine Academy online."
    },
    {
      year: "2025",
      title: "Σήμερα",
      description: "Περισσότεροι από 5,000 ικανοποιημένοι πελάτες και μια συλλογή που ξεπερνά τις 500 επιλογές."
    }
  ];

  return (
    <div style={{ background: '#ffffff' }}>
      <HeaderWithSubmenu />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section style={{ 
        padding: '80px 0',
        background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '56px',
            fontWeight: '400',
            marginBottom: '24px',
            letterSpacing: '1px'
          }}>
            Η Ιστορία Μας
          </h1>
          <p className="body-large" style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            fontSize: '20px',
            lineHeight: '1.8',
            color: '#ffffff'
          }}>
            Από το 2010, το Wine Academy αποτελεί προορισμό για όσους αναζητούν εξαιρετικά κρασιά, 
            σπάνια spirits και gourmet προϊόντα. Η αφοσίωσή μας στην ποιότητα και την εκπαίδευση 
            μας καθιστά μοναδικούς στον χώρο.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1598306442928-4d90f32c6866?auto=compress&cs=tinysrgb&w=800"
                alt="Wine cellar"
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-light)'
                }}
              />
            </div>
            <div>
              <h2 className="hero-medium" style={{ marginBottom: '24px' }}>
                Η Αποστολή Μας
              </h2>
              <p className="body-large" style={{ 
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                lineHeight: '1.8'
              }}>
                Στο Wine Academy, πιστεύουμε ότι το κρασί και τα fine spirits δεν είναι απλώς ποτά, 
                αλλά μια τέχνη που αξίζει να εκτιμηθεί. Η αποστολή μας είναι να φέρουμε κοντά σας 
                τις καλύτερες επιλογές από όλο τον κόσμο, συνοδευόμενες από γνώση και καθοδήγηση.
              </p>
              <p className="body-large" style={{ 
                color: 'var(--text-secondary)',
                lineHeight: '1.8'
              }}>
                Κάθε φιάλη στη συλλογή μας έχει επιλεγεί με πάθος και προσοχή, αντανακλώντας την 
                αφοσίωσή μας στην ποιότητα και την αυθεντικότητα. Από κλασικούς Γάλλους οίνους 
                μέχρι σπάνια Ιαπωνικά whisky, προσφέρουμε μια εμπειρία που ξεπερνά την απλή αγορά.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding" style={{ background: '#f6f5e8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="hero-medium" style={{ marginBottom: '16px' }}>
              Οι Αξίες Μας
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Αυτό που μας κάνει ξεχωριστούς στον χώρο των premium κρασιών και spirits
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }}>
            {values.map((value, index) => (
              <div 
                key={index}
                style={{
                  background: '#ffffff',
                  padding: '40px 24px',
                  textAlign: 'center',
                  border: '1px solid var(--border-light)',
                  transition: 'transform 0.3s ease'
                }}
                className="hover-lift"
              >
                <div style={{ 
                  color: 'var(--text-primary)',
                  marginBottom: '24px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {value.icon}
                </div>
                <h3 className="heading-3" style={{ marginBottom: '16px' }}>
                  {value.title}
                </h3>
                <p className="body-regular" style={{ 
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="hero-medium" style={{ marginBottom: '16px' }}>
              Το Ταξίδι Μας
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Από την ίδρυση έως σήμερα
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {timeline.map((item, index) => (
              <div 
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '40px',
                  marginBottom: index < timeline.length - 1 ? '48px' : '0',
                  position: 'relative'
                }}
              >
                {/* Year */}
                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '32px',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div style={{
                  paddingLeft: '40px',
                  borderLeft: index < timeline.length - 1 ? '2px solid var(--border-light)' : 'none',
                  paddingBottom: index < timeline.length - 1 ? '48px' : '0',
                  position: 'relative'
                }}>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: '-9px',
                    top: '8px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--text-primary)',
                    border: '3px solid #ffffff'
                  }} />

                  <h3 className="heading-3" style={{ marginBottom: '12px' }}>
                    {item.title}
                  </h3>
                  <p className="body-regular" style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding" style={{ background: '#f6f5e8' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div>
              <h2 className="hero-medium" style={{ marginBottom: '32px' }}>
                Γιατί να Επιλέξετε το Wine Academy
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ 
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#ffffff',
                    border: '1px solid var(--border-light)'
                  }}>
                    <Award size={24} style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <div>
                    <h4 className="heading-3" style={{ marginBottom: '8px' }}>
                      Βραβευμένη Συλλογή
                    </h4>
                    <p className="body-regular" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                      Η συλλογή μας περιλαμβάνει βραβευμένα κρασιά και spirits από τους 
                      σημαντικότερους διαγωνισμούς παγκοσμίως.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ 
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#ffffff',
                    border: '1px solid var(--border-light)'
                  }}>
                    <MapPin size={24} style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <div>
                    <h4 className="heading-3" style={{ marginBottom: '8px' }}>
                      Παγκόσμια Δίκτυα
                    </h4>
                    <p className="body-regular" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                      Συνεργαζόμαστε απευθείας με οινοποιεία και αποσταγματοποιεία από 
                      περισσότερες από 20 χώρες.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ 
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#ffffff',
                    border: '1px solid var(--border-light)'
                  }}>
                    <Clock size={24} style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <div>
                    <h4 className="heading-3" style={{ marginBottom: '8px' }}>
                      Γρήγορη Παράδοση
                    </h4>
                    <p className="body-regular" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                      Δωρεάν μεταφορικά για παραγγελίες άνω των 100€ με παράδοση 
                      εντός 24-48 ωρών σε όλη την Αττική.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&cs=tinysrgb&w=800"
                alt="Wine tasting"
                style={{
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-light)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ 
        background: '#2c2c2c',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '42px',
            fontWeight: '400',
            marginBottom: '24px'
          }}>
            Ξεκινήστε το Δικό Σας Ταξίδι
          </h2>
          <p className="body-large" style={{ 
            marginBottom: '40px',
            color: '#e0e0e0',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Εξερευνήστε τη συλλογή μας και ανακαλύψτε εξαιρετικά κρασιά και spirits
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/category/wine" className="btn-primary" style={{
              background: '#ffffff',
              color: '#2c2c2c',
              border: 'none'
            }}>
              Δείτε τη Συλλογή
            </Link>
            <Link to="/#contact" className="btn-secondary" style={{
              borderColor: '#ffffff',
              color: '#ffffff'
            }}>
              Επικοινωνήστε Μαζί Μας
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
