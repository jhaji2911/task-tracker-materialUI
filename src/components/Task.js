import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
const Task = ({task,deleting,onToggle}) => {
    return (
        <div className={` task ${task.reminder ? "reminder": "notreminder"}  `}  onDoubleClick = {() => {onToggle(task.id)}} >
            <h4 style={{margin:"3px"}}>{task.text} 
            <HighlightOffSharpIcon style={{color:"firebrick", marginLeft:"10rem",cursor:"pointer"}} 
            onClick={() => deleting(task.id)}/> </h4>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
