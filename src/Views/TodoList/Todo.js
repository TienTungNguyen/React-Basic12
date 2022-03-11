import React from 'react';
import '../TodoList/Todo.scss'
import {  toast } from 'react-toastify';
import { withRouter } from "react-router";
class Todo extends React.Component{
    state={
        TodoList:[
            {id:'1', title:'Soccer'},
            {id:'2', title:'Do HomeWork'},
            {id:'3', title:'Sleepping'}
        ],
        Todo:{id:"", title:''},
        EditTodo:{}
    }
    handleInput=(event)=>{
        this.setState({
            Todo:{
                id:Math.floor((Math.random()*100)).toString(),
                title:event.target.value
            }    
        })   
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        let {TodoList, Todo}=this.state
        let copyTodoList=[...TodoList,Todo]
        let isTitle= this.state.Todo.title.length===0
        if(isTitle){
            toast.error('Nhap thong tin that baij')
            return
        }else{
            this.setState({
                TodoList:copyTodoList
            })
            toast.success('Nhap thong tin thanh cong')
            this.setState({
                Todo:{id:'',title:''}
            })
        }
    }
    handleDelete=(item)=>{
        let {TodoList}=this.state
        let newTodoList=TodoList.filter((value, index)=>{
            return item.id!==value.id
        })
        this.setState({
            TodoList:newTodoList
        })
        toast.success('Xoa thanh cong')
    }
    handleEdit=(item)=>{
        let{EditTodo, TodoList}=this.state
        let TodoListcopy= TodoList
        let isEmtyEditTodo= Object.keys(EditTodo).length === 0;
        //khi nhan edit
        this.setState({
            EditTodo: item
        })
        // khi nhan save
        if(isEmtyEditTodo===false&& item.id===EditTodo.id){
            //Find index of specific object using findIndex method.    
            let objIndex = TodoListcopy.findIndex((value => value.id === item.id));
            console.log(EditTodo.title)
            //Update object's name property.
            TodoListcopy[objIndex].title = EditTodo.title

            this.setState({
                TodoList:TodoListcopy
            })
            toast.success('Sua thanh cong')
            this.setState({
                EditTodo:{}
            })
        }
    }
    changeEditTodo=(event)=>{
        let EditTodocopy={...this.state.EditTodo}
        EditTodocopy.title = event.target.value
        this.setState({
            EditTodo:EditTodocopy       
        })
    }
    componentDidMount(){
        setTimeout(()=>{this.props.history.push('/about')},4000)
    }
    render(){
        let {TodoList, EditTodo}=this.state
        let {title}=this.state.Todo
        let isEmtyEditTodo= Object.keys(EditTodo).length === 0;
        
        
        return(
            <>
                <div className='Input-box'>
                        <form>
                            <label htmlFor="fname">Nhap thong tin tai day:</label><br/>
                            <input type="text" id="fname" name="fname" value={title} onChange={(event)=>{this.handleInput(event)}}/><br/>
                            <button onClick={(event)=>{this.handleSubmit(event)}}>Submit</button>
                        </form>
                </div>

                <div className='showInput-box'>
                    {TodoList.map((item, index)=>{
                        return(
                            <>
                                <span key={item.id}>
                                    {(isEmtyEditTodo) ?
                                    <h4 className='title-todo'>{index+1} - {item.title}</h4>
                                    :
                                    <>
                                    {item.id===EditTodo.id?
                                        <input value={EditTodo.title} 
                                            onChange={(event)=>{this.changeEditTodo(event)}}/>
                                    :
                                        <h4 className='title-todo'>{index+1} - {item.title}</h4>}
                                    </>
                                    
                                    }
                                    
                                    <button className='edit-btn'onClick={(event)=>{this.handleEdit(item)}}>
                                    {isEmtyEditTodo===false&& item.id===EditTodo.id?
                                    "Save"
                                    :"Edit"}
                                    
                                    </button>
                                    <button className='del-btn' onClick={(event)=>{this.handleDelete(item)}}>Delete</button>
                                </span>
                            </>
                        )
                    })}
                </div>
            </>
        )
    }
}
// export default Todo;
export default withRouter(Todo);