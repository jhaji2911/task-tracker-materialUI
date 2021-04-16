import {useState} from  'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
const AddTasks = ({onAdd}) => {
    const [text , setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder , setReminder] = useState(false)

    const submit = (e) => {
        e.preventDefault();

        if(!text || !day)
        {
            alert("Please fill all fields!");
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }


    return (
       
            <form className="form" onSubmit={submit} >
         <div className="form-control" > <TextField id="standard-basic" label=" New Task Details" value={text}
         onChange={(e) => setText(e.target.value) }/></div> 
         <div className="form-control" > <TextField id="standard-basic" label="Task Day"  value={day}
         onChange = {(e) => setDay(e.target.value)}/></div> 
        <div className="form-control">
       <label>Reminder</label> <Checkbox
       checked={reminder}
        value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        </div>
        <div className="form-control">
        <Button variant="contained" color="primary" type="submit">Save Task</Button>
        </div>
              </form>
    )
}

export default AddTasks
