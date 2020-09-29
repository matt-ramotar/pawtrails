const fs = require('fs').promises;

const { trails } = require('../data/trails');
const db = require('../models');
// const { City, Photo, RouteType, Tag, Trail, TrailTag } = db;

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
  for (const trail of trails) {
    // City
    const cityId = cities[trail.city.city];
    console.log(cityId);
    // Photo
    // for (const imgURL of trail.images) {
    //   try {
    //     // await Photo.create({ trailId: trail.id, url: imgURL });
    //     fs.appendFile(
    //       '../data/json/Photos--withURI.json',
    //       JSON.stringify({
    //         trailId: trail.id,
    //         allTrailsURI: trail.allTrailsURI,
    //         url: imgURL,
    //         createdAt: 'new Date()',
    //         updatedAt: 'new Date()',
    //       })
    //     );
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }
    // TrailTag
    for (const tag of trail.tags) {
      try {
        // await TrailTag.create({ trailId: trail.id, tag });
        fs.appendFile(
          '../data/json/TrailTag--withURI.json',
          JSON.stringify({
            trailId: trail.id,
            allTrailsURI: trail.allTrailsURI,
            tag,
            createdAt: 'new Date()',
            updatedAt: 'new Date()',
          })
        );
      } catch (e) {
        console.e;
      }
    }
    // Trail
    // try {
    //   fs.appendFile(
    //     '../data/json/Trail.json',
    //     JSON.stringify({
    //       name: trail.name,
    //       allTrailsURI: trail.allTrailsURI,
    //       overview: trail.overview,
    //       length: trail.length,
    //       elevationGain: trail.elevationGain,
    //       routeType: trail.routeType,
    //       difficulty: trail.difficulty,
    //       cityId,
    //       createdAt: 'new Date()',
    //       updatedAt: 'new Date()',
    //     })
    //   );
    // } catch (e) {
    //   console.e;
    // }
  }
})();
