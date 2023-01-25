import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const AuthorForm = () => {
    return (
    <div className='AuthorForm'>
        <label>Add an author</label>
        <h2>We have quotes by:</h2>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Author</th>
            <th>Actions available</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Bill Bryson</td>
            <td>
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
            </td>
            </tr>
            <tr>
            <td>Ada Lovelace</td>
            <td>
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
            </td>
            </tr>
            <tr>
                <td colSpan={2}>No hay autores</td>
            </tr>
        </tbody>
        </Table>
    </div>
    )
}

export default AuthorForm
