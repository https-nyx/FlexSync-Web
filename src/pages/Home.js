import React , {useState} from 'react';
import {Box} from '@mui/material';

import WorkoutPlan  from '../components/WorkoutPlan';
import GymBanner from '../components/GymBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  return (
    <Box>
      <GymBanner />
      <SearchExercises />
      <WorkoutPlan />
    </Box>
  )
}

export default Home