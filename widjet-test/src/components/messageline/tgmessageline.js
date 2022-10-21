import React, { useState } from 'react';
import noavatar from './img/ffa09aec412db3f54deadf1b3781de2a.png';
import './messageline.css';

export default function tgmessageline(props) {
  const { message } = props.data;
  const { type } = props.data;
  const { fromUser } = props.data;
  const { chat } = props.data;
  const { time } = props.data;

  const formatDate = new Intl.DateTimeFormat('ru', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  const formattedDate = formatDate.format(time * 1000);
  const [exactTime, setExactTime] = useState(formattedDate);

  // const formattedDate = formatter.format(time * 1000);
  return (
    <div className="box">
      <div className="box__line">
        {chat.image
          ? (
            <div className="item box__line__image-user">
              <img src={chat.image} alt={message.name} />
            </div>
          )
          : (
            <div className="item box__line__image-user">
              <img src={noavatar} alt="noavatar" />
            </div>
          )}
        <div className="item box__line__name">
          {fromUser.name}
        </div>
        <div className="item box__line__date">
          {exactTime}
        </div>
      </div>
      <div className="box__message">
        <div className=" item box__message__text">
          {message.text}
        </div>
        <div className="item box__message__caption">
          {message.caption}
        </div>
        {type === 'image'
      && (
      <div className="item box__message__image">
        <img src={message.file.link} alt={message.file.name} />
      </div>
      )}
        {type === 'voice'
      && (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <audio className="item box__message__audio" controls>
        <source src={message.file.link} type={message.file.contentType} />
        Your browser does not support the audio tag.
      </audio>
      )}
        {type === 'video'
      && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video className="item box__message__video" controls>
          <source src={message.file.link} type={message.file.contentType} />
          Your browser does not support the video tag.
        </video>
      )}
        {type === 'file'
      && (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <div className="item box__message__filetype">
        скачать файл &nbsp;
        <a href={message.file.link} download>
          {message.file.name}
        </a>
      </div>
      )}
      </div>
    </div>
  );
}
