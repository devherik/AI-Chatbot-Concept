import './App.css'
import AiAgentPage from './presentation/aiagent-chat/page'
import AiAgentProvider from './providers/AiAgentProvider'

function App() {

  return (
    <AiAgentProvider>
      <AiAgentPage />
    </AiAgentProvider>
  )
}

export default App
