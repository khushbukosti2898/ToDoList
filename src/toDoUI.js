import React from 'react';
import ToDo from './toDo.js';
class ToDoUI extends React.Component{
    render(){
        let {input,add}=this.props;
        let {text,items}=this.props.data;
        return <div>
                    <input type="text" value={text} onChange={input}></input>
                    <input type="button" value={"Add "+(items.length+1)} onClick={add}></input>
                    
                </div>
    }
}
export default ToDoUI;