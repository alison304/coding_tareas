import React, { useState } from 'react';
import axios from 'axios';
import PeopleCard from './PeopleCard';
import FilmCard from './FilmCard';
import ErrorCard from './ErrorCard';

const Landing = () => {
    const [selected, setSelected] = useState("people");
    const [input, setInput] = useState("");
    const [data, setData] = useState();

    const getData = (e) => {
        e.preventDefault();
        axios.get(`https://swapi.dev/api/${selected}/${input}`, { Authorization: `Bearer ${process.env.REACT_APP_APITOKEN}`})
                .then(response=>{
                    setData(response.data);
                })
                .catch(error=>{
                    setSelected("error");
                })                
    };
    return (
        <div>
            <form onSubmit={getData}>
                <label>Search for:</label>
                    <select onChange={(e) => setSelected(e.target.value)}>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
                <label>Id</label>
                <input value={input} name="input" onChange={(e) => setInput(e.target.value)}></input>
                <input type="submit" value="Search" />
            </form>
            {selected === "people" && data !== null ? <PeopleCard information={data} /> : ''}
            {selected === "films" && data !== null ? <FilmCard information={data} /> : ''}            
            {selected === "error" ? <ErrorCard /> : ''}                        
        </div>
    )
};

export default Landing;
