import React from 'react';
import ToDoUI from './toDoUI';

class ToDo extends React.Component{
    state={
        items:[],
        text:'',
        count:0
    }
    input = e =>{
        this.setState({
            text:(e.target.value)
        })
    }
    add = e =>{
        let {text,items,count}= this.state;
        //e.preventDefault();
        if (!text.length) {
        return;
        }
        const newItem = {
        text: text,
        count: count+1
        };
        this.state.items.push(newItem);
        this.setState({
            items:items,
            text:'',
            count: count+1
            
        })     
  }
    delete = (key) =>{
            //console.log(key);
            let {count,items}=this.state;
            //console.log(count);
            const newItems=items.filter(()=>{
                if(key==count){
                    console.log("match")
                }
                else{
                    console.log("notmatch")
                }
            })
            

    }
    
    render(){
        let {items}=this.state;
        return(
            <div>
                <h3>what need To Complete???</h3>
                {/* {this.state.items} */}
                
                    {items.map(item => (
                        <div>
                            <li key={item.count}>{item.count+"."}{item.text}</li>
                            <input type="button" value="Completed" onClick={this.delete(item.count)}></input>
                        </div>
                    ))}
                
                <ToDoUI input={this.input} add={this.add} data={this.state}/>
            </div>
        )
    }
}
export default ToDo;