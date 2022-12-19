import { useEffect, useState } from 'react'
import React from 'react'
import Restaurantscards from './Restaurantscards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../Actions/restaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {
    //to hold value
    // const [allRestaurants, setRestaurants]=useState([])
    // //function to call API to get all restaurant items from restaurants.json
    // const getRestaurants=async()=>
    // {
    //     await fetch('/restaurants.json')
    //     .then((data)=>
    //     {
    //       data.json()
    //       .then((result)=>
    //       {
    //         setRestaurants(result.restaurants) 
    //         // console.log(result);
    //       })
    //     })
    // }
    // console.log(allRestaurants);
    const dispatch=useDispatch();
    const result=useSelector(state=>state.restaurantReducer)
    console.log(result);
    const {restaurantList}=result

    useEffect(()=>
    {
        // getRestaurants()
        dispatch(RestaurantListAction());
    },[])
  return (
    <Row>
      {
        restaurantList.map(item=>
        (
          // <h3>{item.name}</h3>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Restaurantscards restaurants={item}/>
          </Col>
        ))
      }
      </Row>
  )
}

export default Restaurantlist