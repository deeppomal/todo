import './index.css';
import Modal from './Modal';
import NoteCard from './noteCard';
import React, { useState } from 'react';

const Home = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [tasks,setTasks]=useState([]);
    const [selectedTask,setSelectedTask]=useState({});
    const matches = window.matchMedia("(max-width: 600px)").matches

    const show= () => {
        setIsVisible(true)
    }
    const hide= () => {
        setIsVisible(false)
    }
    const getData=(task)=>{
        var currList = tasks;
        currList.push(task);
        setTasks(currList);
    }
    const editData=(task)=>{
        var currList = tasks;
        let index = currList.findIndex(x=>x.id===task.id)
        currList[index] = task
        setTasks(currList);
        setSelectedTask({})
    }
    const removeNote =(idToRemove)=>{
        let newNotes=tasks.filter((item)=>{
            return item.id!==idToRemove
        })
        setTasks(newNotes)
    }
    const onNoteCardClick=(task)=>{
        setSelectedTask(task);
        show();
    }
    const displayNotes=(tasks)=>{
        let columns = [];
        let notes = [];
        tasks.map((task)=>{
            columns.push( <NoteCard key={task.id} task={task} removeNote={removeNote}  onNoteCardClick={onNoteCardClick} />)
            if(columns.length===4){
                notes.push(<div className="note-list-container" key={task.id}>{columns}</div>);
                columns=[];
            }
        })
        if(columns.length<4){
            notes.push(<div className="note-list-container" key={columns.length}>{columns}</div>);
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
          
                <Modal isVisible={isVisible} hide={hide} getData={getData} editData={editData} selectedTask={selectedTask} />
                {tasks.length===0 &&<div className="no-task-container">
                    <svg xmlns="http://www.w3.org/2000/svg" height={matches?"100px":"200px"} viewBox="0 0 20 20" width={matches?"100px":"200px"} fill="#c9c6c6"><rect fill="none" height="20" width="20"/><path d="M3,5h9v1.5H3V5z M3,11.25h6v1.5H3V11.25z M3,8.12h9v1.5H3V8.12z M16.78,11.99l0.65-0.65c0.29-0.29,0.29-0.77,0-1.06 l-0.71-0.71c-0.29-0.29-0.77-0.29-1.06,0l-0.65,0.65L16.78,11.99z M16.19,12.58L11.77,17H10v-1.77l4.42-4.42L16.19,12.58z"/></svg>
                    <p>Tasks you add appear here</p>
                </div>}
            </main>
        </div>
    );
}
 
export default Home;