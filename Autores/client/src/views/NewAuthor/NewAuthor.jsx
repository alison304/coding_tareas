import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const NewAuthor = () => {
  return (
    <div className="NewAuthor">
      <label>Home</label>
      <h2>Add new author</h2>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Name:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <input>Leslie Jones</input>
            <td>
                <Button variant="primary">Cancel</Button>
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

export default NewAuthor
