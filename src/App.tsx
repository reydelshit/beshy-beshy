import { MouseEventHandler, useState } from 'react'
import './index.css'

function App() {

  const [beshy, setBeshy] = useState("")
  const [beshyFromButton, setBeshyFromButton] = useState("")
  const [beshyIndicator, setBeshyIndicator] = useState(false)


  const beshyfying = (sentence: string) => {
    if(sentence.includes(" ")){
      setBeshy(sentence.replace(/ /g, " 🤸‍♀️ "))
      
    } else {
      setBeshy(sentence.replace(/ /g, " 🤸‍♀️ "))
    }
  }

  const beshyfringButton: MouseEventHandler<HTMLButtonElement> = () => {
    const sentence = (document.getElementById('beshy-waps') as HTMLInputElement).value as string;

    if(sentence.includes(" ")){
      setBeshyFromButton(sentence.replace(/ /g, " 🤸‍♀️ "))
    } else {
      setBeshy(sentence.replace(/ /g, " 🤸‍♀️ "))
      
    }
  }

  const copyBeshy = (sentence: string) => {
    try{
      navigator.clipboard.writeText(sentence)
      setBeshyIndicator(true)

      setTimeout(()=> {
        setBeshyIndicator(false)
      }, 2000)
    } catch(err){
      console.error(err)
    }
  }

  return (
    <main>
      <h1>🤸‍♀️ beshy 🤸‍♀️ beshy 🤸‍♀️</h1>
      <textarea id='beshy-waps' placeholder='enter your sentence here beshy 🤸‍♀️' 
        onChange={(e) => beshyfying(e.target.value)}></textarea>
      
      <button onClick={beshyfringButton}>🤸‍♀️ start 🤸‍♀️ beshyfying 🤸‍♀️ it 🤸‍♀️</button>
      <div className='beshy_result'>
        <button onClick={() => copyBeshy(beshy)}>copy🤸‍♀️</button>

        <p>{beshyFromButton.length > 0 ? beshyFromButton : beshy}</p>

        {beshyIndicator &&  <div className='beshy-indicator'>text copied 🤸‍♀️</div>}
      </div>
      <span>made and designed by reydel hehe. also powered and spored by ELKAPAROK 🤸‍♀️🤸‍♀️🤸‍♀️</span>
    </main>
  )
}

export default App
