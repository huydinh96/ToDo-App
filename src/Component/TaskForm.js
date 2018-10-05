import React, {Component} from 'react';
import './TaskForm.css';
class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      id:'',
      name:'',
      status:false
    }
  }
  componentWillMount(){
    if(this.props.task){
      this.setState({
        id:this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status,
      })
    }
  }
  onChange = (e) =>{
    this.setState({
      name: e.target.value
    });
  }
  onSubmit = (e) =>{
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.onClear();
  }
  onClear =()=>{
    this.setState({
      name:'',
      status:false,
    })
  }
  render(){
    return(
      <div className="col-md-12 pb-3">
          <form onSubmit={this.onSubmit} >
            <input type="input" 
                  name="form-control" 
                  placeholder="Bạn Muốn Thêm Gì..."
                  value ={this.state.name}  
                  onChange ={this.onChange}   
            />
            <button type="submit">Add Task</button>
          </form>
      </div>
    )
  }
}
export default TaskForm;
