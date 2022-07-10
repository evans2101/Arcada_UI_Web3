import React from 'react'
import { styled } from '@mui/material/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import PropTypes from 'prop-types'

import NavBarButton from '../walletconnect/connect'
import SearchField from '../search_field/search_field'

const NavBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  '& .app-bar': {
    padding: '7.5px 0px',
    boxShadow: 'none',
    background: '#0C0B10',
  },
  '& .widgets': {
    width: '100%',
  },
  '& .flex': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))

const TopBar = ({ open, handleDrawerOpen }) => {
  return (
    <NavBox>
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Box className="flex widgets">
            <Box className="nav-left flex">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => handleDrawerOpen()}
                sx={{ mr: 5 }}
              >
                {open ? (
                  <ChevronLeftIcon sx={{ bgcolor: '#3C3C3C', borderRadius: '50px', marginLeft: '-20px' }} />
                ) : (
                  <ChevronRightIcon sx={{ bgcolor: '#3C3C3C', borderRadius: '50px' }} onClick={handleDrawerOpen} />
                )}
              </IconButton>
              <SearchField />
            </Box>
            <NavBarButton />
          </Box>
        </Toolbar>
      </AppBar>
    </NavBox>
  )
}

TopBar.propTypes = {
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
}

export default TopBar
