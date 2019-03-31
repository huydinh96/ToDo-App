import React, { Component } from 'react';
import './App.css';
import TaskForm from './Component/TaskForm';
import MessageList from './Component/MessageList';
import {databaseCloud} from './firebase';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks:[],
    }
  }
  fetchData = () =>{
    databaseCloud.collection("todos").get().then(querySnapshot =>{
      let arrTemp = [];
      querySnapshot.forEach(doc =>{
        const itemTemp = {
          ...doc.data(),
          id: doc.id
        };
        arrTemp.push(itemTemp);
        // console.log("dadada",doc.data());
      });
      this.setState({
        tasks: arrTemp
      });
    })
  }
  componentWillMount(){
   this.fetchData();
  }
  
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-6">
            <TaskForm/>
            <MessageList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
