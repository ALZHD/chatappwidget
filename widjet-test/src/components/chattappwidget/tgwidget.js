import React, { useEffect, useState } from 'react';
import './chatappwidget.css';
import channel from '../../services/pusher';
import TgMessageline from '../messageline/tgmessageline';

export default function tgwidget() {
  const [messages, setMessages] = useState([]);
  const [lastmessages, setLastmessages] = useState([]);

  useEffect(() => {
    channel.bind('message', (data) => {
      const incomem = data.payload.data.filter((el) => el.fromMe === false);
      setLastmessages(incomem);
    });

    // channel.bind('messageStatus', (data) => {
    //   console.log(data);
    // });

    // channel.bind('chatTag', (data) => {
    //   console.log(data);
    // });
  }, []);

  useEffect(() => {
    setMessages([...messages, ...lastmessages]);
  }, [lastmessages]);

  return (
    <div>
      {messages.length >= 1
        ? (
          <div className="tgwidget">
            {messages.map((el, idx) => (
              <TgMessageline
                data={el}
                key={idx}
              />
            ))}
          </div>
        )
        : (
          <div className="item tgwidget__text">
            скоро тут будут сообщения
          </div>
        )}
    </div>
  );
}
