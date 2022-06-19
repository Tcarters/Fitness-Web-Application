import React, { useState } from 'react'

import { Box } from '@mui/material'
import { HeroBanner, SearchExercises, Exercises } from '../Components'

const Home = () => {
      const [bodyPart, setBodyPart ] = useState('all')
      const [exercises, setExercises ] = useState([])

      console.log('funct:', bodyPart)

  return (
    <Box>
      
      <HeroBanner
        //  setExercises={setExercises}
        //  bodyPart={bodyPart}
        //  setBodyPart={setBodyPart}
      />


      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      <Exercises          
         exercises={exercises}
         setExercises={setExercises}
         bodyPart={bodyPart}
      />

    </Box>
  )
}

export default Home