import React from 'react'

import SomeComponent from './components/SomeComponent'
import Button from './components/Button'

import './App.css'

function App() {
  function onBtnClick() {
    alert('OUCH! You press me so hard!')
  }

  return (
    <div style={{ padding: '8px 16px' }}>
      <h1>TypeScript in React!</h1>
      <SomeComponent name="Jirachai"/>
      <Button hoverDensity={0.1} onClick={onBtnClick}>Press me, gently</Button>
    </div>
  )
}

export default App
