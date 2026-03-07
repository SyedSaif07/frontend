import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'


// destructuring shortcut { message, sender }
export function ChatMessage({ message, sender }) {
  // props are short for properties
  // console.log(props)
  // const message = props.message 
  // const sender = props.sender
  // const { message, sender } = props; // destructuring function ChatMessage(props){}
  /*   
  if (sender === "robot") {
     return (
         <div>
             <img src="robot.png" width="50" />
             {message}
         </div>
     );
  }
  */
  // value1(condition) && value2(return value) - if value1 if true then executes value2
  // && guard operator
  // ?: ternary operator value1? value2: value3 if value 1 is true then value 2 else value 3
  return (
    <div className={
      sender === "user"
        ? "chat-message-user"
        : "chat-message-robot"
    }>
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />

      )}
    </div>
  );
}