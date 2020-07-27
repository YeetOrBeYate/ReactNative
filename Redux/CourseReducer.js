
import {actionTypes} from "./CourseActions"

const initialState = {
    items:[]
}


export const CourseReducer = (state = initialState, action)=>{
    console.log(state)
    switch(action.type){
        case actionTypes.ADD_COURSE:
            return {...state, items:[...state.items, action.payload]}
        case actionTypes.DELETE_COURSE:
            //returning the item to the array if !== itemId
            return {...state, items:state.items.filter(item=>item.key !== action.payload)}
        case actionTypes.EDIT_COURSE:
            return {...state, items:state.items.map(item=>{
                if(item.key === action.id){
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