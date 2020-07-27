
import {actionTypes} from "./CourseActions"

const initialState = {
    item:[]
}


export const CourseReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_COURSE:
            return {...state, items:[...state.items, action.payload]}
        case actionTypes.DELETE_COURSE:
            //returning the item to the array if !== itemId
            return {...state, items:state.items.filter(item=>item.id !==action.payload)}
        case actionTypes.EDIT_COURSE:
            return {...state, items:state.items.map(item=>{
                if(item.id === action.it){
                    item = action.payload
                    return item
                }else{
                    return item
                }
            })}
            
        default:
            return state
    }
}