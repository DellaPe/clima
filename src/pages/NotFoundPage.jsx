import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { Link, Grid, Typography } from '@mui/material'
import { IconContext } from 'react-icons'
import { WiLightning } from 'react-icons/wi'

const NotFoundPage = () => {
  return (
    <Grid container
      direction="column"
      justifyContent="center"
      className="full">
      <div className="highlight">
        <Grid container item xs={12}
          justifyContent="center"
          alignItems="center">
          <Grid item>
            <IconContext.Provider value={{ size: "6em" }}>
              <WiLightning />
            </IconContext.Provider>
          </Grid>
          <Grid container item xs={12}
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Typography variant="h4">
              404 | La página no existe
            </Typography>
            <Link color="inherit"
              component={LinkRouter}
              to='/main' className="highlight_2">
              Ir a Inicio
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  )
}

export default NotFoundPage