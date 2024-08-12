import ChatBot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './App.css'
import config from './chatBot/cofig'
import ActionProvider from './chatBot/ActionProvider'
import MessageParser from './chatBot/MessageParser'

function App() {

  return (
    <div className='App'>
      <ChatBot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
      />
    </div>
  )
}

export default App
