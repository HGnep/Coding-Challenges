import React from 'react'

export default function KeyboardKey({keyboardkey, changeState}) {
  function handleKeyboardKeyClick() {
    changeState(keyboardkey.letter);
  }

  return (
    <button className={`key ${keyboardkey.status}`} onClick={handleKeyboardKeyClick}>
        {keyboardkey.letter}
    </button>
  )
}