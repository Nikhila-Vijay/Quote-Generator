
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
          const [quote, setQuote] = useState("");
          const [author, setAuthor] = useState("")
  
  const getQuote = async ()=> {
    try{
      const response = await axios.get("https://dummyjson.com/quotes");
      const randomQuote = response.data.quotes[Math.floor(Math.random()*response.data.quotes.length)];

      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);      

    }
    catch(err){
          console.log("Error Fetching Quote:-", err);
          
    }
  }  
  
  useEffect(()=> {
    getQuote();
  },[])
  
  

  return (
    <>
    <div className='app'>
        <div className='quote'>
          <h1>Quote Of The Day</h1>
          <h2>{quote}</h2>
          <small>-{author}-</small>
        </div> 
        <br />
        <button className='btn'onClick={getQuote}>Next Quote</button>
    </div>
     
    </>
  )
}

export default App
