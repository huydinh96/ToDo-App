import React,{Component} from 'react';
import './MessageItem.css';
class MessageItem extends Component{
  render(){
    return(
      <div className= "list-message-bg">
        <div className="name-title">
        </div>
        <div className="func-crud">
            <button className="fa fa-pencil"></button>
            <button className= "fa fa-repeat"></button>
            <button className="fa fa-times"></button>
        </div>
      </div>
    )
  }
}

export default MessageItem;
