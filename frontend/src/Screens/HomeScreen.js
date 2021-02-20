import React, { useEffect, useState } from 'react'
import Product from '../components/product';
import axios from 'axios';

export default function HomeScreen(){
    // Using Product from backend
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const {data} = await axios.get('/api/products');
            setProducts(data);
        };
        fetchData();
    }, [])
return(
    <div className = "row center">
        {
        products.map((product) => (
        <Product key={product.id} product={product}></Product>
        ))
        }
    </div>
    );
}