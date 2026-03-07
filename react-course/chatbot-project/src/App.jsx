import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
// import { ChatMessages } from './components/ChatMessages'; // uses named export
import ChatMessages from './components/ChatMessages'; // uses default export 
import './App.css'

function App() {
  // const [chatMessages, setChatMessgaes] = array; // array destructuring
  // const chatMessages = array[0]; // current value of chatMessages or the current data
  // const setChatMessgaes = array[1]; //this is a function. AKA, updater function
  // this is called Lifting the state up where the state is shared by the other components
  const [chatMessages, setChatMessages] = useState([{
    message: 'hello chatbot',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'flip a coin',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Sure! You got tails',
    sender: 'robot',
    id: 'id4'
  }
  ]);
  // {ChatInput()} or <ChatInput />
  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
