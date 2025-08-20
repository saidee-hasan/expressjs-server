import { IncomingMessage, ServerResponse } from "http";
import { products } from "../data/product";

export  const handleProduct=async(req:IncomingMessage,res:ServerResponse)=>{
const url = req.url;
res.end(JSON.stringify(products))



}