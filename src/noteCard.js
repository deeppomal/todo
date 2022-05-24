import './noteCard.css';
import { FaRegTrashAlt } from "react-icons/fa";

const NoteCard = ({task,removeNote,onNoteCardClick}) => {
    const noteClickHandler=()=>{
        onNoteCardClick(task)
    }

    return ( 
        <div className="notecard-container" style={{borderColor:task.bgColor.color1}} >
            <div className="note-title-container" style={{backgroundColor:task.bgColor.color2}}>
                <p id='note-title' onClick={noteClickHandler}>
                    {task.title}
                </p>
            </div>
            <p id='note-text' onClick={noteClickHandler}>
                {task.text}
            </p>
            <div className="icons">
                <FaRegTrashAlt id='trash' style={{color:task.bgColor.color1,fontSize:'20px'}} onClick={()=>removeNote(task.id)}/>  
            </div> 
        </div>
     );
}
 
export default NoteCard;