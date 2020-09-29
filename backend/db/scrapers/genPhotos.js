const fs = require('fs');
const { photos: photosWithOldIds } = require('../data/photos');

const db = require('../models');

const { Trail } = db;

(async () => {
  const trailsMap = {};
  const trails = await Trail.findAll();
  for (let trail of trails) {
    trailsMap[trail.allTrailsURI] = trail.id;
  }

  const photosWithUpdatedIds = photosWithOldIds.map(photo => {
    const id = trailsMap[photo.allTrailsURI];
    return {
      trailId: id,
      url: photo.url,
      createdAt: 'new Date()',
      updatedAt: 'new Date()',
    };
  });

  await fs.writeFile(
    './db/data/json/Photos--withUpdatedIds.json',
    JSON.stringify(photosWithUpdatedIds),
    err => console.log(err)
  );
})();
