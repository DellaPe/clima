import React, { useMemo } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import WelcomeScreem from '../components/WelcomeScreem'
import { Link, Grid, Typography } from '@mui/material'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'

const WelcomePage = () => {
  const iconContextSize = useMemo(() => ({ size: '6em' }), [])
  return (
    <WelcomeScreem>
      <Grid container
        direction="column"
        justifyContent="center"
        className="full">
        <div className="highlight">
          <Grid container item xs={12}
            justifyContent="center"
            alignItems="center">
            <Grid item>
              <IconContext.Provider value={iconContextSize}>
                <WiDaySunny></WiDaySunny>
              </IconContext.Provider>
            </Grid>
            <Grid container item xs={12}
              direction="column"
              justifyContent="center"
              alignItems="center">
              <Typography variant="h4">
                Weather App
              </Typography>
              <Link color="inherit"
                component={LinkRouter}
                to='/main' className="highlight_2">
                Instesar
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreem>
  )
}

export default WelcomePage