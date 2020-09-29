const fs = require('fs').promises;

const { trails } = require('../data/trails');
const db = require('../models');
const { Tag } = db;

(async () => {
  const uniqueTags = new Set();
  for (const trail of trails) {
    // City
    trail.tags.forEach(tag => uniqueTags.add(tag));
  }

  const tags = Array.from(uniqueTags);

  for (let tag of tags) {
    await fs.appendFile(
      '../data/json/Tag.json',
      JSON.stringify({ tag, createdAt: 'new Date()', updatedAt: 'new Date()' })
    );
  }
  // await Tag.create({ tag });
})();
