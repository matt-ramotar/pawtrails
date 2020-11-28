import { useSelector } from 'react-redux';

export default function filterTrails(trails) {
  const distanceFilter = useSelector(state.filters.distance);
  const elevationGainFilter = useSelector(state.filters.elevationGain);
  const trailTypeFilter = useSelector(state.filters.trailType);
  const difficultyFilter = useSelector(state.filters.difficulty);
  const tagsFilter = useSelector(state.filters.tags);
  const filters = [distanceFilter, elevationGainFilter, trailTypeFilter, difficultyFilter, tagsFilter];

  const type = {
    type: 'singleSelect, multiSelect, slider',
    propertyName: 'distance, elevationGain',
    value: '',
  };

  const difficulty = {
    type: 'singleSelect',
    propertyName: 'difficulty',
    value: 'hard',
  };

  const slider = {
    type: 'slider',
    propertyName: '',
    value: [min, max],
  };

  const tag = {
    type: 'multiSelect',
    propertyName: 'tags',
    values: ['Dog Friendly', 'Kid Friendly'],
  };
}
