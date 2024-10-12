import React from 'react'
import { AppBar, Typography, Toolbar } from '@mui/material'

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5' >
          Around Me
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header