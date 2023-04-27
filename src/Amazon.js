import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export const Amazon = () => {
  return (
    <div className='cont'>   
       <h1>SORRY THE MENTOR SAID AMAZON SCRAPING IS NOT SAFE</h1>
    </div>
  )
}




export const Amazon1 = ({product}) => {
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
            {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

  )
}
