import './noteCard.css';
import { FaRegTrashAlt } from "react-icons/fa";
const NoteCard = ({title,text,bgColor,removeNote,indexOfNote}) => {
    return ( 
        <div className="notecard-container" style={{borderColor:bgColor.color1}}>
                <div className="note-title-container" style={{backgroundColor:bgColor.color2}}>
                    <p id='note-title'>
                        {title}
                    </p>
                </div>
                <p id='note-text'>
                    {text}
                </p>
                <div className="icons">
                    <FaRegTrashAlt id='trash' style={{color:bgColor.color1,fontSize:'20px'}} onClick={()=>removeNote(indexOfNote)}/>  
                </div>
                
        </div>
     );
}
 
export default NoteCard;