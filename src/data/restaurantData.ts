export interface FeastMenuItem {
  id: number;
  name: string;
  course: 'Accompaniments & Coolers' | 'Starters & Breads' | 'Rice & Curries' | 'Sweets & Finale';
  note: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  imageSrc: string;
  alt: string;
}

export interface OfferConfig {
  title: string;
  price: string;
  date: string;
  time: string;
  note: string;
}

export interface LocationConfig {
  restaurantName: string;
  address: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappDigits: string;
  mapQuery: string;
  customMapsUrl: string;
}

export const RESTAURANT_IMAGES = {
  heroFeast: '/src/assets/images/hero_banana_leaf_feast_1795497783325.jpg',
  aboutThali: '/src/assets/images/about_south_indian_thali_1795497784806.jpg',
  signatureFeast: '/src/assets/images/signature_feast_spread_1795497784504.jpg',
  riceAndCurries: '/src/assets/images/gallery_rice_and_curries_1795497784880.jpg',
  pooriChapathi: '/src/assets/images/gallery_poori_chapathi_1795497785090.jpg',
  payasaSweets: '/src/assets/images/gallery_payasa_sweets_1795497785382.jpg',
} as const;

export const DEFAULT_OFFER: OfferConfig = {
  title: 'BANANA LEAF MEAL',
  price: 'Only 1.5 OMR',
  date: 'Friday, 30 October 2026',
  time: '12:00 PM – 3:30 PM',
  note: 'Traditional 20-item South Indian vegetarian feast served fresh on a banana leaf.',
};

export const DEFAULT_LOCATION: LocationConfig = {
  restaurantName: 'Udupi Grand Al-Khuwair',
  address: 'Near Zawai Masjid, Al Khuwair, Oman',
  phoneDisplay: '+968 76321883',
  phoneHref: 'tel:+96876321883',
  whatsappDigits: '96876321883',
  mapQuery: 'Zawai Masjid, Al Khuwair, Muscat, Oman',
  customMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Zawai+Masjid+Al+Khuwair+Oman',
};

export const BANANA_LEAF_MENU_ITEMS: FeastMenuItem[] = [
  { id: 1, name: 'Banana Leaf', course: 'Accompaniments & Coolers', note: 'Freshly rinsed tender green leaf canvas' },
  { id: 2, name: 'Butter Milk', course: 'Accompaniments & Coolers', note: 'Chilled spiced chaas with curry leaf' },
  { id: 3, name: 'Salt', course: 'Accompaniments & Coolers', note: 'Traditional first seasoning touch' },
  { id: 4, name: 'Pickle', course: 'Accompaniments & Coolers', note: 'Tangy house-aged South Indian pickle' },
  { id: 5, name: 'Chutney', course: 'Accompaniments & Coolers', note: 'Stone-ground coconut with mustard tempering' },
  { id: 6, name: 'Kosambari', course: 'Accompaniments & Coolers', note: 'Split moong lentil and cucumber salad' },
  { id: 7, name: 'Aloo Bonda', course: 'Starters & Breads', note: 'Crisp gram-flour battered spiced potato' },
  { id: 8, name: 'Idly Manchurian', course: 'Starters & Breads', note: 'Tossed crispy idly bites with aromatics' },
  { id: 9, name: 'Yogurt', course: 'Accompaniments & Coolers', note: 'Cool creamy curd to balance warm spices' },
  { id: 10, name: 'Papad', course: 'Starters & Breads', note: 'Light, golden crisp lentil wafer' },
  { id: 11, name: 'Paliya', course: 'Rice & Curries', note: 'Tempered seasonal stir-fried vegetables' },
  { id: 12, name: 'Lemon Rice', course: 'Rice & Curries', note: 'Fragrant turmeric rice with roasted peanuts' },
  { id: 13, name: 'Mix Vegetable Curry', course: 'Rice & Curries', note: 'Simmered garden vegetables in rich gravy' },
  { id: 14, name: 'Kootu Curry', course: 'Rice & Curries', note: 'Hearty lentils and vegetables with coconut' },
  { id: 15, name: 'Poori / Chapathi', course: 'Starters & Breads', note: 'Golden puffed poori or soft wheat chapathi' },
  { id: 16, name: 'White Rice', course: 'Rice & Curries', note: 'Steamed aromatic long-grain center serving' },
  { id: 17, name: 'Rasam', course: 'Rice & Curries', note: 'Pepper-tamarind broth infused with garlic' },
  { id: 18, name: 'Sambar', course: 'Rice & Curries', note: 'Slow-simmered lentil stew with drumsticks' },
  { id: 19, name: 'Payasa', course: 'Sweets & Finale', note: 'Warm cardamom milk dessert with cashews' },
  { id: 20, name: 'Sweet', course: 'Sweets & Finale', note: 'Traditional South Indian festive sweet' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'banana-leaf-feast',
    title: 'Traditional Banana Leaf Meal',
    category: 'Signature Dining',
    caption: 'Complete South Indian feast served on fresh green banana leaves with brass accompaniments.',
    imageSrc: RESTAURANT_IMAGES.heroFeast,
    alt: 'Traditional South Indian banana leaf meal with steamed white rice, sambar, chutneys, papad, and poori',
  },
  {
    id: 'vegetarian-thali',
    title: 'South Indian Vegetarian Thali',
    category: 'Heritage Platter',
    caption: 'Wholesome vegetarian curries, coconut chutney, crisp aloo bonda, and chilled buttermilk.',
    imageSrc: RESTAURANT_IMAGES.aboutThali,
    alt: 'South Indian vegetarian thali in traditional brass bowls with coconut chutney and aloo bonda',
  },
  {
    id: 'twenty-dish-spread',
    title: 'The Twenty-Item Leaf Spread',
    category: 'Festive Feast',
    caption: 'Every dish positioned in traditional serving order from salt and kosambari to payasa.',
    imageSrc: RESTAURANT_IMAGES.signatureFeast,
    alt: 'Overhead view of twenty-item Udupi banana leaf feast including lemon rice, idly manchurian, and rasam',
  },
  {
    id: 'rice-and-curries',
    title: 'Fresh Rice Dishes & Curries',
    category: 'Rice & Gravies',
    caption: 'Tempered lemon rice paired with steaming vegetable sambar and coconut-rich kootu curry.',
    imageSrc: RESTAURANT_IMAGES.riceAndCurries,
    alt: 'Tempered South Indian lemon rice with curry leaves beside brass bowls of sambar and kootu curry',
  },
  {
    id: 'poori-and-chapathi',
    title: 'Golden Poori & Soft Chapathi',
    category: 'Fresh Breads',
    caption: 'Puffed golden pooris and warm whole-wheat chapathi served with spiced vegetable curries.',
    imageSrc: RESTAURANT_IMAGES.pooriChapathi,
    alt: 'Golden puffed Indian poori and soft chapathi served with mixed vegetable curry and coconut chutney',
  },
  {
    id: 'payasa-and-sweets',
    title: 'Traditional Payasa & Sweets',
    category: 'Indian Desserts',
    caption: 'Cardamom-scented payasa garnished with roasted cashews alongside handcrafted sweets.',
    imageSrc: RESTAURANT_IMAGES.payasaSweets,
    alt: 'Traditional South Indian golden payasam in hammered brass bowl with roasted cashews and Indian sweets',
  },
];

export const WHY_CHOOSE_FEATURES = [
  {
    id: 'authentic-flavors',
    title: 'Authentic South Indian Flavors',
    description:
      'Prepared daily with freshly roasted spices, curry leaves, and traditional Udupi recipes that honor regional heritage.',
    icon: 'flame' as const,
  },
  {
    id: 'banana-leaf',
    title: 'Traditional Banana Leaf Dining',
    description:
      'Hot rice and fragrant curries served directly on fresh green banana leaves, elevating both aroma and dining ritual.',
    icon: 'leaf' as const,
  },
  {
    id: 'vegetarian',
    title: 'Delicious Vegetarian Specialties',
    description:
      'A wholesome celebration of vegetarian cuisine crafted from fresh vegetables, lentils, coconut, and house-made chutneys.',
    icon: 'utensils' as const,
  },
  {
    id: 'affordable',
    title: 'Affordable Dining Experience',
    description:
      'Generous hospitality and complete traditional meals at welcoming everyday value in the heart of Al Khuwair.',
    icon: 'sparkles' as const,
  },
];
