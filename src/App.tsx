import './App.css'
import AiAgentPage from './presentation/aiagentChat/page'
import HomePage from './presentation/home/page'
import AiAgentProvider from './providers/AiAgentProvider'

function App() {

  return (
    <AiAgentProvider>
      <HomePage />
    </AiAgentProvider>
  )
}

export default App
