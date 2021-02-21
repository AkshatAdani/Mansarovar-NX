import React, { useEffect, useState } from 'react';
import Product from '../components/product';
import axios from 'axios';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function HomeScreen(){
    // Using Product from backend
    const [products, setProducts] = useState([]); //react hook
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=>{
        const fetchData = async () => {
            try{
                setLoading(true);
                const {data} = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            }
            catch(err){
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [])
    return(
        <div>
            {loading? (<LoadingBox></LoadingBox>)
            :
            error? (<MessageBox variant="danger">{error}</MessageBox>)
            :(
                <div className = "row center">
                    {
                        products.map((product) => (
                            <Product key={product.id} product={product}></Product>
                    ))}
                </div>
            )}
        </div>
       );
    }
                    
            

