const fs = require('fs');
const { trailTags: trailTagsWithOldIds } = require('../data/trailTags');

const db = require('../models');

const { Trail } = db;

(async () => {
  const trailsMap = {};
  const trails = await Trail.findAll();
  for (let trail of trails) {
    trailsMap[trail.allTrailsURI] = trail.id;
  }

  const trailTagsWithUpdatedIds = trailTagsWithOldIds.map(trailTag => {
    const id = trailsMap[trailTag.allTrailsURI];
    return {
      trailId: id,
      tag: trailTag.tag,
      createdAt: 'new Date()',
      updatedAt: 'new Date()',
    };
  });

  await fs.writeFile(
    './db/data/json/TrailTag--withUpdatedIds.json',
    JSON.stringify(trailTagsWithUpdatedIds),
    err => console.log(err)
  );
})();
