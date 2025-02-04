import '../../App.css'
import React from 'react'
import { useEffect, useState } from 'react'

function About() {
  const [temperature, setTemperature] = useState(null)

  const erDetStrandVejr = temperature > 5

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
        <h1>Er sgu bare en konge</h1>
        <h2>{temperature !== null ? `Current Temperature: ${temperature}°C` : 'Loading temperature...'}</h2>
        <h2>Er det strandvejr?</h2>
        <h2>{erDetStrandVejr ? 'JA' : 'NEJ'}</h2>
      </div>
    </>
  )
}

export default About
