import { socket } from "../../App"
import { useState } from 'react';
import style from './style.module.css'
import { useEffect } from "react";

export const Chats = () => {
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);


    const handleSend = () => {
        socket.emit('send_message', { message: text })
    }

    socket.on('recieve_message', ({ messages }) => {
        setMessages(messages)
    })

    return <div className={style.chats}>
        <div className={style.chatInputBox}>
            <input
                type="text"
                placeholder="Type Message ...."
                value={text} onChange={(e) => {
                    setText(e.target.value)
                }}
                className={style.textInp}
            />
            <button className='button blueButton' onClick={handleSend} disabled={text === ''}>Send</button>
        </div>
        <div className={style.msgesBox}>
            {messages.map((message, e) => <p key={e + 'message'}>{message}</p>)}
        </div>
    </div>
}