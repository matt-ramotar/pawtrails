const fs = require('fs').promises;

const { trails } = require('../data/trails');

const cities = {
  atlanta: 1,
  austin: 2,
  baltimore: 3,
  boise: 4,
  boston: 5,
  boulder: 6,
  chicago: 7,
  denver: 8,
  'los-angeles': 9,
  'new-york-city': 10,
  philadelphia: 11,
  portland: 12,
  'salt-lake-city': 13,
  'san-francisco': 14,
  seattle: 15,
};

(async () => {
  const trailSeeds = trails.map(trail => {
    const cityId = cities[trail.city.city];
    return {
      name: trail.name,
      allTrailsURI: trail.allTrailsURI,
      overview: trail.overview,
      difficulty: trail.difficulty,
      length: trail.length,
      elevationGain: trail.elevationGain,
      routeType: trail.routeType,
      cityId,
      lat: Number(trail.lat),
      lng: Number(trail.lng),
      createdAt: 'new Date()',
      updatedAt: 'new Date()',
    };
  });

  await fs.writeFile('../data/json/Trail--withLocation.json', JSON.stringify(trailSeeds));
})();
