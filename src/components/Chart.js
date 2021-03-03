import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import '../index.css'
import { fetchDailyData } from '../api'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([])


    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
        console.log(fetchAPI());

    }, [])

    const line =
        (dailyData !== undefined && dailyData.length) ?
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: 'rgba(255, 99, 132, 0.8)',
                        fill: 'true'
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'rgba(153, 102, 255, 0.8)',
                        fill: 'true'
                    }]
                }} /> : null

    const bar = confirmed ?
        (<Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['#b2b2ff', '#cbffc0', '#fdbec8'],
                    data: [confirmed.value, recovered.value, deaths.value]
                }]
            }}

        />) : null

    return (
        <div className='container'>
            {country ? bar : line}
        </div>
    )



}

export default Chart
