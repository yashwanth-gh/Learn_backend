import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card';
import axios from 'axios';

function App() {
  const [products, setSetproducts] = useState([]);

  useEffect(()=>{
    axios.get('/api/cart')
    .then(res=>setSetproducts(res.data))
    .catch(err=>console.log(err))
  })
  return (
    <>
    <h1>Products Cart</h1>
    <div className='grid grid-cols-3 gap-2'>
    {
      products.map(product=>(
        <div key={product.id} className='inline-block'>
          <Card 
          imageLink={product.thumbnail}
          title={product.title}
          brand={product.brand}
          desc={product.description}
          price={product.price}
          />
        </div>
      ))
    }
    </div>
    </>
  )
}

export default App
