import React from 'react';
import { Button } from 'react-bootstrap';


function Home() {
    const data = () => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => console.log(json));
        fetch("https://fakestoreapi.com/carts")
        .then((res) => res.json())
        .then((json) => console.log(json));
    }
  return ( 
        <div>
            <Button onClick={data}>Okay</Button>
        </div>
  )
}

export default Home;
