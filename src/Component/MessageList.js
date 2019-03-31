import React, {Component } from 'react';
import MessageItem from './MessageItem';
class MessageList extends Component{
  render(){
    return(
      <div className="col-md-12">
          <MessageItem/>
      </div>
    );
  }
}
export default MessageList;
