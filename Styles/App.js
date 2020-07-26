import React from 'react'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        padding:50,
      },
      inputView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"flex-start"
      },
      input:{
        width:"80%",
        padding:5,
        borderBottomColor:"black",
        borderBottomWidth:.5
      },
      button:{
          width:"20%"
      },
      itemView:{
          borderWidth:1,
          borderColor:'black',
          marginVertical:"2%",
          padding:5,
          backgroundColor:'#323232',
      }
})

export const test = StyleSheet.create({
    container:{
        flexDirection: "row",
        width:"100%",
        height:300,
        justifyContent:'space-between',
        alignItems:'center',

    },
    one:{
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:"flex-start",
        flex:.33

    },
    two:{
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        flex:.33
    },
    three:{
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'flex-end',
        flex:.33

    }
})