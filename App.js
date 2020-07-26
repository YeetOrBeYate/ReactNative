import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Button, FlatList} from 'react-native';
import {styles, test} from "./Styles/App"
export default function App() {


  const [enteredGoal, setEnteredGoal] = React.useState("")
  const [store, setStore] = React.useState([])

  const handleInput = (text)=>{
    setEnteredGoal(text)
  }

  const handleAdd = ()=>{
    setStore([...store, {key: Math.random().toString(), value:enteredGoal}])
  }

  return (
    //Views are like divs, good wrappers and containers for styling
    //this isn't jsx , its just straight javascript 
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
         placeholder="Course goal" 
         style={styles.input}
         onChangeText={handleInput}
         value={enteredGoal}
         />
        <Button onPress={handleAdd} style={styles.button} title="Add"/>
      </View>
      <View>
        <FlatList
          // The array/list I will be using to render
          data={store}
          // Function that will be used to render items, similar to map since it needs a key
          // Thats why I added the course as an object with a random key value
          renderItem={itemData=>(
            <View style={styles.itemView}>
              <Text style={{color:'white'}}>{itemData.item.value}</Text>
            </View>
          )}
        />

      </View>
    </View>
  );
}

// rn doesn't use css but a similar syntax. Again all javascript but similar for easy transition 
// Moved the style object out of here and into a folder
