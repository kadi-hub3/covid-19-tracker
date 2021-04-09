import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './Country.module.css'
import { fetchCountries } from '../../API'

const Country = ({ handleCountry }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI()
    }, [setFetchedCountries])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountry(e.target.value)} variant="filled">
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Country