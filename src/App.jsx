import React from 'react'
import './App.css'
import Jokes from './component/Jokes'
import JokesData from './component/JokesData'
function App() {
  const jokesElements = JokesData.map(joke => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />
  })
  return (
    <div>
      {jokesElements}
    </div>
  )
}

export default App
