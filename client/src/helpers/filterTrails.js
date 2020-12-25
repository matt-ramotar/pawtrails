const DISTANCE = 'distance';
const ELEVATION_GAIN = 'elevationGain';
const ROUTE_TYPE = 'routeType';
const DIFFICULTY = 'difficulty';
const TAGS = 'tags';
const FAVORITES = 'favorites';

export default function filterTrails(trails, filters, lists) {
  let matches = trails;

  let filtersArray = Object.entries(filters);

  while (filtersArray.length > 0) {
    const [name, value] = filtersArray.shift();

    switch (name) {
      case DISTANCE:
        const minDistance = value.min;
        const maxDistance = value.max;

        matches = matches.filter(trail => {
          const distance = Number.parseFloat(trail.length);

          return distance >= minDistance && distance <= maxDistance;
        });

        break;

      case ELEVATION_GAIN:
        const minElevationGain = value.min;
        const maxElevationGain = value.max;

        matches = matches.filter(trail => {
          const distance = Number.parseInt(trail.elevationGain);
          return distance >= minElevationGain && distance <= maxElevationGain;
        });
        break;

      case ROUTE_TYPE:
        matches = matches.filter(trail => trail.routeType === value);

        break;

      case DIFFICULTY:
        matches = matches.filter(trail => trail.difficulty === value);
        break;

      case TAGS:
        if (value.length === 0) break;

        matches = filterTrailsByTags(matches, value);
        break;

      case FAVORITES:
        if (value === true) {
          const listId = lists['lists'][0]['id'];

          matches = filterFavorites(matches, lists['lookup'][listId][trails[0]['cityId']]);
          break;
        }
    }
  }

  return matches;
}

export function getTags(trail) {
  const tags = trail.Tags.map(tag => tag.tag);

  return tags;
}

export function filterTrailsByTags(trails, tags) {
  let matches = trails;

  while (tags.length) {
    const tag = tags.shift();

    matches = matches.filter(trail => getTags(trail).includes(tag));
  }

  return matches;
}

export function filterFavorites(trails, lookup) {
  return trails.filter(trail => lookup[trail.id] === true);
}
