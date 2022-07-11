import React from 'react'
import { Box, Typography } from '@mui/material'

const SideProfile = ({ isLogin, data }) => {
  const { image, name } = data;
  
  const carbonUser = `${process.env.PUBLIC_URL}/assets/icons/carbon-user.png`
  return (
    <>
        {!isLogin ?
        <Box sx={{ 
            backgroundImage: 'linear-gradient(33deg, rgb(140 116 180 / 6%) 64%, rgba(172, 69, 231, 1.54) 89.65%)',
            borderRadius: '15px',
            padding: '1%'
        }}>
            <Box sx={{ bgcolor: '#18171B', borderRadius: '15px'}}>
            <Box
                sx={{
                backgroundImage: 'linear-gradient(33deg, rgb(140 116 180 / 37%) 65%, rgba(172, 69, 231, 0.54) 89.65%)',
                width: '100%',
                borderRadius: '15px'
                }}
            >
                <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: "9%"
                }}>
                <img src={carbonUser} alt='user default' style={{ width: '37%', height: '100%' }} />
                <Box sx={{ ml: 2 }}>
                    <Typography variant='h6' component='div' sx={{ color: 'white' }}>Guest</Typography>
                    <a href='/sign-in' style={{ color: '#D080F3' }}>sign up</a>
                </Box>
                </Box>
            </Box>
            </Box>
        </Box>
        :
        <Box sx={{ padding: '4% 6%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img src={image} alt='user profile' style={{ width: '37%', height: '100%' }} />
            <Box sx={{ ml: 2 }}>
            <Typography variant='h6' component='div' sx={{ color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {name}
                <img src={`${process.env.PUBLIC_URL}/assets/icons/premium-quality.png`} alt='premium' style={{ width: '23px', height: '100%', paddingLeft: '5px' }} />
            </Typography>
            <a href='/profile' style={{ color: '#D080F3' }}>View Profile</a>
            </Box>
        </Box>}
    </>
  )
}

export default SideProfile