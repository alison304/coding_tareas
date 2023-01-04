import React, {useState} from 'react';

function Form() {

    const [taskList, setTaskList] = useState([
        ["Reparar la puerta", false],
        ["Hacer tareas de React", true],
        ["Estudiar Apis", false]
    ]);

    const [taskName, setTaskName] = useState();


    function addTask() {
        setTaskList(current => [...current, [taskName, 0]]);
        setTaskName("");
    }    

    function deleteTask(index) {
        setTaskList(current => {
            return current.filter((_, i) => i !== index)
        });
    }

    function checkTask(index) {
        setTaskList(current => {
            return current.map((element, position) => {
                return position === index ? [element[0], !element[1]] : element;
              })
        });        
    }    

    return (
        <form>
                <input placeholder="Agrega una tarea ..." type="text" value={taskName}  onChange={(e) => { setTaskName(e.target.value) }} />
                <br/>                
                <button type="button" className='btn-add' onClick={addTask}>Add</button>                                        
                <br/>                                
                <br/>                                
                    {taskList.map((task, index) =>
                        <React.Fragment key={task[0]}>                        
                            {
                                task[1] ?
                                <span style={{textDecoration: 'line-through'}}>{task[0]}</span> :
                                <span>{task[0]}</span>
                            } &nbsp;                            
                            <input type="checkbox" checked={task[1]} onChange={() => checkTask(index)} /> &nbsp;
                            <button className='btn-delete' onClick={() => deleteTask(index)}>Delete</button>                      
                            <br/>
                        </React.Fragment>                    
                    )}
        </form>
    );
}

export default Form;
