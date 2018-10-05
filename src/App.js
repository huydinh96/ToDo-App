import React, { Component } from 'react';
import './App.css';
import TaskForm from './Component/TaskForm';
import MessageList from './Component/MessageList';
import { database } from 'firebase';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks:[],
    }
  }
  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      var tasks =JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks:tasks
      })
    }
  }
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  generateID(){
    return this.s4() + this.s4()+ '-'+ this.s4() + this.s4();
  }
  onSubmit = (data) => {
    // console.log(data);    
    var {tasks} = this.state;
    data.id = this.generateID();
    tasks.push(data);
    this.setState({
      tasks:tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  onUpdateStatus = (id) =>{
    var {tasks} = this.state; 
    var index = this.findIndex(id);
    if(index!==-1){
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks:tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  }
  findIndex =(id)=>{
    var {tasks }= this.state;
    var result = -1;
    tasks.forEach((task,index)=>{
      if(task.id ===id){
        result = index;
      }
    })
    return result;
  }
  onDelete = (id) =>{
    var {tasks} = this.state; 
    var index = this.findIndex(id);
    if(index!==-1){
      tasks.splice(index,1);
      this.setState({
        tasks:tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  }
  onUpdate = (id) =>{

  }
  render() {
    var {tasks} = this.state;
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-6">
            <TaskForm onSubmit ={ this.onSubmit}/>
            <MessageList tasks={tasks} 
                        onUpdateStatus= {this.onUpdateStatus}
                        onDelete ={this.onDelete}
                        onUpdate = {this.onUpdate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
