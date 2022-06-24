import { Component } from "react";
import "./Todo.css"

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            tasks:[{task: "Learn React", id:1 }, {task: "Learn JavaScript", id:2 }, {task: "Learn Web Devlopment", id:3 }, {task: "Learn DSA", id:4 }],
            compTasks:[],
            currTask:""
        }
    }
    
    handleChange = (e)=>{
        this.setState({
            currTask:e.target.value
        })
    }

    handleAddTask = ()=>{
        if(this.state.currTask === "") {
             alert("Write Your Task..");
        }
        else{
            this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask, id:this.state.tasks.length+1}],
            currTask:""
        })
        }
    }

    handleDelete = (id)=>{
        let narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id !== id
        })
       this.setState({
        tasks:[...narr]
       })
    }

    handleDelete2 = (id) =>{
        let val = this.state.compTasks.filter((taskObj)=>{
            return taskObj.id !== id
        })
       this.setState({
        compTasks:[...val]
       })
    }

    handleComplete = (id) =>{
        let narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id !== id
        })

        let addDone = this.state.tasks.filter((taskObj)=>{
            return taskObj.id === id
        })

        this.setState({
            tasks:[...narr]
        })
        this.setState({
            compTasks:[...addDone, ...this.state.compTasks]
        })

    }

    clearDoneTask = (id)=>{
       this.setState({
        compTasks:[]
       })
    }

    clearTask = (id)=>{
        this.setState({
         tasks:[]
        })
     }

    render(){
        return(
            <div>
                <div className="title">Todo App</div>
                <div className="input-box">
                    <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
                    <button onClick={this.handleAddTask}>Add Task</button>
                </div>

                <div className="reset-box">
                    <button onClick={this.clearTask}>Clear Added Task</button>
                    <button onClick={this.clearDoneTask}>Clear Done Task</button>
                </div>

                <ul>
                    {this.state.tasks.map((taskObj)=>(
                        <li key={taskObj.id}>
                            <i className="fa fa-check" onClick={()=>this.handleComplete(taskObj.id)}></i>
                            <p>{taskObj.task}</p>
                            <i className="fa fa-trash" onClick={()=>this.handleDelete(taskObj.id)}></i>
                        </li>
                    ))}
                </ul>
                <div className="compleated-Div"></div>
                <ul>
                    {this.state.compTasks.map((taskObj)=>(
                        <li key={taskObj.id}>
                            <p><s>{taskObj.task}</s></p>
                            <i className="fa fa-trash" onClick={()=>this.handleDelete2(taskObj.id)}></i>
                        </li>
                    ))}
                </ul>

                
            </div>
        )
    }
}

export default Todo;