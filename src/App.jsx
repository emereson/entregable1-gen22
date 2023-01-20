import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import colors from './json/colors.json'

function App() {
    const randomElementFromArrat = arr => {
      const indexRandom = Math.floor(Math.random() * arr.length)
      return arr[indexRandom]
    }
    const [quoteRandom, setquoteRandom] = useState(randomElementFromArrat(quotes)) 

    const [colorRandom, setColorRandom] = useState(randomElementFromArrat(colors)) 

    const handleClick = () => {
      setquoteRandom(randomElementFromArrat(quotes))
      setColorRandom(randomElementFromArrat(colors))
    }
  return (
    
    <div style={{backgroundColor:colorRandom }} className="App">
      <QuoteBox 
      quoteRandom = {quoteRandom}
      handleClick = {handleClick}
      colorRandom = {colorRandom}
    />
      
    </div>
  )
}

export default App
