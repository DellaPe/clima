import React from 'react'
import PropTypes from 'prop-types'
import { Grid, AppBar, Toolbar, IconButton, Link} from '@mui/material'
import {IconContext} from "react-icons"
import { WiDaySunny } from 'react-icons/wi'
const AppFrame = props => {
  return (
    <Grid container
    justifyContent="center"
    alignItems="center">
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <IconButton color='inherit'>
                        <Link to="/main" color='inherit'>
                            <IconContext.Provider value={{size:'2em'}}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Link>
                </IconButton>
            </Toolbar>
        </AppBar>
    </Grid>
  )
}

export default AppFrame