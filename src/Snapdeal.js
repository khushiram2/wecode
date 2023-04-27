import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from 'react';


export const Snapdeal = () => {
    const [product,setproduct]=useState([])
    useEffect(()=>{
        fetch(`https://scrapper-back-end-webcode.onrender.com/snapdeal`)
        .then(res=>res.json())
        .then(data=>setproduct(data))
        },[])
  return (
    <div className='cont'>   
        {product.map((p,i)=><Snapdeal1 key={i} product={p}/>)}
    </div>
  )
}




export const Snapdeal1 = ({product}) => {
  return (
        
         <Card sx={{maxWidth:300 }} >
      <CardMedia
      className='productimage'
        sx={{ height: 300, maxWidth:300 }}
        image={product.src}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        After Discount :   {product.price} <br/>
          REAL PRICE : {product.realprice}
        </Typography>
      </CardContent>
    </Card>

  )
}
