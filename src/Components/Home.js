import React from 'react';
import { Button } from 'react-bootstrap';

function Home() {
    const data = () => {
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => 
  console.log(json));
    }
  return ( 
        <div>
            <Button onClick={data}>Okay</Button>
        </div>
  )
}

export default Home;
