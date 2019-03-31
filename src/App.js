import React, { Component } from 'react';
import './App.css';
import {databaseCloud} from './firebase';
import InputAdd from './Component/InputAdd';
import ListView from './Component/ListView';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
      data:[],
    };
    this.addDataMain = this.addDataMain.bind(this);
    this.deleteData = this.deleteData.bind(this);
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
        data: arrTemp
      });
    })
  }
  componentWillMount(){
   this.fetchData();
  }
  
  async addDataMain(value) {
    if (value.length === 0) {
      alert("Empty");
      return false;
    }
    // let check = false;
    let respone = await databaseCloud.collection("todos").add({
      description: value
    });

    if (respone.id) {
      const arrTemp = this.state.data;
      arrTemp.push({
        description: value,
        id: respone.id
      });
      this.setState({
        ...this.state,
        data: arrTemp
      });
      alert("Succes");
    } else {
      alert("Failed");
    }
  }
  async deleteData(id){
    try{
      let res = await databaseCloud.collection("todos").doc(id).delete();
      var arrTemp = this.state.data.filter(item =>{
        return item.id !==id
      });
      this.setState({
        data: arrTemp
      })
      alert("Success");
    }catch{
      alert("Failed")
    }
  }
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-6">
            <h3>ToDo App</h3>
            <InputAdd addData = {this.addDataMain}/>
            <ListView list={this.state.data}
              deleteData = {this.deleteData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
