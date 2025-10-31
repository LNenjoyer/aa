import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import szary from './szary.png'
import zolty from './zolty.png'
import zielony from './zielony.png'
import granat from './granatowy.png'
import czerwony from './czerwony.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <div>
        <img src={szary}></img>
      </div>
      <div className='nag'>
        <h1>Konfigurator wyposażenia</h1>
      </div>
      <div className='tag'>
        <p>Wybierz kolor lakieru</p>
      </div>
      <div id="seldiv">
        <select>
          <option>szary</option>
          <option>czerwony</option>
          <option>zielony</option>
          <option>żółty</option>
          <option>granatowy</option>
        </select>
        <hr></hr>
      </div>
      <div className='tag'>
        <p>Felgi</p>
      </div>
      <div>
          <input type='radio'  radioGroup='aa' name='aaa'></input>Stalowe
          <input type='radio' radioGroup='aa' name='aaa'></input>Aluminiowe
        <hr></hr>
      
      </div>
      <div className='tag'>
        <p>Wybierz dodatkowe wyposażenie</p>
      </div>
      <div>
        <input type='checkbox'></input>Czujniki parkowania<br></br>
        <input type='checkbox'></input>Climatronic<br></br>
        <input type='checkbox'></input>Nawigacja
        <hr></hr>

      </div>
      <div className='tag'>
        <p>Wycena</p>
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
