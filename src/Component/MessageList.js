import React, {Component } from 'react';
import MessageItem from './MessageItem';
class MessageList extends Component{
  render(){
    var {tasks} = this.props;
    var elmTask = tasks.map((task,index)=>{
      return <MessageItem 
                key={task.id} 
                task={task}
                onUpdateStatus ={this.props.onUpdateStatus}
                onDelete = {this.props.onDelete}
                onUpdate = {this.props.onUpdate}
              />
    })
    return(
      <div className="col-md-12">
          {elmTask}
      </div>
    );
  }
}
export default MessageList;
