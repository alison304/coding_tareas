import { useState } from "react"
import { createProduct } from "../../services/products.service";
import "./style.css"

export default function CreateProductPage(props){
    let [productTitle, setProductTitle] = useState("");
    let [productPrice, setProductPrice] = useState(1);
    let [productDescription, setProductDescription] = useState("");

    let sendForm = (event) => {
        event.preventDefault();
        createProduct({
            name: productTitle,
            price: productPrice,
            description: productDescription
        }).then((response) => {
            console.log("Done");
        }).catch((err) =>{
            console.log(err)
            console.log("Fail");
        })
    }



    return (
        <div className="container">
            <div>
                <h1>Product Manager</h1>
            </div>
            <form onSubmit={sendForm}>
                <div>
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={productTitle}  
                        onChange={(event) => {
                            setProductTitle(event.target.value);
                        }}/>
                </div>
                <div>
                    <label>Price</label>
                    <input 
                        type="number"
                        value={productPrice}  
                        onChange={(event) => {
                            setProductPrice(parseInt(event.target.value));
                        }}/>
                </div>
                <div>
                    <label>Description</label>
                    <input 
                        type="text" 
                        value={productDescription}  
                        onChange={(event) => {
                            setProductDescription(event.target.value);
                        }}/>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}