import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return `loading`
    }

    return (
        <div>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='red'>Infected</Typography>
                        <Typography variant='h4'>{confirmed}</Typography>
                        <Typography color='red'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    )
}

export default Cards
