import React, { useMemo } from 'react'
import { Typography, Grid, AppBar, Toolbar, IconButton, Link } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'

const AppFrame = ({ children }) => {
  const IconContextSize = useMemo(() => ({ size: '2em' }), [])
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
    >
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton color='inherit'>
            <Link component={LinkRouter} to='/main' color='inherit'>
              <IconContext.Provider value={IconContextSize}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant='h5' color='inherit'> Weather App</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        item
        xs={12}
        sm={11}
        md={10}
        lg={8}
      >
        {children}
      </Grid>
    </Grid>
  )
}

export default AppFrame
