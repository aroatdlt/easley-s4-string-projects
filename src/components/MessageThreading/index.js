import React, { Component } from 'react';
import './MessageThreading.scss';

class MessageThreading extends Component {
  render() {
    const { messageInfo } = this.props;
    return (
      <section className="messageThreading__container">
        <img
          className="messageThreading__image"
          src={messageInfo.avatar_url}
          alt="User"
        />
        <div className="messageThreading__data">
          <h2 className="messageThreading__name">{messageInfo.username}</h2>
          <p className="messageThreading__message">
            {messageInfo.description}
          </p>
          <small className="messageThreading__date">{messageInfo.date}</small>
        </div>
      </section>
    );
  }
}

export default MessageThreading;
