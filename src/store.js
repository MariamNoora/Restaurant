import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { restaurantListReducer } from './Reducers/restaurantReducer'
//to generate middleware 

const reducers=combineReducers( //2
    {
        restaurantReducer:restaurantListReducer //key:function
    }
)
const middleware=[thunk]
const store=createStore(reducers,applyMiddleware(...middleware))  //1


export default store