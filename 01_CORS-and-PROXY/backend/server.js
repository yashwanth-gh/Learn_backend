import express from 'express';
import { products } from './product.model.js';
import 'dotenv/config'

const server = express();

server.use(express.json());
server.get("/api/cart",(req,res)=>{
    const cartProducts = products;
    res.send(cartProducts);
})
const port = process.env.PORT || 3000;
server.listen(port,(err)=>{
    if(err)console.log("server not listening");
    console.log(`server is listening at port : ${port}`);
})