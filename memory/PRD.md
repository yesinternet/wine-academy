# Wine Academy E-Commerce Homepage - Product Requirements Document (UPDATED)

## Project Overview
**Project Name:** Wine Academy Greek E-shop Homepage  
**Type:** E-commerce Landing Page  
**Language:** Greek (Ελληνικά)  
**Target Audience:** Greek wine enthusiasts, spirit collectors, and gourmet food lovers  
**Brand Positioning:** Approachable & educational, yet sophisticated & refined  
**Date Updated:** December 2025

## Problem Statement
Build an elegant and modern Greek-language homepage for Wine Academy, an online store selling wine, whisky, liquors, and deli products. The homepage should balance approachability with sophistication while emphasizing education and curation, with extensive use of white backgrounds for a clean, premium feel.

## What's Been Implemented ✅
**Latest Update:** December 2025 - Product Details Page added

### Complete Features
1. **Header Navigation (White Background)**
   - Logo with Wine Academy branding
   - Greek navigation: Κρασιά, Σαμπάνια, Ουίσκι, Ποτά, Ντελικατέσεν, Σχετικά
   - Search, Account, Shopping Cart icons
   - Mobile responsive menu

2. **Hero Slider (3 Slides)**
   - Auto-playing carousel with manual controls
   - Slide navigation dots
   - Left/right arrow navigation
   - Greek messaging for each slide
   - White background hero section

3. **Features Section**
   - 3 key services with elegant icons:
     * Δωρεάν Μεταφορικά (Free Shipping) - Truck icon
     * Συσκευασία Δώρου (Gift Wrapping) - Gift icon
     * Τηλεφωνικές Παραγγελίες (Telephone Orders) - Phone icon
   - White cards on beige background

4. **6 Categories Showcase**
   - Expanded from 4 to 6 categories:
     * Κόκκινα Κρασιά (Red Wine)
     * Λευκά Κρασιά (White Wine)
     * Σαμπάνια (Champagne)
     * Ουίσκι (Whisky)
     * Ποτά & Spirits
     * Ντελικατέσεν (Delicatessen)
   - White product cards
   - High-quality category images

5. **Featured Products (White Background)**
   - 6 products with product photography style images
   - Wine bottles, whisky, champagne, spirits on white/light backgrounds
   - Greek product names and descriptions
   - Euro (€) pricing
   - White background section
   - Clean product cards with borders

6. **Special Offers Section**
   - 2 promotional banners with Greek text
   - Gradient overlays
   - Discount badges
   - "Αγοράστε Τώρα" CTAs

7. **About/Educational Section**
   - "Ανακαλύψτε & Μάθετε" (Discover & Learn)
   - Educational features in Greek
   - Two-column layout with imagery

8. **Testimonials Slider**
   - 6 customer reviews (doubled from 3)
   - Auto-playing carousel
   - Shows 3 testimonials at a time
   - Navigation arrows and dots
   - Greek names and testimonials
   - 5-star ratings

9. **Blog Section (NEW)**
   - 3 blog posts with Greek titles
   - Categories and dates
   - Blog post images (wine culture, vineyards)
   - "Διαβάστε Περισσότερα" CTAs
   - White background

10. **Newsletter Signup**
    - Greek form with "Εγγραφή" button
    - Email capture
    - Toast notification in Greek
    - Beige background section

11. **Footer (White Background)**
    - Company info in Greek
    - 4-column layout: Αγορά, Εξυπηρέτηση Πελατών, Επικοινωνία
    - Greek contact details (Athens address, Greek phone)
    - Social media links
    - Legal disclaimer (18+ in Greece)
    - White background

12. **Age Verification Modal**
    - Greek messaging
    - "Είστε 18 ετών ή μεγαλύτεροι;" (Are you 18 or older?)
    - "Ναι, είμαι" / "Όχι, δεν είμαι" buttons
    - LocalStorage persistence

13. **Category Page (`/category/wine`)**
    - Breadcrumb navigation (Αρχική > Κρασιά)
    - Left sidebar with filters:
      * Τύπος Κρασιού (Wine Type): Κόκκινο, Λευκό, Ροζέ, Αφρώδες
      * Χώρα Προέλευσης (Country of Origin)
      * Εύρος Τιμής (Price Range)
    - Sorting dropdown (Δημοφιλότητα, Τιμή, Όνομα)
    - 12 product grid with clickable cards
    - All products link to detail pages
    - White background, luxury minimalist design

14. **Product Details Page (`/product/:id`) ✨**
    - **Image Gallery:**
      * Main product image display (500px height)
      * Thumbnail navigation (up to 4 images)
      * Click to switch images
      * Light grey background for product showcase
    - **Product Information:**
      * Category badge (type + country)
      * Stock status indicator ("ΔΙΑΘΕΣΙΜΟ")
      * Product name (Playfair Display font)
      * Large price display (€849.99)
      * Long description paragraph
    - **Purchase Controls:**
      * Quantity selector (+/- buttons)
      * "Προσθήκη στο Καλάθι" button with cart icon
      * Feature badges (Free Shipping, Secure Payment, Authentic Products)
    - **Product Specifications Table:**
      * Όγκος (Volume): 750ml
      * Αλκοόλ (Alcohol): 13.5%
      * Χρονιά (Vintage): 2015
      * Ποικιλίες (Grapes): Cabernet Sauvignon, Merlot
      * Περιοχή (Region): Bordeaux, France
      * Θερμοκρασία Σερβιρίσματος (Serving Temp)
      * Συνδυασμοί Φαγητού (Food Pairings)
    - **Related Products Section:**
      * 4 related products (same wine type)
      * Clickable cards to other product pages
      * Grid layout at bottom of page
    - **Navigation:**
      * Breadcrumbs: Αρχική > Κρασιά > [Product Name]
      * Links from homepage featured products work
      * Links from category page work
    - **Design:**
      * White background throughout
      * Elegant typography (Playfair Display + Inter)
      * Luxury minimalist aesthetic
      * Responsive layout

15. **About Us Page (`/about`) ✨ NEW**
    - **Hero Section:**
      * Full-width background image with gradient overlay
      * "Η Ιστορία Μας" heading (56px Playfair Display)
      * Brand story introduction paragraph
      * White text on dark background
    - **Mission Section:**
      * Two-column layout (image + text)
      * Wine cellar imagery
      * "Η Αποστολή Μας" content
      * Detailed company philosophy
    - **Values Section:**
      * 4-column grid on beige background
      * Each value card includes:
        - Icon (Award, Users, Heart, Wine)
        - Title
        - Description
      * Values: Ποιότητα, Καθοδήγηση, Πάθος, Συλλογή
      * White cards with hover lift effect
    - **Timeline Section:**
      * "Το Ταξίδι Μας" vertical timeline
      * 4 milestones: 2010 (Η Αρχή), 2015 (Επέκταση), 2020 (Ψηφιακή Παρουσία), 2025 (Σήμερα)
      * Year + Title + Description for each
      * Vertical line connecting timeline dots
      * Clean white background
    - **Why Choose Us Section:**
      * Two-column layout (content + image)
      * Beige background
      * 3 benefits with icons:
        - Βραβευμένη Συλλογή
        - Παγκόσμια Δίκτυα
        - Γρήγορη Παράδοση
      * Wine tasting imagery
    - **CTA Section:**
      * Dark background (#2c2c2c)
      * "Ξεκινήστε το Δικό Σας Ταξίδι" heading
      * Two CTA buttons:
        - "Δείτε τη Συλλογή" (primary, links to /category/wine)
        - "Επικοινωνήστε Μαζί Μας" (secondary)
    - **Navigation:**
      * Accessible via ΣΧΕΤΙΚΑ menu link
      * Breadcrumbs: Αρχική > Σχετικά με εμάς
    - **Design:**
      * Mix of white and beige backgrounds
      * High-quality lifestyle imagery
      * Luxury minimalist aesthetic
      * Playfair Display for headings
      * Consistent spacing and typography

### Design Implementation
- **White Background Strategy:**
  * Header: Pure white (#ffffff)
  * Hero Slider: White background
  * Featured Products: White background
  * Blog Section: White background
  * Footer: White background
  * Product Cards: White with light borders
  * Features Cards: White on beige
  
- **Product Photography:**
  * Wine bottles with white/light backgrounds
  * Champagne bottles on clean backgrounds
  * Whisky product shots
  * Professional e-commerce style imagery

- **All Content Translated to Greek:**
  * Navigation menus
  * Headlines and copy
  * Button text
  * Form placeholders
  * Error messages
  * Footer content

### Mock Data (Greek Version)
- 3 hero slides
- 6 categories (expanded)
- 12 wine products (with extended details for product pages)
- 6 featured products
- 3 features/services
- 6 testimonials (doubled)
- 2 special offers
- 3 blog posts
- Educational content
- Product details: images array, long descriptions, specifications (volume, alcohol, vintage, grapes, region, temperature, pairings)

## Architecture
**Stack:**
- Frontend: React + Tailwind CSS + Shadcn UI
- Backend: FastAPI (not yet implemented)
- Database: MongoDB (not yet implemented)
- Language: Greek (Ελληνικά)

**Current State:** Frontend-only with Greek mock data

## Next Action Items
1. ✅ Greek translation - COMPLETED
2. ✅ Hero slider implementation - COMPLETED
3. ✅ 6 categories - COMPLETED
4. ✅ Features section - COMPLETED
5. ✅ Product photos with white backgrounds - COMPLETED
6. ✅ Testimonials slider with 6 reviews - COMPLETED
7. ✅ Blog section - COMPLETED
8. ✅ White backgrounds for multiple sections - COMPLETED
9. ✅ Category Page with filters and sorting - COMPLETED
10. ✅ Product Details Page - COMPLETED
11. ✅ About Us Page - COMPLETED
12. 🔜 Shopping Cart functionality (next priority)
13. 🔜 Checkout flow
14. Backend API development (products, categories, cart, auth, blog, newsletter)
15. Database schema for MongoDB
16. Frontend-backend integration
17. Greek language admin panel

## Technical Notes
- All UI text in Greek (Ελληνικά)
- Sliders use auto-play with manual controls
- Product images: white/light background style
- Icons from lucide-react library
- Responsive design maintained
- Age verification set to 18+ (Greek law)
- Currency: Euro (€)

## Future Enhancements (Post-Backend)
- Greek content management system
- Multi-language support (Greek/English toggle)
- Greek SEO optimization
- Greek payment gateways integration
- Greek shipping providers integration
