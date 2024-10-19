import { useState } from 'react'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1 className="text-3xl font-bold underline bg-red-400">
      Hello world!
    </h1>
    <Card username="Bilal" email="bilalwdev26@gmail.com"/>
    <Card username="Ayesha" />
   </>
  )
}

export default App
