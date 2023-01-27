import { useState } from "react"
import { createAuthor } from "../../services/author.service";

export default function CreateAuthor(props){
    let [fullName, setFullName] = useState("");

    let sendForm = (event) => {
        event.preventDefault();
        createAuthor({
            fullName: fullName
        }).then((response) => {
            setFullName("");
            props.callback(Math.random())
        }).catch((err) =>{
            console.log(err)
            console.log("Fail");
        })
    }

    return (<form onSubmit={sendForm}>
        <div>
            <label>Name</label>
            <input 
                type="text" 
                value={fullName}  
                onChange={(event) => {
                    setFullName(event.target.value);
                }}/>
        </div>
        <button type="submit">Create</button>
    </form>)
}