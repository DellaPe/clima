import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/grid';
import { IconContext }  from "react-icons"
import IconState, {validValuesState} from './../IconState';

const ForecastItem = ({weekDay, hour, state, temperature}) => {
  return (
    <>
        <Grid container
            direction="column"
            justify="center"
            alignItems="center">
                <Grid item>
                    <Typography>{weekDay}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{hour} hs</Typography>
                </Grid>
                <Grid item>
                    <IconContext.Provider value={{size: '5em'}}>
                        <IconState state={state} />
                    </IconContext.Provider>
                </Grid>
                <Grid item>
                    <Typography>{temperature} °</Typography>
                </Grid>

        </Grid>
    </>
  )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired, 
    hour: PropTypes.number.isRequired, 
    state: PropTypes.oneOf(validValuesState).isRequired, 
    temperature: PropTypes.number.isRequired
}

export default ForecastItem