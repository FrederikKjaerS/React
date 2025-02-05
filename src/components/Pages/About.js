import '../../App.css'
import React from 'react'
import { useEffect, useState } from 'react'

function About() {
  const [temperature, setTemperature] = useState(null)

  const erDetStrandVejr = temperature > 20

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=56.46&longitude=10.04&current=temperature_2m')
      .then(response => response.json())
      .then(data => {
        if (data && data.current && data.current.temperature_2m) {
          setTemperature(data.current.temperature_2m)
        }
      })
      .catch(error => console.error('Error fetching the temperature:', error))
  }, [])
  return (
    <>
      <div className="aboutContainer">
        <h1>Er det strandvejr?</h1>
        <br />
        <h2>{temperature !== null ? `Temeratur i Randers: ${temperature}°C` : 'Loading temperature...'}</h2>
        <br />
        <h2>{erDetStrandVejr ? 'JA' : 'NEJ'}</h2>
      </div>
    </>
  )
}

export default About
