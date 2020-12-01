import React from 'react';
import { Box } from '@material-ui/core';
import { DistanceFilter, ElevationGainFilter, RouteTypeFilter, DifficultyFilter, TagsFilter } from './FilterButtons';
export default function Filters() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: '2.5%',
        width: 550,
        flexWrap: 'wrap',
      }}>
      <DistanceFilter />
      <ElevationGainFilter />
      <RouteTypeFilter />
      <DifficultyFilter />
      <TagsFilter />
    </Box>
  );
}
