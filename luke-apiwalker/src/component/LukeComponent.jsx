import React, {useState} from 'react';

const LukeComponent = () => {
    const [selected, setSelected] = useState("people");
    const lukeFunction = () => { 
    axios.get(`https://swapi.dev/api/${selected}/${input}`,
        {Authorization: `Bearer ${process.env.REACT_APP_APITOKEN}`})
        .then(response=>{
        console.log(response);
        })
    return (
    <div>
        <form onSubmit={data}>
            <h2>Search:</h2>
                <select>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
            <h2>Id</h2><input/><input type="submit" />
        </form>
    </div>
    )
}

export default LukeComponent;
