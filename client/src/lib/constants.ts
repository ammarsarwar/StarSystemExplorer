// Planet Data
export const planets = [
  {
    id: "mercury",
    name: "Mercury",
    orderNumber: 1,
    color: "#9DA8AD",
    orbitRadius: 130,
    size: 6,
    rotationSpeed: 4,
    orbitRotation: 0,
    description: "The smallest and innermost planet in the Solar System.",
    diameter: "4,879 km", 
    dayLength: "58.6 days",
    orbitalPeriod: "88 days",
    moons: "0",
    imagePath: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "venus",
    name: "Venus",
    orderNumber: 2,
    color: "#E7CDBA",
    orbitRadius: 160,
    size: 8,
    rotationSpeed: 10,
    orbitRotation: 30,
    description: "The second planet from the Sun, known as Earth's 'sister planet'.",
    diameter: "12,104 km", 
    dayLength: "243 days",
    orbitalPeriod: "225 days",
    moons: "0",
    imagePath: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "earth",
    name: "Earth",
    orderNumber: 3,
    color: "#4993DD",
    orbitRadius: 190,
    size: 10,
    rotationSpeed: 16,
    orbitRotation: 120,
    description: "Our home planet, the only known planet to harbor life.",
    diameter: "12,742 km", 
    dayLength: "24 hours",
    orbitalPeriod: "365.25 days",
    moons: "1",
    imagePath: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mars",
    name: "Mars",
    orderNumber: 4,
    color: "#E27B58",
    orbitRadius: 220,
    size: 9,
    rotationSpeed: 30,
    orbitRotation: 210,
    description: "The Red Planet, named after the Roman god of war.",
    diameter: "6,779 km", 
    dayLength: "24.6 hours",
    orbitalPeriod: "687 days",
    moons: "2",
    imagePath: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "jupiter",
    name: "Jupiter",
    orderNumber: 5,
    color: "#D8CA9D",
    orbitRadius: 280,
    size: 20,
    rotationSpeed: 50,
    orbitRotation: 290,
    description: "The largest planet in our Solar System, a gas giant with a distinctive Great Red Spot.",
    diameter: "139,820 km", 
    dayLength: "9.93 hours",
    orbitalPeriod: "11.86 years",
    moons: "79",
    imagePath: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "saturn",
    name: "Saturn",
    orderNumber: 6,
    color: "#E3E0C0",
    orbitRadius: 340,
    size: 18,
    rotationSpeed: 70,
    orbitRotation: 30,
    description: "Known for its spectacular ring system, the sixth planet from the Sun.",
    diameter: "116,460 km", 
    dayLength: "10.7 hours",
    orbitalPeriod: "29.45 years",
    moons: "82",
    imagePath: "https://images.unsplash.com/photo-1614314107768-6018061e5ce1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "uranus",
    name: "Uranus",
    orderNumber: 7,
    color: "#D1E7E7",
    orbitRadius: 390,
    size: 14,
    rotationSpeed: 84,
    orbitRotation: 100,
    description: "An ice giant, the seventh planet from the Sun with a unique sideways rotation.",
    diameter: "50,724 km", 
    dayLength: "17.24 hours",
    orbitalPeriod: "84 years",
    moons: "27",
    imagePath: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "neptune",
    name: "Neptune",
    orderNumber: 8,
    color: "#5B84CC",
    orbitRadius: 430,
    size: 14,
    rotationSpeed: 100,
    orbitRotation: 200,
    description: "The farthest known planet from the Sun, a dynamic world with supersonic winds.",
    diameter: "49,244 km", 
    dayLength: "16.1 hours",
    orbitalPeriod: "164.8 years",
    moons: "14",
    imagePath: "https://images.unsplash.com/photo-1614728423169-1d96c7c3ea8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

// Mars Specific Data
export const marsData = [
  {
    name: "Days Since J2000",
    value: "8,397.26529",
    color: "text-white"
  },
  {
    name: "Solar Date",
    value: "52,964.2036",
    color: "text-space-purple"
  },
  {
    name: "Coordinated Time",
    value: "05:04:23",
    color: "text-space-blue"
  },
  {
    name: "Mission Solar",
    value: "3695.00",
    color: "text-space-orange"
  }
];

export const marsConditions = [
  {
    name: "PM",
    value: "4.2",
    icon: "fas fa-wind",
    color: "text-space-purple",
    bgColor: "bg-space-purple/20"
  },
  {
    name: "SOL",
    value: "11.3",
    icon: "fas fa-sun",
    color: "text-space-orange",
    bgColor: "bg-space-orange/20"
  },
  {
    name: "PRS",
    value: "-28",
    icon: "fas fa-temperature-low",
    color: "text-space-blue",
    bgColor: "bg-space-blue/20"
  }
];

// Zodiac Constellations
export const zodiacSigns = [
  {
    id: "aries",
    name: "Aries",
    icon: "fas fa-asterisk",
    dateRange: "March 21 - April 19",
    rightAscension: "1h 40m to 3h 22m",
    declination: "+9° 55' to +30° 40'",
    area: "441 sq. degrees",
    brightestStar: "Hamal (α Ari)",
    description: "Aries is one of the constellations of the zodiac, located in the Northern celestial hemisphere between Pisces to the west and Taurus to the east.",
    borders: ["Taurus", "Perseus", "Triangle", "Pisces"],
    stars: [
      { name: "Hamal", x: 120, y: 80, size: 4 },
      { name: "Sheratan", x: 180, y: 120, size: 5 },
      { name: "Mesarthim", x: 240, y: 100, size: 3 },
      { name: "41 Ari", x: 280, y: 150, size: 4 },
      { name: "γ Ari", x: 200, y: 200, size: 3 },
      { name: "δ Ari", x: 150, y: 180, size: 4 }
    ],
    lines: [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 1, to: 4 },
      { from: 4, to: 5 }
    ]
  },
  {
    id: "taurus",
    name: "Taurus",
    icon: "fas fa-star",
    dateRange: "April 20 - May 20",
    rightAscension: "3h 27m to 6h 25m",
    declination: "+0° 00' to +31° 00'",
    area: "797 sq. degrees",
    brightestStar: "Aldebaran (α Tau)",
    description: "Taurus is one of the constellations of the zodiac and is located in the Northern celestial hemisphere. Taurus is a large and prominent constellation in the night sky.",
    borders: ["Aries", "Perseus", "Auriga", "Gemini", "Orion"],
    stars: [
      { name: "Aldebaran", x: 150, y: 100, size: 6 },
      { name: "Elnath", x: 200, y: 80, size: 4 },
      { name: "Alcyone", x: 250, y: 120, size: 5 },
      { name: "Atlas", x: 280, y: 140, size: 3 },
      { name: "Ain", x: 180, y: 160, size: 4 },
      { name: "Chamukuy", x: 220, y: 180, size: 3 }
    ],
    lines: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 2, to: 3 },
      { from: 0, to: 4 },
      { from: 4, to: 5 }
    ]
  },
  {
    id: "gemini",
    name: "Gemini",
    icon: "fas fa-user-friends",
    dateRange: "May 21 - June 20",
    rightAscension: "6h 00m to 8h 12m",
    declination: "+10° 00' to +35° 00'",
    area: "514 sq. degrees",
    brightestStar: "Pollux (β Gem)",
    description: "Gemini is one of the zodiac constellations and is located in the northern sky. It represents the twins Castor and Pollux in Greek mythology.",
    borders: ["Taurus", "Auriga", "Lynx", "Cancer"],
    stars: [
      { name: "Pollux", x: 150, y: 120, size: 6 },
      { name: "Castor", x: 190, y: 90, size: 5 },
      { name: "Alhena", x: 230, y: 150, size: 4 },
      { name: "Tejat", x: 200, y: 180, size: 4 },
      { name: "Mebsuta", x: 250, y: 120, size: 3 },
      { name: "Propus", x: 180, y: 200, size: 3 }
    ],
    lines: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 2, to: 4 },
      { from: 0, to: 3 },
      { from: 3, to: 5 }
    ]
  },
  {
    id: "cancer",
    name: "Cancer",
    icon: "fas fa-water",
    dateRange: "June 21 - July 22",
    rightAscension: "8h 00m to 9h 18m",
    declination: "+7° 00' to +33° 00'",
    area: "506 sq. degrees",
    brightestStar: "Tarf (β Cnc)",
    description: "Cancer is one of the twelve constellations of the zodiac. Its name is Latin for crab and it is commonly represented as one.",
    borders: ["Gemini", "Lynx", "Leo Minor", "Leo", "Hydra"],
    stars: [],
    lines: []
  },
  {
    id: "leo",
    name: "Leo",
    icon: "fas fa-crown",
    dateRange: "July 23 - August 22",
    rightAscension: "9h 30m to 11h 40m",
    declination: "-5° 00' to +35° 00'",
    area: "947 sq. degrees",
    brightestStar: "Regulus (α Leo)",
    description: "Leo is one of the constellations of the zodiac, lying between Cancer to the west and Virgo to the east. It is named after the lion in Greek mythology.",
    borders: ["Cancer", "Leo Minor", "Ursa Major", "Coma Berenices", "Virgo", "Hydra"],
    stars: [],
    lines: []
  },
  {
    id: "virgo",
    name: "Virgo",
    icon: "fas fa-leaf",
    dateRange: "August 23 - September 22",
    rightAscension: "12h 00m to 15h 00m",
    declination: "-20° 00' to +15° 00'",
    area: "1294 sq. degrees",
    brightestStar: "Spica (α Vir)",
    description: "Virgo is one of the constellations of the zodiac. Its name is Latin for virgin, and its symbol is ♍. It is the second-largest constellation in the sky.",
    borders: ["Leo", "Coma Berenices", "Bootes", "Libra", "Hydra", "Corvus"],
    stars: [],
    lines: []
  }
];

// Night Sky Data
export const celestialEvents = [
  {
    name: "Meteor Shower",
    status: "Visible now",
    statusColor: "text-space-green",
    borderColor: "border-space-green",
    description: "Delta Aquariids peak with up to 20 meteors per hour.",
    location: "Best viewing: NE horizon"
  },
  {
    name: "Jupiter Opposition",
    status: "In 3 days",
    statusColor: "text-space-blue",
    borderColor: "border-space-blue",
    description: "Jupiter at its closest approach to Earth, visible all night.",
    location: "Best viewing: South at midnight"
  }
];

export const visibleObjects = [
  {
    name: "Venus",
    location: "W horizon",
    icon: "fas fa-sun",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20"
  },
  {
    name: "Mars",
    location: "E horizon",
    icon: "fas fa-globe",
    color: "text-red-500",
    bgColor: "bg-red-500/20"
  },
  {
    name: "Meteor Shower",
    location: "NE sky",
    icon: "fas fa-meteor",
    color: "text-orange-500",
    bgColor: "bg-orange-500/20"
  },
  {
    name: "ISS Pass",
    location: "22:34 EDT",
    icon: "fas fa-satellite",
    color: "text-blue-500",
    bgColor: "bg-blue-500/20"
  }
];

export const skyInfo = {
  sunset: "8:25 PM",
  sunrise: "5:17 AM",
  moonPhase: "Waning Gibbous",
  visibility: "Good (8/10)"
};

// Space Background Images
export const backgroundImages = {
  space: "https://images.unsplash.com/photo-1566345984367-57276a4dd507?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  nightSky: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  stars: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
};
