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
removeTask= (index)=>{
  this.state.itemArray.splice(index,1);
  this.setState({renderCondition: true});
  console.log(this.state.itemArray);
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
              <div contentEditable="true">Wowee
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
