import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

import gympic from '../assets/images/gympic.png';
const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg:'215px', xs:'7-px' },
        ml: {sm: '50px'}
    }} position="relative" p="20px">
        <Typography color="#ea152c"
        fontWeight="600" fontSize={25}>
            FlexSync
        </Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg: '46px', xs:'40px'}}}mb="23px" mt="30px">
            Staying Fit Made Easier!
        </Typography>
        <Typography fontSize='22px'
        lineHeight='35px' mb={3}>
           Create the workout and diet plan for you!
        </Typography>
        <Button variant="contained" size="large" color="error" href="#WorkoutPlan">   Diet Plan   </Button>
        <Button variant="contained" size="large" color="error">Workout Plan</Button>
        <Typography fontWeight={600} color="#ea152c" sx={{
          opacity: 0.1,
          display: {lg: 'block', xs: 'none'}
        }}fontSize="210px"mb="23px" mt="60px">
          FITENSS
        </Typography>
        <img src={gympic} alt="banner" className="gym-pic"/>
    </Box>
  )
}

export default HeroBanner