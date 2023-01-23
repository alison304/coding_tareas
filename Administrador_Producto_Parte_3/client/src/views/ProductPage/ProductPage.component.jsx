import { useLocation } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../services/products.service";

export default function ProductPage(props){
    const location = useLocation();
    const { product } = location.state;
    const navigate = useNavigate();

    return (
        <>
            {product && 
            <div>
                <h1>{product.name}</h1>
                <h3>Price: ${product.price}</h3>
                <h3>Description: {product.description}</h3>
                <button><Link to="edit" state={{product}}>Editar</Link></button>                
                <button onClick={()=> {
                                deleteProduct(product._id)
                                    .then((data) => {
                                        navigate("/");
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    });
                            }}>Delete</button>                
            </div> }
        </>

    )
}