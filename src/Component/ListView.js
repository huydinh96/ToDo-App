import React, { Component } from 'react';
import InputEdit from './InputEdit';

class ListView extends Component {
    constructor(props){
        super(props);
        this.state = { 
            list: [], 
            editMode: false, 
            selectedItemTable: "" 
        };
        this.viewList = this.viewList.bind(this);
        this.setEditMode = this.setEditMode.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            list: nextProps.list,
            selectedItemTable: nextProps.selectedItemTable,
            editMode: nextProps.editMode
        })
    }
    checkEditPosition(id) {
        if (this.state.editMode === true && this.state.selectedItemTable === id)
            return true;
        return false;
    }
    setEditMode(id) {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode,
            selectedItemTable: id
        });
    }
    viewList() {
        let table = [];
        const arrTemp = this.props.list;
        if (this.props.list.length === 0) {
          return <h3>No result</h3>;
        }
        arrTemp.map((item, index)=>{
            table.push(
              <div key={index} className="listview">
                  <p>{item.description}</p>
                  <div className="btn-list">
                    <button class="fa fa-pencil" aria-hidden="true" onClick={() =>{this.props.checkEdit(item.id)}}></button>
                    <button class="fa fa-check" aria-hidden="true"></button>
                    <button class="fa fa-times" aria-hidden="true" onClick={()=>{this.props.deleteData(item.id)}}></button>
                  </div>
                  {this.state.editMode && this.state.selectedItemTable === item.id ? (
                <InputEdit
                    editItem={item}
                    receiveValue={value => {
                    this.props.editData(value);
                    }}
                />
                ) : null}
              </div>
            );
        }) 
        return table;
      }
    render() {
        return (
            <div className="list-view">
               {this.viewList()}
            </div>
        );
    }
}

export default ListView;