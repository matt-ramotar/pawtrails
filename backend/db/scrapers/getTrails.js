const fs = require('fs').promises;

const { trailHeaders } = require('../data/trailHeaders.js');
const getTrail = require('./getTrail');

(async () => {
  for (const trailHead of trailHeaders) {
    try {
      const trail = await getTrail(trailHead);
      await fs.appendFile('../data/trails.json', JSON.stringify(await trail));
      console.log(`Trailhead ${trailHead.id} saved.`);
    } catch (err) {
      await fs.appendFile(
        '../errors/trails.json',
        `Error: Trailhead ${trailHead.id}:: ${err}`
      );
      console.log(`Error: Trailhead ${trailHead.id} was not saved.`);
    }
  }
})();
