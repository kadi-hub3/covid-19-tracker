import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import '../index.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return `loading`
    }

    return (
        < div >
            <Grid container xs={12} direction='row' spacing={3} justify='center' >
                <Grid item xs={3} component={Card} className='infected-card card'>
                    <CardContent>
                        <Typography color='textSecondary'>Infected</Typography>
                        <Typography variant='h4'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                separator=','
                                duration={2} />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={3} component={Card} className='recovered-card card'>
                    <CardContent>
                        <Typography color='textSecondary'>Recovered</Typography>
                        <Typography variant='h4'>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                separator=','
                                duration={2} />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography>Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={3} component={Card} className='deaths-card card'>
                    <CardContent>
                        <Typography color='textSecondary'>Deaths</Typography>
                        <Typography variant='h4'>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                separator=','
                                duration={2} />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography>Number of death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>

        </div >
    )
}

export default Cards
