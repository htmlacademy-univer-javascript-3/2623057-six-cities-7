export type Offer = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  city: {
    name: string;
    location: { latitude: number; longitude: number; zoom: number };
  };
  location: { latitude: number; longitude: number; zoom: number };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: { name: string; avatarUrl: string; isPro: boolean };
  images: string[];
  maxAdults: number;
};

const offers: Offer[] = [
  {
    id: 'amsterdam-001',
    title: 'Bright apartment with a canal view',
    type: 'apartment',
    price: 120,
    city: { name: 'Amsterdam', location: { latitude: 52.374, longitude: 4.8897, zoom: 12 } },
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    description: 'A bright, comfortable apartment close to the canals and the old town.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Washing machine', 'Heating', 'Coffee machine'],
    host: { name: 'Angelina', avatarUrl: 'img/avatar-angelina.jpg', isPro: true },
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    maxAdults: 4,
  },
  {
    id: 'amsterdam-002',
    title: 'Quiet room in a historic house',
    type: 'room',
    price: 80,
    city: { name: 'Amsterdam', location: { latitude: 52.374, longitude: 4.8897, zoom: 12 } },
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    description: 'A cozy private room in a historic house, with cafes and museums nearby.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating', 'Towels'],
    host: { name: 'Max', avatarUrl: 'img/avatar-max.jpg', isPro: false },
    images: ['img/room.jpg', 'img/room-small.jpg', 'img/studio-01.jpg'],
    maxAdults: 2,
  },
  {
    id: 'amsterdam-003',
    title: 'Modern studio near the city center',
    type: 'apartment',
    price: 95,
    city: { name: 'Amsterdam', location: { latitude: 52.374, longitude: 4.8897, zoom: 12 } },
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    description: 'A well-equipped studio with a simple interior and easy access to the center.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Kitchen', 'Fridge', 'Dishwasher'],
    host: { name: 'Oliver', avatarUrl: 'img/avatar.svg', isPro: true },
    images: ['img/studio-01.jpg', 'img/apartment-02.jpg', 'img/room.jpg'],
    maxAdults: 2,
  },
  {
    id: 'amsterdam-004',
    title: 'Spacious family apartment',
    type: 'house',
    price: 180,
    city: { name: 'Amsterdam', location: { latitude: 52.374, longitude: 4.8897, zoom: 12 } },
    location: { latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    description: 'A spacious home with a fully equipped kitchen, ideal for a family stay.',
    bedrooms: 3,
    goods: ['Wi-Fi', 'Kitchen', 'Washing machine', 'Dishwasher', 'Baby seat', 'Fridge'],
    host: { name: 'Angelina', avatarUrl: 'img/avatar-angelina.jpg', isPro: true },
    images: ['img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    maxAdults: 6,
  },
];

export default offers;
