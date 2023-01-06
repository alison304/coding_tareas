import React, {useState} from 'react';
import axios from 'axios';

const LukeComponent = () => {
    const [selected, setSelected] = useState("people");
    const [input, setInput] = useState(null);

    const lukeFunction = (e) => {
        e.preventDefault();
        axios.get(`https://swapi.dev/api/${selected}/${input}`,
            {Authorization: `Bearer ${process.env.REACT_APP_APITOKEN}`})
            .then(response=>{
            console.log(response);
            })
    };
    return (
        <div>
            <form onSubmit={lukeFunction}>
                <h2>Search:</h2>
                    <select onChange={setSelected}>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
                <h2>Id</h2><input>{setInput}</input><input type="submit" />
            </form>
        </div>
    )
};

export default LukeComponent;
