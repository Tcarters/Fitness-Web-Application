import { Box, capitalize, Stack, Typography } from '@mui/material'
import React from 'react'
import '../App.css'

const ExerciseVideo = ({ exerciseVideo, name}) => {

    if (!exerciseVideo.length) return 'Loading ......';

  return (
        <Box 
            sx={{ marginTop: { lg: '200px', xs: '20px' }}}
            p="20px"
        >
            <Typography variant='h3' mb='33px' >
                Watch 
                    <span
                        style={{ color: '#ff2625', 
                        textTransform: 'capitalize' }}
                    >
                        { name } 
                    </span> 
                exercise videos 
            </Typography>
            <Stack
                justifyContent="flex-start"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                    flexDirection: {lg: 'row' },
                    gap: { lg: '110px', xs: '0' }
                }}
            >
                {exerciseVideo?.slice(0, 6).map(( item, index) => (
                    <a
                        key={index}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={item.video.thumbnails[0].url}
                             alt={item.video.title}
                            />
                        
                        <Box>
                            <Typography variant='h5' color="#000">
                                <strong>Title:</strong> { item.video.title}
                            </Typography>

                            <Typography variant='h6' color="#000">
                                <strong>YTube Channel Name:</strong> { item.video.channelName }
                            </Typography>

                        </Box>

                    </a>

                )) }
                
            </Stack>

        </Box>
    )
}

export default ExerciseVideo