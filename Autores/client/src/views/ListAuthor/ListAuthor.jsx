import { useEffect } from "react";
import { useState } from "react";
import { deleteAuthor, getAuthorList } from "../../services/author.service";
import { Link } from "react-router-dom";

export default function ListAuthor(props){
    const [authorList, setAuthorList] = useState([])

    const fetchAuthorList = ()=>{
        getAuthorList()
            .then((data)=> {
                console.log(data);
                setAuthorList(data.data.authorList);
            })
            .catch((err)=>{
                console.log(err);
            })
        }

    useEffect(() =>{
        fetchAuthorList();
    }, [props.render]);
    
    return (
        <div>
            <h1>All Authors</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre Autor</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {authorList.map((author, index)=> 
                    <tr key={`${index}-row`}>
                        <td key={`${index}-name`}>{author.name}</td>
                        <td key={`${index}-action`}>
                            <button>
                                <Link state={{author: author}} to={author._id}>Detalles</Link>
                            </button>
                            <br />
                            <button onClick={()=> {
                                deleteAuthor(author._id)
                                    .then((data) => {
                                        fetchAuthorList();
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    });
                            }}>Eliminar</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}
