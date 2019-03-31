import React, {Component} from 'react';
import './TaskForm.css';
class TaskForm extends Component {
  render(){
    return(
      <div className="col-md-12 pb-3">
          <form onSubmit={this.onSubmit} >
            <input type="input" 
                  name="form-control" 
                  placeholder="Bạn Muốn Thêm Gì..."
            />
            <button type="submit">Add Task</button>
          </form>
      </div>
    )
  }
}
export default TaskForm;
