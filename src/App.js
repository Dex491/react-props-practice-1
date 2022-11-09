import { useState } from 'react'


import './styles.css'

import Title from './Title.js'
import NameLength from './Name-length.js'
import NameReversed from './Name-reversed.js'

export default function App() {
  const [name, setName] = useState('Nicolas')
 
  return (
    <div className="app">
      <Title name={name}/>
      <NameLength name={name}/>
      <NameReversed name={name}/>
    </div>
  )
}
