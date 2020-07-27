import React from 'react'
import {styles} from "../Styles/App"
import {View, Button, TextInput} from 'react-native'
import GoalItem from './GoalItem'

import {actionTypes} from "../Redux/CourseActions"

import {useDispatch} from "react-redux"

const GoalInput = (props)=>{

    const dispatch = useDispatch()

    const [enteredGoal, setEnteredGoal] = React.useState("")
    const handleInput = (text)=>{
        setEnteredGoal(text)
    }

    const handleAdd = ()=>{
        dispatch({type:actionTypes.ADD_COURSE, payload:{key:Math.random().toString(), value:enteredGoal}})
        // dispatch({type:'test'})
    }


    return(
        <View style={styles.inputView}>
            <TextInput
                placeholder="Course goal"
                style={styles.input}
                onChangeText={handleInput}
                value={enteredGoal}
            />
            <Button title="Add" onPress = {handleAdd}/>
        </View>
    )
}

export default GoalInput