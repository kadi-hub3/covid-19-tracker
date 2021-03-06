import React, { useState, useEffect } from 'react'
import { fetchCountries } from '../api'
import '../index.css'
import { FormControl, NativeSelect } from '@material-ui/core'

const Country = ({ handleCountry }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI()
    }, [setFetchedCountries])

    return (
        <FormControl className='form'>
            <NativeSelect defaultValue="" onChange={(e) => handleCountry(e.target.value)} variant="filled">
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Country
