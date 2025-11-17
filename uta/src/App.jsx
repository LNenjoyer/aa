import { useState } from 'react'
import { useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import szary from './szary.png'
import zolty from './zolty.png'
import zielony from './zielony.png'
import granat from './granatowy.png'
import czerwony from './czerwony.png'

function App() {
  const [count, setCount] = useState(1);
  const [lak, setLak] = useState(1);
  const [chek1, setChek1] = useState(false);
  const [chek2, setChek2] = useState(false);
  const [chek3, setChek3] = useState(false);

  function onChek1Change(event){
    setChek1(event.target.checked);
    cena();
  }
  function onChek2Change(event){
    setChek2(event.target.checked);
    cena();
  }
  function onChek3Change(event){
    setChek3(event.target.checked);
    cena();
  }

  useEffect(() => {
  cena();
}, [count, lak, chek1, chek2, chek3]);


  const [price, setPrice] = useState(75000);

  function setKol(value){
    setCount(Number(value));

    cena();
  }
  const handleChange = (event) => {
    setLak(event.target.value);
    cena()
  };


  function cena(){
    let aaa =75000;
    
    
      if(count!==1){
      aaa+=9000;
      }
      console.log(count);
      
      if(lak==="2"){
        aaa+=7500;
        
      }

      if(chek1===true){
        aaa+=6500;
      }

      if(chek2===true){
        aaa+=8500;
      }

      if(chek3===true){
        aaa+=5000;
      }
      setPrice(aaa);
  }
 
  
  return (
    <div id="container">
      <div>
        <img   src={count==1?szary:(count==2?czerwony:(count==3?zielony:(count==4?zolty:(count==5?granat:szary))))}></img>

              </div>
      <div className='nag'>
        <h1>Konfigurator wyposażenia</h1>
      </div>
      <div className='tag'>
        <p>Wybierz kolor lakieru</p>
      </div>
      <div id="seldiv">
        <select name='kol' value={count} onChange={e=>setKol(e.target.value)}>
          <option value={1}>szary</option>
          <option value={2}>czerwony</option>
          <option value={3}>zielony</option>
          <option value={4}>żółty</option>
          <option value={5}>granatowy</option>
        </select>
        <hr></hr>
      </div>
      <div className='tag'>
        <p>Felgi</p>
      </div>
      <div>
          <input type='radio' name='aaa' value="1" checked={lak==="1"} onChange={handleChange} ></input>Stalowe
          <input type='radio' name='aaa' value="2" checked={lak==="2"} onChange={handleChange} ></input>Aluminiowe
        <hr></hr>
      
      </div>
      <div className='tag'>
        <p>Wybierz dodatkowe wyposażenie</p>
      </div>
      <div>
        <input type='checkbox' onChange={onChek1Change}></input>Czujniki parkowania<br></br>
        <input type='checkbox' onChange={onChek2Change}></input>Climatronic<br></br>
        <input type='checkbox' onChange={onChek3Change}></input>Nawigacja
        <hr></hr>

      </div>
      <div className='tag'>
        <p>Wycena</p>
        <p>Cena bazowa: 75000 PLN</p>
        {count!=1?<p>Lakier: 9000 PLN</p>:""}
        {lak==2?<p>Aluminiowe felgi: 7500 PLN</p>:""}
        {chek1==true?<p>Czujniki parkowania: 6500</p>:""}
        {chek2==true?<p>Climatronic: 8500</p>:""}
        {chek3==true?<p>Nawigacja: 5000</p>:""}
        <br></br>
        <p>Razem: {price}</p>
      </div>

    </div>
  )
}

export default App
