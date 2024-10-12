import React from 'react'
import { CssBaseline } from '@mui/material'
import Grid from '@mui/material/Grid2';

import './App.css'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import List from './components/List/List'

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: '100'}}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Map />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <List />
        </Grid>
      </Grid>
    </>
  )
}

export default App
