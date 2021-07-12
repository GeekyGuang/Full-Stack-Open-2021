import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Languages = ({ lan }) => (
  <>
    <h1>Languages</h1>
    <ul>{lan.map(item => <li key={item.nativeName}>{item.nativeName}</li>)}</ul>
  </>
)

const CountryDetail = ({ name, allData }) => {
  for (let item of allData) {
    if (item.name === name) {
      return (
        <div>
          <h1>{item.name}</h1>
          <div>capital: {item.capital}</div>
          <div>population: {item.population}</div>
          <Languages lan={item.languages} />
          <div><img src={item.flag} alt='flag' width="500" /></div>
        </div>
      )
    }
  }
  return <></>
}

const ShowCountries = ({ countries, showCountry, allData }) => {
  console.log(countries)
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (countries.length === 1) {
    return <CountryDetail name={countries[0]} allData={allData} />
  } else {
    return countries.map(item => <div key={item}>{item}<button onClick={showCountry}>show</button></div>)
  }
}

const App = () => {
  const [allData, setAllData] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response)
        setAllData(response.data)
        setAllCountries(response.data.map(item => item.name))
      })
  }, [])

  const handleInputChange = (event) => {
    setCountries(allCountries.filter(item => item.indexOf(event.target.value) >= 0))
  }

  const showCountry = (event) => {
    setCountries([event.target.parentNode.childNodes[0].textContent])
  }

  return (
    <>
      <div>find countries: <input type='text' onChange={handleInputChange}></input></div>
      <ShowCountries countries={countries} allData={allData} showCountry={showCountry} />
    </>
  )
}

export default App;
