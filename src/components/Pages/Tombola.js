import '../../App.css'
import Button from '@mui/material/Button'
import { useState } from 'react'
import React from 'react'

function Tombola() {
  const [triforker, setTriforker] = useState('')

  const jcArray = ['Frederik', 'Allan', 'Søren', 'Michael', 'Nicolai']

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
  function roll() {
    let person = jcArray[getRandomInt(jcArray.length)]
    setTriforker(person)
  }

  return (
    <>
      <div className="tombolaContainer">
        <h1>Træk en Triforker</h1>
        <h2 className={triforker === '' ? 'invisible' : ''}>{triforker}</h2>
        <Button
          sx={{
            width: '10%',
            justifySelf: 'center'
          }}
          variant="contained"
          onClick={() => {
            roll()
          }}
        >
          TRYK
        </Button>
      </div>
    </>
  )
}

export default Tombola
