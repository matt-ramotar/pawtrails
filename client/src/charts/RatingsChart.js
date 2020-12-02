import React, { useEffect, useState } from 'react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({}));

export default function RatingsChart() {
  const classes = useStyles();
  const [pctFiveStarReviews, setPctFiveStarReviews] = useState(80);
  const [pctFourStarReviews, setPctFourStarReviews] = useState(10);
  const [pctThreeStarReviews, setPctThreeStarReviews] = useState(6);
  const [pctTwoStarReviews, setPctTwoStarReviews] = useState(2);
  const [pctOneStarReviews, setPctOneStarReviews] = useState(2);

  const dataset = [pctFiveStarReviews, pctFourStarReviews, pctThreeStarReviews, pctTwoStarReviews, pctOneStarReviews];

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 0,
        width: 300,
        padding: 10,
      }}>
      <svg width='100%' height='100%'>
        <g>
          <text x='0' y='12' fill='#70757A' font-family='Roboto' font-size='15px'>
            5
          </text>
          <rect fill='#FBBD04' width={`${pctFiveStarReviews}%`} height='15px' rx='10' x='15' y='0' />
        </g>
        <text x='0' y='35' fill='#70757A' font-family='Roboto' font-size='15px'>
          4
        </text>
        <rect fill='#FBBD04' width={`${pctFourStarReviews}%`} height='15px' rx='10' x='15' y='23' />
        <text x='0' y='59' fill='#70757A' font-family='Roboto' font-size='15px'>
          3
        </text>
        <rect fill='#FBBD04' width={`${pctThreeStarReviews}%`} height='15px' rx='10' x='15' y='46' />
        <text x='0' y='82' fill='#70757A' font-family='Roboto' font-size='15px'>
          2
        </text>
        <rect fill='#FBBD04' width={`${pctTwoStarReviews}%`} height='15px' rx='10' x='15' y='69' />
        <text x='0' y='106' fill='#70757A' font-family='Roboto' font-size='15px'>
          1
        </text>
        <rect fill='#FBBD04' width={`${pctOneStarReviews}%`} height='15px' rx='10' x='15' y='92' />
      </svg>
    </Box>
  );
}
