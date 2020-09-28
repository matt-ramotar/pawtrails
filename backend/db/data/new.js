const fs = require('fs');
const { trails } = require('./trails');

const map = () => {
  const allTrails = trails.map((trail, i) => ({
    id: i + 1,
    name: trail.name,
    href: trail.href,
  }));

  console.log(allTrails);

  fs.writeFile('./allTrails.json', JSON.stringify(allTrails), 'utf-8', err =>
    console.error(err)
  );
};

map();
