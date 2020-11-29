import { useSelector } from 'react-redux';

const DISTANCE = 'filters/DISTANCE';
const ELEVATION_GAIN = 'filters/ELEVATION_GAIN';
const TRAIL_TYPE = 'filters/TRAIL_TYPE';
const DIFFICULTY = 'filters/DIFFICULTY';
const TAGS = 'filters/TAGS';

export default function filterTrails(trails) {
  const filters = useSelector(state.filters);

  const filters = Object.entries(filters);
  let matches;

  while (filters.length) {
    const [name, filter] = filters.shift();
    switch (filter.name) {
      case DISTANCE:
        const { min, max } = filter.value;
        matches = trails.filter(trail => trail.distance >= min && trail.distance <= max);

      case ELEVATION_GAIN:
        const { min, max } = filter.value;
        matches = trails.filter(trail => trail.elevationGain >= min && trail.elevationGain <= max);

      case TRAIL_TYPE:
        matches = trails.filter(trail => trail.routeType === filter.value);

      case DIFFICULTY:
        matches = trails.filter(trail => trail.difficulty === filter.value);

      case TAGS:
        matches = filterTrailsByTags(trails, filter.value);

      default:
        matches = trails;
    }
  }
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
