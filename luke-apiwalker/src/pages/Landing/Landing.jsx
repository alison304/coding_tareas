import React, { useState } from 'react';
import axios from 'axios';
import PeopleCard from '../../component/PeopleCard';
import FilmCard from '../../component/FilmCard';
import StarshipCard from '../../component/StarshipCard';
import VehicleCard from '../../component/VehicleCard';
import SpecieCard from '../../component/SpecieCard';
import PlanetCard from '../../component/PlanetCard';
import ErrorCard from '../../component/ErrorCard';
import "./Landing.css";

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

    const selectChangeValue = (value) => {
        setSelected(value);
        setData(null);
    };

    return (
        <div>
            <form onSubmit={getData}>
                <label>Search for: &nbsp;</label>
                    <select className='select-form' onChange={(e) => selectChangeValue(e.target.value)}>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label>Id &nbsp;</label>
                <input value={input} name="input" onChange={(e) => setInput(e.target.value)}></input>
                &nbsp;&nbsp;&nbsp;
                <input className="btn-search" type="submit" value="Search" />
            </form>
            {selected === "people" && data !== null ? <PeopleCard information={data} /> : ''}
            {selected === "films" && data !== null ? <FilmCard information={data} /> : ''}
            {selected === "starships" && data !== null ? <StarshipCard information={data} /> : ''}
            {selected === "vehicles" && data !== null ? <VehicleCard information={data} /> : ''}
            {selected === "species" && data !== null ? <SpecieCard information={data} /> : ''}
            {selected === "planets" && data !== null ? <PlanetCard information={data} /> : ''}
            {selected === "error" ? <ErrorCard /> : ''}                        
        </div>
    )
};

export default Landing;
