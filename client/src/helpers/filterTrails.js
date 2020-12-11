const DISTANCE = 'distance';
const ELEVATION_GAIN = 'elevationGain';
const ROUTE_TYPE = 'routeType';
const DIFFICULTY = 'difficulty';
const TAGS = 'tags';
const FAVORITES = 'favorites';

export default function filterTrails(trails, filters, lists) {
  let matches = trails;

  filters = Object.entries(filters);

  while (filters.length > 0) {
    const [name, value] = filters.shift();
    console.log(name, value);
    console.log(filters.length);
    switch (name) {
      case DISTANCE:
        console.log('hitting distance', filters.length);
        const minDistance = value.min;
        const maxDistance = value.max;

        matches = matches.filter(trail => {
          const distance = Number.parseFloat(trail.length);
          console.log(distance);
          console.log(maxDistance, minDistance);
          console.log(distance >= minDistance && distance <= maxDistance);
          return distance >= minDistance && distance <= maxDistance;
        });

        break;

      case ELEVATION_GAIN:
        console.log('hitting elevation gain', filters.length);
        const minElevationGain = value.min;
        const maxElevationGain = value.max;

        matches = matches.filter(trail => {
          const distance = Number.parseInt(trail.elevationGain);
          return distance >= minElevationGain && distance <= maxElevationGain;
        });
        break;

      case ROUTE_TYPE:
        console.log('hitting route type');
        console.log(value);
        matches = matches.filter(trail => trail.routeType === value);
        console.log(matches);
        break;

      case DIFFICULTY:
        console.log('hitting difficulty');
        matches = matches.filter(trail => trail.difficulty === value);
        break;

      case TAGS:
        console.log('hitting tags');
        matches = filterTrailsByTags(matches, value);
        break;

      case FAVORITES:
        if (value === true) {
          const listId = lists['lists'][0]['id'];
          console.log(listId);
          matches = filterFavorites(matches, lists['lookup'][listId][trails[0]['cityId']]);
          break;
        }
    }
  }
  console.log(matches);
  console.log('before return');
  return matches;
}

export function getTags(trail) {
  return trail.Tags.reduce((tags, tag) => tags.push(tag.tag), []);
}

export function filterTrailsByTags(trails, tags) {
  let matches = [];

  while (tags.length) {
    const tag = tags.shift();
    matches = trails.filter(trail => getTags(trail).includes(tag));
  }

  return matches;
}

export function filterFavorites(trails, lookup) {
  console.log(lookup);
  return trails.filter(trail => lookup[trail.id] === true);
}
