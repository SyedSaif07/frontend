import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'


function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null); /* useRef = automatically save an HTML element from the component. ref is a container with special React features*/

  /* useEffect = run some code after the component is created or updated 
     Put Hooks at the top of the component. Dont put hooks inside anything like if block or function*/
  useEffect(() => {
    const containerElem = chatMessagesRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight
      // scrollTop means how far from the top should we scroll. scrollHeight gives the total height of the element
    }
  }, [chatMessages]); //[] controls when use effect runs. empty array useEffect only runs once
  // runs this fn everytime chatMessages changes called dependency array 

  /* If we update the data directly React will not update the HTML. 
     If we use the function setChatMessgaes,React will update the HTML */
  // function sendMessage() {
  // chatMessages.push({
  //     message: "test",
  //     sender: "user",
  //     id: crypto.randomUUID()

  // });

  // console.log(chatMessages)
  // ... is called a spread operator which copies the array from the parent array to another array
  //     setChatMessgaes([
  //         ...chatMessages,
  //         {
  //             message: 'test',
  //             sender: 'user',
  //             id: crypto.randomUUID()
  //         }
  //     ]);
  // }

  // {} save any type of value in a prop (including a function)
  // onClick is known as the event and sendMessage is known as the event handler
  // for onClick just give the function name and not call the function like sendMessage()
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {
        chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          );
        })
      }
    </div>
  );

}


export default ChatMessages // this is called a defaut export