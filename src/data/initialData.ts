import { OngoingProject, ComingSoonProject, SoldOutProject } from '../types';

export const INITIAL_ONGOING_PROJECTS: OngoingProject[] = [
  {
    id: 'ongoing-1',
    name: 'City View Pasyala',
    location: 'Pasyala',
    pricePerPerch: 'Rs. 225,000',
    image: '/images/ongoing-pasyala.jpg',
    link: 'https://www.facebook.com',
    amenities: ['⚡ 3-Phase Electricity', '💧 Pipe Water', '📜 Clear Deed', '🛣️ 20ft Wide Access']
  },
  {
    id: 'ongoing-2',
    name: 'Green Garden Kiriwattuduwa',
    location: 'Kiriwattuduwa',
    pricePerPerch: 'Rs. 200,000',
    image: '/images/ongoing-green-garden.jpg',
    link: 'https://www.facebook.com',
    amenities: ['⚡ 3-Phase Electricity', '💧 Pipe Water', '📜 Clear Deed', '🌿 Serene Natural Surroundings']
  },
  {
    id: 'ongoing-3',
    name: 'Union Greens Bandaragama',
    location: 'Bandaragama',
    pricePerPerch: 'Rs. 350,000',
    image: '/images/ongoing-bandaragama.jpg',
    link: 'https://www.facebook.com',
    amenities: ['⚡ 3-Phase Electricity', '💧 Pipe Water', '📜 Clear Deed', '🛣️ 75m to Main Panadura Road']
  },
  {
    id: 'ongoing-4',
    name: 'Grand Meridian Malabe',
    location: 'Malabe',
    pricePerPerch: 'Rs. 485,000',
    image: '/images/ongoing-bandaragama.jpg',
    link: 'https://www.facebook.com',
    amenities: ['⚡ 3-Phase Electricity', '💧 Pipe Water', '📜 Clear Deed', '🎓 5 mins to SLIIT & IT Hub']
  },
  {
    id: 'ongoing-5',
    name: 'Imperial Crest Homagama',
    location: 'Homagama',
    pricePerPerch: 'Rs. 320,000',
    image: '/images/ongoing-green-garden.jpg',
    link: 'https://www.facebook.com',
    amenities: ['⚡ 3-Phase Electricity', '💧 Pipe Water', '📜 Clear Deed', '🏫 400m to Mahinda Rajapaksa College']
  },
  {
    id: 'ongoing-6',
    name: 'Royal Palms Panadura',
    location: 'Panadura',
    pricePerPerch: 'Rs. 295,000',
    image: '/images/ongoing-pasyala.jpg',
    link: 'https://www.facebook.com',
    amenities: ['⚡ 3-Phase Electricity', '💧 Pipe Water', '📜 Clear Deed', '🌊 Bolgoda Breeze & Galle Rd Access']
  }
];

export const INITIAL_COMING_SOON: ComingSoonProject[] = [
  {
    id: 'soon-1',
    location: 'Polgasowita',
    note: 'Sample residential enclave with 10–15 perch plots launching soon. Stay tuned!'
  },
  {
    id: 'soon-2',
    location: 'Godagama',
    note: 'Prime land facing scenic paddy fields, 200m to Highlevel Road. Launching soon!'
  },
  {
    id: 'soon-3',
    location: 'Padukka',
    note: 'Exclusive gated residential community close to railway and central expressway.'
  },
  {
    id: 'soon-4',
    location: 'Gampaha',
    note: 'Premium suburban plots with rapid access to Colombo-Kandy highway.'
  }
];

export const INITIAL_SOLD_OUT: SoldOutProject[] = [
  {
    id: 'sold-union25-homagama',
    name: 'Union 25 Phase 2 Homagama',
    location: 'Homagama',
    highlights: 'Walking distance to Highlevel Road',
    image: '/images/banner-union25-homagama.svg'
  },
  {
    id: 'sold-highlevel-meegoda',
    name: 'Highlevel Terrace Meegoda',
    location: 'Meegoda',
    highlights: 'Facing scenic paddy fields • Walking distance to Economic Center',
    image: '/images/banner-highlevel-meegoda.svg'
  },
  {
    id: 'sold-union-crescent-homagama',
    name: 'Union Crescent Homagama',
    location: 'Homagama, Diyagama',
    highlights: 'At Diyagama Junction • Close to Tech City',
    image: '/images/banner-union-crescent-homagama.svg'
  },
  {
    id: 'sold-union7s-homagama',
    name: 'Union 7s Homagama',
    location: 'Homagama',
    highlights: 'Facing Athurugiriya Road • Facing scenic paddy field',
    image: '/images/banner-union7s-homagama.svg'
  },
  {
    id: 'sold-urban-green-homagama',
    name: 'Urban Green Homagama',
    location: 'Homagama, Pitipana',
    highlights: 'Near Mahinda Rajapaksa College & NSBM Green University',
    image: '/images/banner-urban-green-homagama.svg'
  },
  {
    id: 'sold-union-metro-kahatuduwa',
    name: 'Union Metro Kahatuduwa',
    location: 'Kahatuduwa',
    highlights: '120 Bus Route • Highway Interchange & Tech City',
    image: '/images/banner-union-metro-kahatuduwa.svg'
  },
  {
    id: 'sold-city-glade-kalutara',
    name: 'City Glade Kalutara',
    location: 'Kalutara',
    highlights: 'Nagas Junction • Walking distance to Galle Road',
    image: '/images/banner-city-glade-kalutara.svg'
  },
  {
    id: 'sold-infinity-athurugiriya',
    name: 'Infinity Athurugiriya',
    location: 'Athurugiriya',
    highlights: 'Facing paddy field • Rapid Southern Highway access',
    image: '/images/banner-infinity-athurugiriya.svg'
  },
  {
    id: 'sold-union-life-watareka',
    name: 'Union Life Watareka',
    location: 'Homagama, Watareka',
    highlights: 'Near Watareka Junior School • Walking distance to Highlevel Rd',
    image: '/images/banner-union-life-watareka.svg'
  },
  {
    id: 'sold-river-edge-panadura',
    name: 'River Edge Panadura',
    location: 'Panadura',
    highlights: 'Facing Bolgoda River • 100m to Galle Rd with Swimming Pool',
    image: '/images/banner-river-edge-panadura.svg'
  },
  {
    id: 'sold-union-one-kottawa',
    name: 'Union One Kottawa',
    location: 'Kottawa',
    highlights: 'Near Highway entrance • Walking distance to Highlevel Road',
    image: '/images/banner-union-one-kottawa.svg'
  },
  {
    id: 'sold-the-livings-kottawa',
    name: 'The Livings Kottawa Town',
    location: 'Kottawa',
    highlights: 'Heart of Kottawa Town • Exclusive residential blocks with all facilities',
    image: '/images/banner-the-livings-kottawa.svg'
  },
  {
    id: 'sold-tech-city-homagama',
    name: 'Tech City Homagama',
    location: 'Homagama, Diyagama',
    highlights: 'Near Diyagama Technology University & Research Park',
    image: '/images/banner-tech-city-homagama.svg'
  },
  {
    id: 'sold-centrum-place-makumbura',
    name: 'Centrum Place Makumbura',
    location: 'Kottawa, Makumbura',
    highlights: '50m to Highlevel Rd • Walking distance to Multimodal Hub',
    image: '/images/banner-centrum-place-makumbura.svg'
  },
  {
    id: 'sold-queens-place-siddamulla',
    name: 'Queens Place Siddamulla',
    location: 'Kottawa, Siddamulla',
    highlights: 'Near 255 bus route • Quiet residential luxury',
    image: '/images/banner-queens-place-siddamulla.svg'
  },
  {
    id: 'sold-green-space-kahatuduwa',
    name: 'Green Space Kahatuduwa',
    location: 'Piliyandala, Kahatuduwa',
    highlights: '800m to 120 bus route • 10 mins to Colombo via expressway',
    image: '/images/banner-green-space-kahatuduwa.svg'
  },
  {
    id: 'sold-school-terrace-godagama',
    name: 'School Terrace Godagama',
    location: 'Homagama, Godagama',
    highlights: 'Near Subharathi College • 200m to Highlevel Road',
    image: '/images/banner-school-terrace-godagama.svg'
  },
  {
    id: 'sold-union-meadows-polgasowita',
    name: 'Union Meadows Polgasowita',
    location: 'Piliyandala, Polgasowita',
    highlights: 'Walking distance to 120 route • 800m to Highway Interchange',
    image: '/images/banner-union-meadows-polgasowita.svg'
  },
  {
    id: 'sold-union-community-bandaragama',
    name: 'Union Home Community Bandaragama',
    location: 'Bandaragama',
    highlights: '75m to Panadura Road • Close to leading schools in town',
    image: '/images/banner-union-community-bandaragama.svg'
  },
  {
    id: 'sold-union-gardens-gonapala',
    name: 'Union Gardens Gonapala',
    location: 'Piliyandala, Gonapala',
    highlights: 'Walking distance to 120 route • Near Kahatuduwa Interchange',
    image: '/images/banner-union-gardens-gonapala.svg'
  },
  {
    id: 'sold-union-scenery-athurugiriya',
    name: 'Union Scenery Athurugiriya',
    location: 'Athurugiriya',
    highlights: '800m to Millennium City scheme • Near Field View Hotel',
    image: '/images/banner-union-scenery-athurugiriya.svg'
  },
  {
    id: 'sold-union-gate-kottawa',
    name: 'Union Gate Kottawa',
    location: 'Kottawa, Hiripitiya',
    highlights: '1km to Highlevel Rd • 1km to Highway entrance • 1.5km to town',
    image: '/images/banner-union-gate-kottawa.svg'
  }
];

export const INITIAL_CONTACT_MESSAGES = [
  {
    id: 'msg-1',
    name: 'Sunil Weerasinghe',
    email: 'sunil.w@gmail.com',
    phone: '+94 77 345 6789',
    message: 'Interested in reserving a 10 perch plot at Union Greens Bandaragama. Please send payment options and survey plan.',
    date: '2026-03-10 14:32',
    status: 'unread' as const
  },
  {
    id: 'msg-2',
    name: 'Dr. Niluka Jayawardena',
    email: 'dr.niluka@yahoo.com',
    phone: '+94 71 882 1204',
    message: 'Looking for a residential plot near NSBM Green University or Pitipana. Are there any upcoming phases?',
    date: '2026-03-08 09:15',
    status: 'read' as const
  }
];

export const INITIAL_APPLICATIONS = [
  {
    id: 'app-1',
    position: 'Site Officer',
    name: 'Kasun Fernando',
    email: 'kasun.f@outlook.com',
    phone: '+94 76 991 2234',
    resumeFileName: 'Kasun_Fernando_CV_Site_Supervisor.pdf',
    message: 'I have 3 years of site inspection and land boundary survey experience in Homagama area.',
    date: '2026-03-11 11:20',
    status: 'new' as const
  }
];
