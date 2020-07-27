import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from "../Styles/App"

import {useDispatch} from "react-redux"
import {deleteCourse} from "../Redux/CourseActions"

const GoalItem = (props)=>{

    const dispatch = useDispatch()

    const value = props.value
    const id = props.id

    const deleteTheCourse = (id)=>{
        dispatch(deleteCourse(id))
    }

    return(
        <TouchableOpacity onPress={()=>deleteTheCourse(id)}>
            <View style={styles.itemView}>
                <Text style={{color:'white'}}>{value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem