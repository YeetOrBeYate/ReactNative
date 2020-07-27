import React from 'react'
import {View, Text} from 'react-native'
import {styles} from "../Styles/App"

const GoalItem = (props)=>{

    const value = props.value

    return(
        <View style={styles.itemView}>
            <Text style={{color:'white'}}>{value}</Text>
        </View>
    )
}

export default GoalItem