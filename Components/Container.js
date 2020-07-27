import React from 'react'
import GoalItem from "./GoalItem"
import GoalInput from "./GoalInput"
import { Text, View, TextInput, Button, FlatList} from 'react-native';
import {styles, test} from "../Styles/App"

//redux things
import {Provider, useSelector, useDispatch} from 'react-redux';
import {actionTypes} from "../Redux/CourseActions"


const Container = ()=>{

    const store = useSelector(state=>state.Course.items)

    return(
        <View style={styles.container}>
            <GoalInput/>
            <View>
                <FlatList
                    data={store}
                    // The array/list I will be using to render
                    // dynamically adding the string's array index as the key to Flatlist
                    renderItem={store=>(
                    // Function that will be used to render items, similar to map since it needs a key(handled above)
                    <GoalItem value={store.item.value}/>
                    )}
                />
            </View>
        </View>
    )
}

export default Container