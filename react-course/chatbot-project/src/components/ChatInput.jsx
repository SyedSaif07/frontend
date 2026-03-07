import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
    // component name must start with a captital letter i.e pascal case
    // <> </> called Fragment

    const [inputText, setInputText] = useState('');

    // event is given by the onChange. It is an object
    function saveInputText(event) {
        setInputText(event.target.value)
    }

    function sendMessage() {

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ]
        setChatMessages(newChatMessages);

        const response = Chatbot.getResponse(inputText);
        // state is not updated immediately. state updates when all of the code is finished.
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        setInputText('');
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputText}
                value={inputText} //change the text inside the input
                className="chat-input"
            />
            <button
                onClick={sendMessage}
                className="send-button" // in JS, class is already a keyword so React uses className
            >Send </button>
        </div>
    );
}
