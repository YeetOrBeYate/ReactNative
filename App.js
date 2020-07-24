import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default function App() {

  const [outPutText, setOutPutText] = React.useState('Open up App.js to start working on your app!')

  const changeText=()=>{

    if(outPutText.length === 44){
      setOutPutText("See! The text changed!")
    }else{
      setOutPutText("Open up App.js to start working on your app!")
    }
  }

  return (
    //Views are like divs, good wrappers and containers for styling
    //this isn't jsx , its just straight javascript 
    <View style={styles.container}>
      <Text>{outPutText}</Text>
      <TouchableOpacity onPress={changeText}>
        <Text style={styles.button} >Change Text</Text>
      </TouchableOpacity>
    </View>
  );
}

// rn doesn't use css but a similar syntax. Again all javascript but similar for easy transition 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'black'
  },
  button:{
    margin:20,
    padding:20,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#68a0cf',
    borderWidth: 1,
    borderColor: 'white'
  }
});
