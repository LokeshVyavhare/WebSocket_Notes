import { useState } from "react"
import { socket } from "../../App"

export const Socket_I = () => {
    const [text, setText] = useState('')
    const [message, setMessage] = useState('')
  
    const handleSend = () => {
      socket.emit('send_message', {message:text})
    }
  
    socket.on('recieve_message', (data)=>{
      setMessage(data.message);
    })
    return <div>
        <input type={'text'} placeholder='enter the message' value={text} onChange={(e)=>{
        setText(e.target.value)
      }}/>
      <br/>
      <button onClick={handleSend} className='button blueButton'>Send</button>
      <br/>
      <div>
        <p>{message}</p>
      </div>
    </div>
}