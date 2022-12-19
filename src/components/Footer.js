import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Footer() {
  return (
    <div><Card className="text-center">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>ABOUT</Card.Title>
      <Card.Text>
        This website is created as a collection of variety of restaurants that can be found in various places of New York City.
      </Card.Text>
      <Button variant="primary" href="/">QUICK LINKS</Button>
    </Card.Body>
    <Card.Footer className="text-muted">NEW YORK<br/>Urban Park,<br/>
    Manhattan, New York City,<br/>United States<br/>For any assitance or enquiry : +1(646)555-3890, +1(646)555-4087 </Card.Footer>
  </Card></div>
  )
}

export default Footer