import React from 'react'
import './App.css'
import Jokes from './component/Jokes'
function App() {
  return (
    <div>
      <Jokes
        // setup="I got my daughter a fridge for her birthday"
        punchline="Ican't wait to see her face light up when she open it"
        isPun={true}
        upvotes={10}
        downVotes={2}
        comments={[{author:"",body:"",title:""}]} />
      <Jokes
        setup="How did the hacker escape the police?"
        punchline="He jsut ransomware"/>
      <Jokes
        setup="Why don't pirates travel in mountain roads?"
        punchline="Scurvy"/>
      <Jokes
        setup="Why do bees stay on the hive in winter?"
        punchline="Swarm"/>
      <Jokes
        setup="What's the best thing about switzerland?"
        punchline="I dont , but the flag is big plus"/>
    </div>
  )
}

export default App
