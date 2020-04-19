import React,{Component} from 'react'
import './App.css';
class Task extends Component{
  constructor(){
    super()
    this.state={
      itemArray: []
    }
  }
  createTask() {
  const item = this.state.itemArray;
  item.push({})
  this.setState({itemArray: item})
}
removeTask(){
  this.state.itemArray.splice(1,1);
}


render() {
  return (
    <div className="Task-List">
      <p>Tasks</p>
      <button onClick={this.createTask.bind(this)}>New Task</button>
      <div>
        {this.state.itemArray.map((item, index) => {
          return (
            <div className="task" key={index}>
              <input   type="text" placeholder={index+1}>
              </input>
              <button onClick={this.removeTask.bind(this)}> Delete </button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
}
export default Task;
