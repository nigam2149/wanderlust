const sampleListings = [
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Escape to this charming beachfront cottage for a relaxing getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1500,
    "location": "Malibu",
    "country": "United States",
    "category": "trending"
  },
  {
    "title": "Modern Loft in Downtown",
    "description": "Stay in the heart of the city in this stylish loft apartment.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1200,
    "location": "New York City",
    "country": "United States",
    "category": "rooms"
  },
  {
    "title": "Mountain Retreat",
    "description": "Unplug and unwind in this peaceful mountain cabin.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1000,
    "location": "Aspen",
    "country": "United States",
    "category": "mountains"
  },
  {
    "title": "Historic Villa in Tuscany",
    "description": "Experience the charm of Tuscany in this restored villa.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2500,
    "location": "Florence",
    "country": "Italy",
    "category": "iconic-cities"
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "Live among the treetops in this unique treehouse retreat.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60"
    },
    "price": 800,
    "location": "Portland",
    "country": "United States",
    "category": "camping"
  },
  {
    "title": "Beachfront Paradise",
    "description": "Step out onto the sandy beach from this condo.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2000,
    "location": "Cancun",
    "country": "Mexico",
    "category": "pools"
  },
  {
    "title": "Rustic Cabin by the Lake",
    "description": "Spend your days fishing and kayaking on the serene lake.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    "price": 900,
    "location": "Lake Tahoe",
    "country": "United States",
    "category": "mountains"
  },
  {
    "title": "Luxury Penthouse with City Views",
    "description": "Indulge in luxury living with panoramic city views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3500,
    "location": "Los Angeles",
    "country": "United States",
    "category": "iconic-cities"
  },
  {
    "title": "Ski-In/Ski-Out Chalet",
    "description": "Hit the slopes right from your doorstep in the Swiss Alps.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3000,
    "location": "Verbier",
    "country": "Switzerland",
    "category": "mountains"
  },
  {
    "title": "Safari Lodge in the Serengeti",
    "description": "Experience the thrill of the wild in a safari lodge.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4000,
    "location": "Serengeti",
    "country": "Tanzania",
    "category": "camping"
  },
  {
    "title": "Historic Canal House",
    "description": "Stay in a beautifully preserved canal house.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1800,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "iconic-cities"
  },
  {
    "title": "Private Island Retreat",
    "description": "Have an entire island to yourself.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60"
    },
    "price": 10000,
    "location": "Fiji",
    "country": "Fiji",
    "category": "trending"
  },
  {
    "title": "Charming Cottage in the Cotswolds",
    "description": "Escape to a quaint cottage with a thatched roof.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1200,
    "location": "Cotswolds",
    "country": "United Kingdom",
    "category": "rooms"
  },
  {
    "title": "Historic Brownstone in Boston",
    "description": "Step back in time in this elegant brownstone.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2200,
    "location": "Boston",
    "country": "United States",
    "category": "iconic-cities"
  },
  {
    "title": "Beachfront Bungalow in Bali",
    "description": "Relax on the sandy shores with a private pool.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1800,
    "location": "Bali",
    "country": "Indonesia",
    "category": "pools"
  },
  {
    "title": "Mountain View Cabin in Banff",
    "description": "Enjoy breathtaking mountain views in the Rockies.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1500,
    "location": "Banff",
    "country": "Canada",
    "category": "mountains"
  },
  {
    "title": "Art Deco Apartment in Miami",
    "description": "Step into the glamour of the 1920s in South Beach.",
    "image": {
      "filename": "listingimage",
      "url": "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1600,
    "location": "Miami",
    "country": "United States",
    "category": "rooms"
  },
  {
    "title": "Tropical Villa in Phuket",
    "description": "Escape to a tropical paradise with an infinity pool.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3000,
    "location": "Phuket",
    "country": "Thailand",
    "category": "pools"
  },
  {
    "title": "Historic Castle in Scotland",
    "description": "Live like royalty in the Scottish Highlands.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4000,
    "location": "Scottish Highlands",
    "country": "United Kingdom",
    "category": "castles"
  },
  {
    "title": "Desert Oasis in Dubai",
    "description": "Experience luxury in the middle of the desert.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 5000,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "category": "trending"
  },
  {
    "title": "Rustic Log Cabin in Montana",
    "description": "Unplug in this cozy log cabin.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1100,
    "location": "Montana",
    "country": "United States",
    "category": "camping"
  },
  {
    "title": "Beachfront Villa in Greece",
    "description": "Enjoy the crystal-clear waters of the Mediterranean.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2500,
    "location": "Mykonos",
    "country": "Greece",
    "category": "pools"
  },
  {
    "title": "Eco-Friendly Treehouse Retreat",
    "description": "Stay in an eco-friendly treehouse in the forest.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60"
    },
    "price": 750,
    "location": "Costa Rica",
    "country": "Costa Rica",
    "category": "camping"
  },
  {
    "title": "Historic Cottage in Charleston",
    "description": "Experience the charm of historic Charleston.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1600,
    "location": "Charleston",
    "country": "United States",
    "category": "rooms"
  },
  {
    "title": "Modern Apartment in Tokyo",
    "description": "Explore vibrant Tokyo from a centrally located apartment.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2000,
    "location": "Tokyo",
    "country": "Japan",
    "category": "iconic-cities"
  },
  {
    "title": "Lakefront Cabin in New Hampshire",
    "description": "Spend your days by the lake in the White Mountains.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1200,
    "location": "New Hampshire",
    "country": "United States",
    "category": "camping"
  },
  {
    "title": "Luxury Villa in the Maldives",
    "description": "Indulge in luxury in an overwater villa.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60"
    },
    "price": 6000,
    "location": "Maldives",
    "country": "Maldives",
    "category": "pools"
  },
  {
    "title": "Ski Chalet in Aspen",
    "description": "Hit the slopes in style at the famous Aspen resort.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4000,
    "location": "Aspen",
    "country": "United States",
    "category": "mountains"
  },
  {
    "title": "Secluded Beach House in Costa Rica",
    "description": "Escape to a secluded beach house on the Pacific coast.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1800,
    "location": "Costa Rica",
    "country": "Costa Rica",
    "category": "trending"
  },
  {
    "title": "Snowy Igloo Retreat",
    "description": "Sleep under the stars in a cozy heated igloo.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3200,
    "location": "Kakslauttanen",
    "country": "Finland",
    "category": "domes"
  },
  {
    "title": "Luxury Houseboat on the Backwaters",
    "description": "Drift through calm backwaters in a houseboat.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2200,
    "location": "Alleppey, Kerala",
    "country": "India",
    "category": "boats"
  },
  {
    "title": "Sailing Yacht Getaway",
    "description": "Wake up to ocean breeze aboard a sailing yacht.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=60"
    },
    "price": 5200,
    "location": "Split",
    "country": "Croatia",
    "category": "boats"
  },
  {
    "title": "Countryside Farmhouse Stay",
    "description": "Experience rural life with fresh produce and open fields.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1400,
    "location": "Nashik",
    "country": "India",
    "category": "farms"
  },
  {
    "title": "Vineyard Farm Cottage",
    "description": "Stay amid rolling vineyards with fresh wine tastings.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2600,
    "location": "Napa Valley",
    "country": "United States",
    "category": "farms"
  },
  {
    "title": "Alpine Mountain Cabin",
    "description": "A rustic wooden cabin tucked away in the Alps.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3100,
    "location": "Zermatt",
    "country": "Switzerland",
    "category": "mountains"
  },
  {
    "title": "Himalayan View Retreat",
    "description": "Wake up to views of snow-capped Himalayan peaks.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1900,
    "location": "Manali",
    "country": "India",
    "category": "mountains"
  },
  {
    "title": "Medieval Stone Castle",
    "description": "Stay in a real medieval castle with turrets and moats.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4500,
    "location": "Loire Valley",
    "country": "France",
    "category": "castles"
  },
  {
    "title": "Rooftop Pool Penthouse",
    "description": "Enjoy skyline views from a private rooftop pool.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3700,
    "location": "Singapore",
    "country": "Singapore",
    "category": "pools"
  },
  {
    "title": "Desert Glamping Tent",
    "description": "Luxury camping under the desert sky.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1600,
    "location": "Sahara Desert",
    "country": "Morocco",
    "category": "camping"
  },
  {
    "title": "Downtown Boutique Room",
    "description": "A stylish compact room in the heart of the city.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1100,
    "location": "Delhi",
    "country": "India",
    "category": "rooms"
  },
  {
    "title": "Cozy Attic Room",
    "description": "A charming attic room with skylight views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=800&q=60"
    },
    "price": 950,
    "location": "Prague",
    "country": "Czech Republic",
    "category": "rooms"
  },
  {
    "title": "Historic City Loft",
    "description": "Live among centuries-old architecture in a restored loft.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2900,
    "location": "Rome",
    "country": "Italy",
    "category": "iconic-cities"
  },
  {
    "title": "Trending Beach Bungalow",
    "description": "One of the most booked stays this season.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2100,
    "location": "Goa",
    "country": "India",
    "category": "trending"
  },
  {
    "title": "Trending City View Studio",
    "description": "A minimal, highly rated studio loved by digital nomads.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1500,
    "location": "Lisbon",
    "country": "Portugal",
    "category": "trending"
  },
  {
    "title": "Overwater Bungalow",
    "description": "Step straight into turquoise waters from your deck.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=60"
    },
    "price": 7200,
    "location": "Bora Bora",
    "country": "French Polynesia",
    "category": "pools"
  },
  {
    "title": "Riverboat Cabin Cruiser",
    "description": "Cruise gently along quiet canals in a riverboat.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1900,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "boats"
  },
  {
    "title": "Organic Olive Farm Stay",
    "description": "Wake up among centuries-old olive groves.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1700,
    "location": "Andalusia",
    "country": "Spain",
    "category": "farms"
  },
  {
    "title": "Coastal Cliffside Cottage",
    "description": "Perched on dramatic cliffs with ocean views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3400,
    "location": "Amalfi Coast",
    "country": "Italy",
    "category": "trending"
  },
  {
    "title": "Royal Palace Suite",
    "description": "Stay within the walls of a converted royal palace.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=60"
    },
    "price": 5500,
    "location": "Jaipur",
    "country": "India",
    "category": "castles"
  },
  {
    "title": "Glacier View Igloo",
    "description": "A transparent-roofed igloo with glacier and star views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4100,
    "location": "Reykjavik",
    "country": "Iceland",
    "category": "arctic"
  },
  {
    "title": "Minimalist Studio Room",
    "description": "A clean, minimalist studio for a short business trip.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1050,
    "location": "Berlin",
    "country": "Germany",
    "category": "rooms"
  },
  {
    "title": "Historic Landmark Suite",
    "description": "Stay inside a UNESCO-listed heritage building.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2700,
    "location": "Kyoto",
    "country": "Japan",
    "category": "iconic-cities"
  },
  {
    "title": "Redwood Forest Camp",
    "description": "Camp beneath towering ancient redwoods.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=60"
    },
    "price": 850,
    "location": "California",
    "country": "United States",
    "category": "camping"
  },
  {
    "title": "Canal House Houseboat",
    "description": "A charming houseboat along historic canals.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2300,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "boats"
  },
  {
    "title": "Ranch Style Farmstead",
    "description": "A working horse ranch with guided trail rides.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1950,
    "location": "Texas Hill Country",
    "country": "United States",
    "category": "farms"
  },
  {
    "title": "Fortress Castle Keep",
    "description": "An imposing stone fortress with battlements.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4800,
    "location": "Edinburgh",
    "country": "United Kingdom",
    "category": "castles"
  },
  {
    "title": "Hilltop Watchtower Room",
    "description": "A converted stone watchtower with valley views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2100,
    "location": "Tuscany",
    "country": "Italy",
    "category": "iconic-cities"
  },
  {
    "title": "Floating Lake House",
    "description": "A fully floating house anchored on an alpine lake.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3600,
    "location": "Lake Bled",
    "country": "Slovenia",
    "category": "boats"
  },
  {
    "title": "Sunflower Field Farmhouse",
    "description": "A restored farmhouse surrounded by sunflower fields.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1650,
    "location": "Provence",
    "country": "France",
    "category": "farms"
  },
  {
    "title": "Highland Sheep Farm Stay",
    "description": "Stay on a working sheep farm in the highlands.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1350,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "farms"
  },
  {
    "title": "Backcountry Basecamp Tent",
    "description": "A remote basecamp-style tent for serious trekkers.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1200,
    "location": "Patagonia",
    "country": "Chile",
    "category": "camping"
  },
  {
    "title": "Polar Explorer Cabin",
    "description": "An insulated cabin used by polar researchers.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=60"
    },
    "price": 5300,
    "location": "Svalbard",
    "country": "Norway",
    "category": "arctic"
  },
  {
    "title": "Compact City Pod Room",
    "description": "A smartly designed compact room for short city stays.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 900,
    "location": "Seoul",
    "country": "South Korea",
    "category": "rooms"
  },
  {
    "title": "Ancient Ruins Guesthouse",
    "description": "A guesthouse built beside centuries-old ruins.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2450,
    "location": "Athens",
    "country": "Greece",
    "category": "iconic-cities"
  },
  {
    "title": "Clifftop Watchpost Castle",
    "description": "A former military watchpost turned castle stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4700,
    "location": "Dover",
    "country": "United Kingdom",
    "category": "castles"
  },
  {
    "title": "Riverside Houseboat Retreat",
    "description": "A peaceful houseboat gently rocking on the river.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2050,
    "location": "Srinagar",
    "country": "India",
    "category": "boats"
  },
  {
    "title": "Mountain Base Farm Lodge",
    "description": "A working lodge at the base of snow-capped peaks.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1750,
    "location": "Interlaken",
    "country": "Switzerland",
    "category": "mountains"
  },
  {
    "title": "Northern Lights Cabin",
    "description": "Catch the aurora borealis from a glass-roofed cabin.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3800,
    "location": "Tromso",
    "country": "Norway",
    "category": "arctic"
  },
  {
    "title": "Riverside Glass Cabin",
    "description": "Watch the river flow by from this all-glass cabin.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2800,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "mountains"
  },
  {
    "title": "Volcano View Dome",
    "description": "A geodesic dome positioned for direct volcano views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2750,
    "location": "Yogyakarta",
    "country": "Indonesia",
    "category": "domes"
  }
];

module.exports = { data: sampleListings };