import { Component } from "react";
import "./Todo.css"

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            tasks:[{task: "Learn React", id:1 }, {task: "Learn JavaScript", id:2 }, {task: "Learn Web Devlopment", id:3 }],
            currTask:""
        }
    }
    
    handleChange = (e)=>{
        this.setState({
            currTask:e.target.value
        })
    }

    handleAddTask = ()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:""
        })
    }

    handleDelete = (id)=>{
        let narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id !== id
        })
       this.setState({
        tasks:[...narr]
       })
    }

    render(){
        return(
            <div>
                <div className="input-box">
                    <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
                    <button onClick={this.handleAddTask}>Add Task</button>
                </div>
                <ul>
                    {this.state.tasks.map((taskObj)=>(
                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            {/* <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button> */}
                            <i class="fa fa-trash" onClick={()=>this.handleDelete(taskObj.id)}></i>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Todo;