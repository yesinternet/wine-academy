// Mock data for Wine Academy homepage - Greek Version

export const heroSlides = [
  {
    id: 1,
    title: "Ανακαλύψτε εξαιρετικά κρασιά & ποτά",
    subtitle: "Επιλεγμένες συλλογές από διακεκριμένα αμπελώνες και οινοποιεία του κόσμου",
    image: "https://images.pexels.com/photos/5490196/pexels-photo-5490196.jpeg",
    cta: "Εξερευνήστε τη Συλλογή"
  },
  {
    id: 2,
    title: "Σπάνια Ουίσκι & Premium Spirits",
    subtitle: "Μοναδική συλλογή από single malts και premium αποστάγματα",
    image: "https://images.unsplash.com/photo-1598306442928-4d90f32c6866",
    cta: "Δείτε Περισσότερα"
  },
  {
    id: 3,
    title: "Δωρεάν Μεταφορικά σε παραγγελίες άνω των 100€",
    subtitle: "Απολαύστε premium προϊόντα με γρήγορη και ασφαλή παράδοση",
    image: "https://images.unsplash.com/photo-1558670460-cad0c19b1840",
    cta: "Αγοράστε Τώρα"
  }
];

export const allWineProducts = [
  {
    id: 1,
    name: "Château Margaux 2015",
    category: "Κρασί",
    type: "Κόκκινο",
    country: "Γαλλία",
    region: "Bordeaux",
    price: 849.99,
    image: "https://images.unsplash.com/photo-1611571940159-425a28706d6f",
    description: "Premier Grand Cru Classé από το Bordeaux",
    longDescription: "Το Château Margaux 2015 είναι ένα εξαιρετικό Premier Grand Cru Classé κρασί από τη περιοχή Bordeaux της Γαλλίας. Αυτή η εξαιρετική χρονιά προσφέρει μια αρμονική ισορροπία μεταξύ φρουτώδους χαρακτήρα και δομημένων τανινών. Στη μύτη αναδύονται νότες μαύρου κερασιού, βατόμουρου και λεπτές αποχρώσεις γλυκάνισου και κέδρου.",
    images: [
      "https://images.unsplash.com/photo-1611571940159-425a28706d6f",
      "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6",
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
    ],
    volume: "750ml",
    alcohol: "13.5%",
    vintage: "2015",
    grapes: "Cabernet Sauvignon, Merlot, Cabernet Franc",
    temperature: "16-18°C",
    pairings: "Κόκκινα κρέατα, Άγριο κυνήγι, Ώριμα τυριά",
    inStock: true
  },
  {
    id: 2,
    name: "Barolo Riserva 2016",
    category: "Κρασί",
    type: "Κόκκινο",
    country: "Ιταλία",
    region: "Piedmont",
    price: 124.99,
    image: "https://images.pexels.com/photos/4710897/pexels-photo-4710897.jpeg",
    description: "Κομψό Nebbiolo από το Piedmont",
    longDescription: "Το Barolo Riserva 2016 είναι ένα κλασικό κρασί από την περιοχή Piedmont της Ιταλίας. Παράγεται από 100% σταφύλια Nebbiolo και έχει ωριμάσει για τουλάχιστον 5 χρόνια. Προσφέρει πλούσιες νότες κερασιού, τριαντάφυλλου, τρούφας και δέρματος.",
    images: [
      "https://images.pexels.com/photos/4710897/pexels-photo-4710897.jpeg",
      "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6",
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809"
    ],
    volume: "750ml",
    alcohol: "14%",
    vintage: "2016",
    grapes: "Nebbiolo",
    temperature: "18-20°C",
    pairings: "Μπριζόλες, Πικάντικα φαγητά, Τρούφες",
    inStock: true
  },
  {
    id: 3,
    name: "Chardonnay Reserve 2020",
    category: "Κρασί",
    type: "Λευκό",
    country: "ΗΠΑ",
    region: "Napa Valley",
    price: 68.99,
    image: "https://images.unsplash.com/photo-1642189941430-7073f85d7140",
    description: "Πλούσιο Chardonnay με νότες βανίλιας",
    inStock: true
  },
  {
    id: 4,
    name: "Sancerre Blanc 2021",
    category: "Κρασί",
    type: "Λευκό",
    country: "Γαλλία",
    region: "Loire",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1642189941430-7073f85d7140",
    description: "Φρέσκο Sauvignon Blanc με εσπεριδοειδή",
    inStock: true
  },
  {
    id: 5,
    name: "Champagne Brut Réserve",
    category: "Κρασί",
    type: "Αφρώδες",
    country: "Γαλλία",
    region: "Champagne",
    price: 89.99,
    image: "https://images.pexels.com/photos/5379748/pexels-photo-5379748.jpeg",
    description: "Εκλεπτυσμένη σαμπάνια για ιδιαίτερες στιγμές",
    inStock: true
  },
  {
    id: 6,
    name: "Prosecco DOC",
    category: "Κρασί",
    type: "Αφρώδες",
    country: "Ιταλία",
    region: "Veneto",
    price: 24.99,
    image: "https://images.pexels.com/photos/5379748/pexels-photo-5379748.jpeg",
    description: "Ελαφρύ και φρέσκο Prosecco",
    inStock: true
  },
  {
    id: 7,
    name: "Pinot Noir 2019",
    category: "Κρασί",
    type: "Κόκκινο",
    country: "Νέα Ζηλανδία",
    region: "Central Otago",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1611571940159-425a28706d6f",
    description: "Μεταξένιο Pinot Noir με νότες κερασιού",
    inStock: true
  },
  {
    id: 8,
    name: "Assyrtiko Santorini 2022",
    category: "Κρασί",
    type: "Λευκό",
    country: "Ελλάδα",
    region: "Σαντορίνη",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1642189941430-7073f85d7140",
    description: "Ελληνικό Assyrtiko με ορυκτότητα",
    inStock: true
  },
  {
    id: 9,
    name: "Cabernet Sauvignon 2018",
    category: "Κρασί",
    type: "Κόκκινο",
    country: "Χιλή",
    region: "Maipo Valley",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1611571940159-425a28706d6f",
    description: "Γεμάτο σώμα με νότες μαύρων φρούτων",
    inStock: true
  },
  {
    id: 10,
    name: "Riesling Spätlese 2020",
    category: "Κρασί",
    type: "Λευκό",
    country: "Γερμανία",
    region: "Mosel",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1642189941430-7073f85d7140",
    description: "Αρωματικό Riesling με ισορροπία γλυκύτητας",
    inStock: true
  },
  {
    id: 11,
    name: "Malbec Reserve 2019",
    category: "Κρασί",
    type: "Κόκκινο",
    country: "Αργεντινή",
    region: "Mendoza",
    price: 48.99,
    image: "https://images.unsplash.com/photo-1611571940159-425a28706d6f",
    description: "Πλούσιο Malbec με βελούδινες τανίνες",
    inStock: true
  },
  {
    id: 12,
    name: "Rosé de Provence 2022",
    category: "Κρασί",
    type: "Ροζέ",
    country: "Γαλλία",
    region: "Provence",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1642189941430-7073f85d7140",
    description: "Δροσερό ροζέ με νότες φράουλας",
    inStock: true
  }
];

export const featuredProducts = allWineProducts.slice(0, 6);

export const filterOptions = {
  wineTypes: [
    { id: 1, label: "Κόκκινο", value: "Κόκκινο" },
    { id: 2, label: "Λευκό", value: "Λευκό" },
    { id: 3, label: "Ροζέ", value: "Ροζέ" },
    { id: 4, label: "Αφρώδες", value: "Αφρώδες" }
  ],
  countries: [
    { id: 1, label: "Ελλάδα", value: "Ελλάδα" },
    { id: 2, label: "Γαλλία", value: "Γαλλία" },
    { id: 3, label: "Ιταλία", value: "Ιταλία" },
    { id: 4, label: "ΗΠΑ", value: "ΗΠΑ" },
    { id: 5, label: "Ισπανία", value: "Ισπανία" },
    { id: 6, label: "Άλλες Χώρες", value: "other" }
  ],
  priceRanges: [
    { id: 1, label: "Κάτω από 30€", min: 0, max: 30 },
    { id: 2, label: "30€ - 50€", min: 30, max: 50 },
    { id: 3, label: "50€ - 100€", min: 50, max: 100 },
    { id: 4, label: "100€ - 200€", min: 100, max: 200 },
    { id: 5, label: "Πάνω από 200€", min: 200, max: 99999 }
  ]
};

export const sortOptions = [
  { id: 1, label: "Δημοφιλότητα", value: "popularity" },
  { id: 2, label: "Τιμή: Χαμηλή σε Υψηλή", value: "price_asc" },
  { id: 3, label: "Τιμή: Υψηλή σε Χαμηλή", value: "price_desc" },
  { id: 4, label: "Νεότερα Πρώτα", value: "newest" },
  { id: 5, label: "Όνομα: A-Z", value: "name_asc" }
];

export const navigationMenu = [
  {
    id: 1,
    label: "ΚΡΑΣΙ",
    href: "/category/wine",
    submenu: [
      { label: "Λευκό Κρασί", href: "/category/wine?type=white" },
      { label: "Ροζέ Κρασί", href: "/category/wine?type=rose" },
      { label: "Κόκκινο Κρασί", href: "/category/wine?type=red" },
      { label: "Γλυκό Κρασί - Επιδόρπιο", href: "/category/wine?type=dessert" },
      { label: "Ενισχυμένο Κρασί - Πόρτο - Sherry", href: "/category/wine?type=fortified" },
      { label: "Αφρώδη - Σαμπάνια", href: "/category/wine?type=sparkling" }
    ]
  },
  {
    id: 2,
    label: "DELICATESSEN",
    href: "/category/deli",
    submenu: []
  },
  {
    id: 3,
    label: "ΠΟΤΟ",
    href: "/category/spirits",
    submenu: [
      { label: "Ούίσκι", href: "/category/spirits?type=whisky" },
      { label: "Βότκα", href: "/category/spirits?type=vodka" },
      { label: "Ρούμι - Cachaca", href: "/category/spirits?type=rum" },
      { label: "Τεκίλα - Mezcal", href: "/category/spirits?type=tequila" },
      { label: "Τζιν", href: "/category/spirits?type=gin" },
      { label: "Κονιάκ - Μπράντυ", href: "/category/spirits?type=cognac" },
      { label: "ΜΕΤΑΞΑ", href: "/category/spirits?type=metaxa" },
      { label: "Βερμούτ - Aperitivo", href: "/category/spirits?type=vermouth" },
      { label: "Λικέρ", href: "/category/spirits?type=liqueur" },
      { label: "Bitters", href: "/category/spirits?type=bitters" },
      { label: "Για Κοκτέιλ", href: "/category/spirits?type=cocktails" }
    ]
  },
  {
    id: 4,
    label: "ΑΠΟΣΤΑΓΜΑ",
    href: "/category/distillates",
    submenu: [
      { label: "Ούζο", href: "/category/distillates?type=ouzo" },
      { label: "Τσίπουρο", href: "/category/distillates?type=tsipouro" },
      { label: "Grappa", href: "/category/distillates?type=grappa" },
      { label: "Sake", href: "/category/distillates?type=sake" },
      { label: "Άλλα Αποστάγματα", href: "/category/distillates?type=other" }
    ]
  },
  {
    id: 5,
    label: "ΣΧΕΤΙΚΑ",
    href: "/about",
    submenu: []
  }
];

export const categories = [
  {
    id: 1,
    name: "Κόκκινα Κρασιά",
    nameEn: "Red Wine",
    description: "Επιλεγμένα κόκκινα κρασιά από ελληνικούς και διεθνείς αμπελώνες",
    image: "https://images.unsplash.com/photo-1611571940159-425a28706d6f",
    productCount: "150+ ποικιλίες"
  },
  {
    id: 2,
    name: "Λευκά Κρασιά",
    nameEn: "White Wine",
    description: "Φρέσκα και αρωματικά λευκά κρασιά για κάθε περίσταση",
    image: "https://images.unsplash.com/photo-1642189941430-7073f85d7140",
    productCount: "120+ ποικιλίες"
  },
  {
    id: 3,
    name: "Σαμπάνια",
    nameEn: "Champagne",
    description: "Premium σαμπάνιες για γιορτές και ιδιαίτερες στιγμές",
    image: "https://images.pexels.com/photos/5379748/pexels-photo-5379748.jpeg",
    productCount: "45+ επιλογές"
  },
  {
    id: 4,
    name: "Ουίσκι",
    nameEn: "Whisky",
    description: "Σπάνια single malts και διακεκριμένα blends",
    image: "https://images.unsplash.com/photo-1746422029290-874f805d2348",
    productCount: "80+ επιλογές"
  },
  {
    id: 5,
    name: "Ποτά & Spirits",
    nameEn: "Spirits",
    description: "Εκλεκτά αποστάγματα για απαιτητικούς γευσιγνώστες",
    image: "https://images.unsplash.com/photo-1554230561-b04b0394d4ef",
    productCount: "100+ φιάλες"
  },
  {
    id: 6,
    name: "Ντελικατέσεν",
    nameEn: "Delicatessen",
    description: "Artisan αλλαντικά και gourmet συνοδευτικά",
    image: "https://images.unsplash.com/photo-1773754109448-13d2af138059",
    productCount: "60+ προϊόντα"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Μαρία Παπαδοπούλου",
    role: "Λάτρης του Κρασιού",
    content: "Η εκπαιδευτική προσέγγιση της Wine Academy κάνει την επιλογή κρασιού προσιτή. Η επιμελημένη συλλογή και οι σημειώσεις γευσιγνωσίας έχουν διευρύνει τον ουρανίσκο μου σημαντικά.",
    rating: 5
  },
  {
    id: 2,
    name: "Νίκος Αθανασίου",
    role: "Συλλέκτης Ουίσκι",
    content: "Εξαιρετική συλλογή σπάνιων ουίσκι. Η γνώση και το πάθος της ομάδας για τα ποτά φαίνεται σε κάθε σύσταση.",
    rating: 5
  },
  {
    id: 3,
    name: "Ελένη Γεωργίου",
    role: "Chef",
    content: "Τα προϊόντα ντελικατέσεν είναι εξαιρετικά. Αυθεντικά ιταλικά και ελληνικά προϊόντα που συνδυάζονται τέλεια με τις προτάσεις κρασιού.",
    rating: 5
  },
  {
    id: 4,
    name: "Δημήτρης Κωνσταντίνου",
    role: "Οινολόγος",
    content: "Μια από τις καλύτερες online συλλογές κρασιών στην Ελλάδα. Εξαιρετική εξυπηρέτηση και γρήγορη παράδοση.",
    rating: 5
  },
  {
    id: 5,
    name: "Σοφία Βασιλείου",
    role: "Εστιάτορας",
    content: "Χρησιμοποιούμε την Wine Academy για το εστιατόριό μας εδώ και 2 χρόνια. Αξιόπιστοι, με εξαιρετική ποιότητα προϊόντων.",
    rating: 5
  },
  {
    id: 6,
    name: "Γιάννης Μιχαηλίδης",
    role: "Λάτρης των Spirits",
    content: "Απίστευτη ποικιλία σε premium ποτά και spirits. Βρίσκω πάντα αυτό που ψάχνω, ακόμα και σπάνιες εκδόσεις.",
    rating: 5
  }
];

export const specialOffers = [
  {
    id: 1,
    title: "Καλοκαιρινή Συλλογή Κρασιών",
    description: "Δροσιστείτε με την εποχιακή μας επιλογή από δροσερά λευκά και κομψά ροζέ",
    discount: "15% έκπτωση",
    image: "https://images.unsplash.com/photo-1717460654164-4430727be1a6"
  },
  {
    id: 2,
    title: "Σετ Γευσιγνωσίας Ουίσκι",
    description: "Εξερευνήστε τον κόσμο του ουίσκι με την επιμελημένη συλλογή μας",
    discount: "Ειδική Τιμή",
    image: "https://images.pexels.com/photos/6766696/pexels-photo-6766696.jpeg"
  }
];

export const features = [
  {
    id: 1,
    title: "Δωρεάν Μεταφορικά",
    description: "Για παραγγελίες άνω των 100€",
    icon: "Truck"
  },
  {
    id: 2,
    title: "Συσκευασία Δώρου",
    description: "Κομψή συσκευασία για κάθε αφορμή",
    icon: "Gift"
  },
  {
    id: 3,
    title: "Τηλεφωνικές Παραγγελίες",
    description: "Εξυπηρέτηση 6 ημέρες την εβδομάδα",
    icon: "Phone"
  }
];

export const educationalContent = {
  title: "Ανακαλύψτε & Μάθετε",
  subtitle: "Το ταξίδι σας στον κόσμο των εκλεκτών κρασιών και ποτών",
  description: "Στη Wine Academy, πιστεύουμε ότι η κατανόηση ενισχύει την εκτίμηση. Η επιμελημένη συλλογή μας συνοδεύεται από λεπτομερείς σημειώσεις γευσιγνωσίας, προτάσεις συνδυασμού και τις ιστορίες πίσω από κάθε φιάλη.",
  image: "https://images.unsplash.com/photo-1598306442928-4d90f32c6866",
  features: [
    "Σημειώσεις γευσιγνωσίας από ειδικούς",
    "Προτάσεις συνδυασμού με φαγητό",
    "Ιστορίες περιφερειακής προέλευσης",
    "Οδηγίες θερμοκρασίας σερβιρίσματος"
  ]
};

export const blogPosts = [
  {
    id: 1,
    title: "Οδηγός Γευσιγνωσίας Κρασιού για Αρχάριους",
    excerpt: "Μάθετε τα βασικά της γευσιγνωσίας κρασιού και πώς να αναγνωρίζετε τα χαρακτηριστικά των διαφορετικών ποικιλιών.",
    image: "https://images.pexels.com/photos/4254035/pexels-photo-4254035.jpeg",
    date: "15 Δεκεμβρίου 2025",
    category: "Εκπαίδευση"
  },
  {
    id: 2,
    title: "Τα Καλύτερα Ελληνικά Αμπέλια",
    excerpt: "Εξερευνήστε τα πιο διάσημα αμπέλια της Ελλάδας και τα μοναδικά χαρακτηριστικά των ελληνικών κρασιών.",
    image: "https://images.pexels.com/photos/5732806/pexels-photo-5732806.jpeg",
    date: "10 Δεκεμβρίου 2025",
    category: "Αμπελώνες"
  },
  {
    id: 3,
    title: "Πώς να Συνδυάσετε Κρασί με Ελληνικό Φαγητό",
    excerpt: "Οι καλύτερες συμβουλές για τον ιδανικό συνδυασμό κρασιού με παραδοσιακά ελληνικά πιάτα.",
    image: "https://images.pexels.com/photos/5490193/pexels-photo-5490193.jpeg",
    date: "5 Δεκεμβρίου 2025",
    category: "Συνδυασμοί"
  }
];
