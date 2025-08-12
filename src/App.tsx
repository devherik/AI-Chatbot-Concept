import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-main-bg-color text-main-text-color">
        <div className="flex items-center gap-4 mb-8">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)} className="btn">
            count is {count}
          </button>
          <p className="mt-4">Edit <code>src/App.tsx</code> and save to test HMR</p>
        </div>
      </div>
    </>
  )
}

export default App
