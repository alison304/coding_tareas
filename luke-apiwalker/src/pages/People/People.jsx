import React, { useState, useEffect } from "react";
import axios from 'axios';
import PeopleCard from '../../component/PeopleCard';
import ErrorCard from '../../component/ErrorCard';
import { useParams } from "react-router-dom";

const People = () => {
    const [flagAPI, setFlagAPI] = useState(true);
    const [data, setData] = useState();
    const {id} = useParams();

    useEffect(() => {
        getData(id);
    },[id]);
    
    const getData = (id) => {
        console.log(id);
        axios.get(`https://swapi.dev/api/people/${id}`, { Authorization: `Bearer ${process.env.REACT_APP_APITOKEN}`})
                .then(response=>{
                    setFlagAPI(true);
                    setData(response.data);
                })
                .catch(error=>{
                    setFlagAPI(false);
                })                
    };
    return (
        <div>
            {flagAPI ? <PeopleCard information={data} /> : <ErrorCard />}
        </div>
    )
};

export default People;
