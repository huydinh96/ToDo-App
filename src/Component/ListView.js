import React, { Component } from 'react';

class ListView extends Component {
    constructor(props){
        super(props);
        this.state= {
            list:[],
        };
        this.viewList = this.viewList.bind(this);
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
                    <button class="fa fa-check" aria-hidden="true"></button>
                    <button class="fa fa-pencil" aria-hidden="true"></button>
                    <button class="fa fa-times" aria-hidden="true"></button>
                  </div>
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