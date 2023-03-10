import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { deleteAuthor, getAuthorList } from "../../services/author.service";
import "./style.css"

const AuthorList = (props) => {
    const navigate = useNavigate();
    const [authorList, setAuthorList] = useState([]);

    const getAuthorListFromService = async () => {
        try {
            const data = await getAuthorList();
            console.log(data);
            setAuthorList(data.data.authorList);
        } catch (error) {
            console.log("getAuthorListFromService", error);            
        }
    };

    const removeAuthorFromService = async (id) => {
        try {
            await deleteAuthor(id);
            const newAuthorList = authorList.filter(author => author._id !== id);
            setAuthorList(newAuthorList);
        } catch (error) {
            console.log("removeStudentFromService", error);            
        }
    }

    useEffect(() => {
        getAuthorListFromService();
    },[props.render]);
    

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/new">Add an author</Link>
            <p className="purple">We have quotes by:</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList.length > 0 ? authorList.map((author, idx) => (
                            <tr key={author._id}>
                                <td>{author.fullName}</td>
                                <td>
                                    <Button variant="outline-info" onClick={() => navigate(`/edit/${author._id}`)} >Editar</Button>
                                    <Button variant="outline-danger" onClick={() => removeAuthorFromService(author._id)} >Eliminar</Button>
                                </td>
                            </tr>
                        )) : 
                            <tr>
                                <td colSpan={8}>No hay ning??n autor inscrito</td>
                            </tr>
                    }
                </tbody>
            </Table>
        </div>
    )

}

export default AuthorList;
