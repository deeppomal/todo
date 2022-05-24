import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './modal.css';
import React, { useEffect, useState } from 'react';
import getBgColor from './utils/getColor';

const Modal =({isVisible,hide,getData,editData,selectedTask})=> {

    const [title, setTitle] = useState(selectedTask.title);
    const [text, setText] = useState(selectedTask.text);
    const matches = window.matchMedia("(max-width: 600px)").matches

    useEffect(()=>{
        setTitle('');
        setText('');
        setTitle(selectedTask.title)
        setText(selectedTask.text)
    },[selectedTask.title,selectedTask.text])

    const createTaskID =()=>{
        let timestamp = +new Date
        let rand = parseInt(Math.random() * 1e5);
        let finalNumb = timestamp * rand;
        let string = (Math.random() + 1).toString(36).substring(7)
        let mixedID = finalNumb + '-' + string;
        return mixedID;
    }
    const closeBtnHandler =()=>{
        hide();
    }
    const saveBtnHandler =()=>{
        var titleInput = document.getElementById('modal-title');
        if (titleInput.value.trim() === '') {
            titleInput.classList.add('error');
            setTimeout(function() {
                titleInput.classList.remove('error');
            }, 300);
        } else {
            
            hide();
            if(selectedTask?.title)
                editData({id:selectedTask.id,title,text,bgColor:selectedTask.bgColor})
            else
                getData({id:createTaskID(),title,text,bgColor:getBgColor()})    
                
            setTitle('');
            setText('');
        }
    }
    return (
        <Rodal visible={isVisible} animation={'door'} showCloseButton={false} onClose={hide} customStyles={matches?{width:'80%'}:{width:400}} >
            <div className="modal-container">
                <div className="modal-text-container">
                    <input type="text" id='modal-title' placeholder='Title...'  value={title} onChange={(title)=>setTitle(title.target.value)} />
                    <textarea type="text" id='modal-text' placeholder='Tasks...'  value={text} onChange={(text)=>setText(text.target.value)} />
                </div>
                <div className="modal-btn-container">
                    <button id='modal-close-btn' onClick={closeBtnHandler}>Close</button>
                    <button id='modal-save-btn' onClick={saveBtnHandler}>Save</button>
                </div>
            </div>
        </Rodal>
    );
}

export default Modal