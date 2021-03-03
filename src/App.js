import React from 'react'
import Cards from './components/Cards'
import Country from './components/Country'
import Chart from './components/Chart'
import fetchData from './api'

class App extends React.Component {
  state = {
    data: {},
    country: ''

  }

  async componentDidMount() {
    const data = await fetchData()

    this.setState(data)
  }


  handleCountry = async (country) => {
    const data = await fetchData(country)

    this.setState({ data: data, country: country })

  }

  render() {
    const data = this.state
    const country = this.state

    return (
      <div>
        <Cards data={data} />
        <Chart data={data} country={country} />
        <Country handleCountry={this.handleCountry} />
      </div>
    )
  }
}

export default App;
