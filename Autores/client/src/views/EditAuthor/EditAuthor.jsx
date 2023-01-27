import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

const EditAuthor = () => {
    let navigate = useNavigate();
    
    return (
    <div className='EditForm'>
        <h1>Favorite authors</h1>
        <Link to="/">Home</Link>
        <h2>Edit this author</h2>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Name:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <input>Ada Lovelace</input>
            <td>
                <Button variant="primary" onClick={() => navigate("/")}>Cancel</Button>
                <Button variant="primary">Submit</Button>
            </td>
            </tr>
            <tr>
                <td colSpan={1}></td>
            </tr>
        </tbody>
        </Table>
    </div>
    )
}

export default EditAuthor;