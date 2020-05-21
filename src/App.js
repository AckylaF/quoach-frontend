import React, { useState, useEffect } from 'react'

import './App.css'

import api from './services/api'



function App() {
  
  const [quotes, setQuotes] = useState([])
  const [chosenQuote, setChosenQuote] = useState('')

  useEffect(() => {
    api.get('quoach')
    .then(response => {
      setQuotes(response.data)
    })
  })

  async function handleQuote() {

    let shuffle = await quotes.sort(function() {
      return .5 - Math.random()
    })

    setChosenQuote(shuffle[0].quote)
  }

  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <p className="logo__title">Quoach</p>
            <p className="logo__subtitle">Coach quote generator</p>
          </div>
          <button type="button" onClick={handleQuote} className="button">Motivation</button>
        </div>
      </header>

  <main>
    <p className="quote">{chosenQuote}</p>
  </main>
    </div>
  )
}

export default App;
