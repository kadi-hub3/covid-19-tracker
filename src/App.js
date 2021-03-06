import React from 'react'
import Cards from './components/Cards'
import Country from './components/Country'
import Chart from './components/Chart'
import Title from './components/Title'
import fetchData from './api'

class App extends React.Component {
  state = {
    data: {},
    country: ''

  }

  async componentDidMount() {
    const data = await fetchData()

    this.setState({ data })
  }


  handleCountry = async (country) => {
    const data = await fetchData(country)

    this.setState({ data: data, country: country })

  }

  render() {
    const { data, country } = this.state

    return (
      <div className='app'>
        <Title title='Covid-19 Tracker' subtitle='All Around The World' />
        <Cards data={data} />
        <Country handleCountry={this.handleCountry} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
