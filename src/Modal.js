import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './modal.css';
import React, { useState, } from 'react';

const Modal =({isVisible,hide,getData})=> {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const closeBtnHandler =()=>{
        setTitle('');
        setText('');
        hide();
    }
    const saveBtnHandler =()=>{
        setTitle('');
        setText('');
        hide();
        getData(title,text)
    }
    return (
        <Rodal visible={isVisible} animation={'door'} showCloseButton={false} onClose={hide}   >
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