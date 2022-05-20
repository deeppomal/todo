import './index.css';
import Modal from './Modal';
import NoteCard from './noteCard';
import React, { useState } from 'react';

const Home = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [tasks,setTasks]=useState([]);
    const show= () => {
        setIsVisible(true)
    }
    const hide= () => {
        setIsVisible(false)
    }
    const getData=(title,text)=>{
        var taskObj = {title:title,text:text};
        var currList = tasks;
        currList.push(taskObj);
        setTasks(currList)

    }

    const getBgColor=()=>{
        const bgColor = [{'color1':'#9cbbde','color2':'rgba(237,243,252,255)'},{'color1':'#f4e2b3','color2':'rgba(254,250,243,255)'},
        {'color1':'#9ddf95','color2':'rgba(243,252,242,255)'},{'color1':'#e6aab7','color2':'rgba(251,240,241,255)'},{'color1':'#d48b4f','color2':'rgba(225,222,214,255)'},
        {'color1':'#aa5bdd','color2':'rgba(214,210,221,1)'},{'color1':'#d97e8d','color2':'rgba(222,210,212,255)'},{'color1':'#e2c589','color2':'rgba(224,221,214,255)'}];
    
        return bgColor[parseInt(Math.random()*8)];
    }
    const removeNote =(indexToRemove)=>{
        let newNotes=tasks.filter((item,index)=>{
            return index!==indexToRemove
        })
        setTasks(newNotes)
    }
    const displayNotes=(tasks)=>{
        
        let columns = [];
    
        let notes = [];
        tasks.map((task,index)=>{
            columns.push( <NoteCard title={task.title} text={task.text} bgColor={getBgColor()} key={index} removeNote={removeNote} indexOfNote={index} />)
            if(columns.length===4){
                notes.push(<div className="note-list-container">{columns}</div>);
                columns=[];
            }
        })
        if(columns.length<4){
            notes.push(<div className="note-list-container">{columns}</div>);
        }
        return notes;
    }

    return ( 
        <div className="container">
            <header>
                <p id='title'>TODO</p>
                <button id='create-task-btn' onClick={show}>Create Task</button>
            </header>
            <main>
                <p id='title2'>All Tasks</p>
                {displayNotes(tasks)}
          
                <Modal isVisible={isVisible} hide={hide} getData={getData} />
                {tasks.length==0 &&<div className="no-task-container">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="200px" viewBox="0 0 20 20" width="200px" fill="#c9c6c6"><rect fill="none" height="20" width="20"/><path d="M3,5h9v1.5H3V5z M3,11.25h6v1.5H3V11.25z M3,8.12h9v1.5H3V8.12z M16.78,11.99l0.65-0.65c0.29-0.29,0.29-0.77,0-1.06 l-0.71-0.71c-0.29-0.29-0.77-0.29-1.06,0l-0.65,0.65L16.78,11.99z M16.19,12.58L11.77,17H10v-1.77l4.42-4.42L16.19,12.58z"/></svg>
                    <p>Tasks you add appear here</p>
                </div>}
            </main>
        </div>
     );
}
 
export default Home;