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
  const task =''
  item.push({task})
  this.setState({itemArray: item})
}
removeTask= (index)=>{
  this.state.itemArray.splice(index,1);
  this.setState({renderCondition: true});
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
              <div className="task" contentEditable="true">
              {item.task}
              </div>
              <button onClick={()=>this.removeTask({index})}> Delete </button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
}
export default Task;
