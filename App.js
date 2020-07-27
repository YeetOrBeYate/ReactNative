import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from "react-redux"
import {reduxStore} from "./Redux/store"
import Container from "./Components/Container"
export default function App() {


  return (
    //Views are like divs, good wrappers and containers for styling
    //this isn't jsx , its just straight javascript 
    <Provider store={reduxStore}>
      <Container/>
    </Provider>
  );
}

// rn doesn't use css but a similar syntax. Again all javascript but similar for easy transition 
// Moved the style object out of here and into a folder
