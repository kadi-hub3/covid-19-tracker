import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../API'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
    }, [])
    const lineChart = (
        (undefined !== dailyData && dailyData.length)
            ? (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#00a9fe',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: '#fd6bb6',
                        fill: true,
                    }]
                }}
            />) : null
    )

    const BarChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['#00a9fe', '#d9eb4b', '#fd6bb6'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current State in ${country}` }
                }}
            />
        ) : null
    )
    return (
        <div className={styles.container}>
            {country ? BarChart : lineChart}
        </div>
    )
}

export default Chart