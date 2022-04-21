import React, {useState, useEffect} from 'react';
import Keyboard from './Keyboard';
import './app.css';

function App() {
  useEffect( () => {
    let newKeys = [];
    for (let i=65; i<= 90; i++) {
      let key = {
        letter: String.fromCharCode(i),
        status: 'unknown'
      }
      newKeys.push(key);
    }
    setKeys(newKeys);
  }, []); 

  const [keys, setKeys] = useState([]);

  function changeState(letter) {
    let newKeys = [...keys];
    let key = newKeys.find(key => key.letter === letter);
    switch (key.status) {
      case 'unknown':
        key.status = 'inWord';
        break;
      case 'inWord':
        key.status = 'notInWord';
        break;
      case 'notInWord':
        key.status = 'unknown';
        break;
      default:
        //zou niet voor moeten komen
        console.log('key is groen?');
        break;
    }
    setKeys(newKeys);
  }

  return (
    <Keyboard keys={keys} changeState={changeState}/>    
  );
}

export default App;

// - unknown
// - inWord
// - notInWord

// - correctPosition