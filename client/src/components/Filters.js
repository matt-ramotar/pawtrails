import React from 'react';
import { Box } from '@material-ui/core';
import {
  DistanceFilter,
  ElevationGainFilter,
  RouteTypeFilter,
  DifficultyFilter,
  TagsFilter,
  FavoritesFilter,
} from './FilterButtons';
export default function Filters() {
  return (
    <Box
      id='filters-box'
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: '2.5%',
        width: 500,
        flexWrap: 'wrap',
      }}>
      <DistanceFilter />
      <ElevationGainFilter />
      <RouteTypeFilter />
      <DifficultyFilter />
      <TagsFilter />
      <FavoritesFilter />
    </Box>
  );
}
