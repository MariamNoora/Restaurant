import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Restaurantscards({restaurants}) {
    console.log(restaurants);
  return (
    <Link style={{textDecoration:"none"}} to={`viewrestaurant/${restaurants.id}`}>
    <Card className='m-4' sm={12} md={6} lg={4} xl={3}>
    <Card.Img variant="top" className='p-1' src={restaurants.photograph}/>
    <Card.Body>
      <Card.Title>{restaurants.name}</Card.Title>
      <Card.Text>
        {restaurants.neighborhood}<br/>{restaurants.address}
      </Card.Text>
    </Card.Body>
  </Card>
  </Link>
  )
}

export default Restaurantscards