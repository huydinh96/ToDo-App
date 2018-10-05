import React,{Component} from 'react';
import './MessageItem.css';
class MessageItem extends Component{
  onUpdateStatus = () =>{
    // console.log(this.props.task.id);
    this.props.onUpdateStatus(this.props.task.id);
  }
  onDelete = () =>{
    this.props.onDelete(this.props.task.id);
  }
  onUpdate = () =>{
    this.props.onUpdate(this.props.task.id);
  }
  render(){
    var {task} = this.props;
    return(
      <div className={task.status === true ? 'list-message-bg' : 'list-message' }>
        <div className="name-title">
         {task.name}   
        </div>
        <div className="func-crud">
            <button className="fa fa-pencil" onClick={this.onUpdate}></button>
            <button className={task.status === true ? 'fa fa-repeat ' : 'fa fa-check'} onClick={this.onUpdateStatus}></button>
            <button className="fa fa-times" onClick={this.onDelete}></button>
        </div>
      </div>
    )
  }
}

export default MessageItem;
