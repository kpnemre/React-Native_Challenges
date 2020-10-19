import {StyleSheet,Dimensions} from "react-native"


const color= '#ff9b31';

const main = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#303e45',
    color:'#ffa726'
  },
  banner:{
    // backgroundColor:'red',
    flexDirection:'row',
    justifyContent: "space-between",
    margin:5,
    padding:5,
    alignItems:'center',

    
  },
  todoText:{
    fontSize:50,
    fontWeight:'bold',
    color,

  },
  todoCount:{
    fontSize:25,
   color,
  },
      emptyComponent: {
        color: 'white',
        textAlign: 'center'
    }
})

const todo_input = StyleSheet.create({
  inputContainer:{
    backgroundColor:'#e0e0e0',
    padding:10,
    margin:10,
    borderRadius:10,

  },
    container: {
        backgroundColor: '#a7b6bd',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    buttonContainer:{
        backgroundColor:'#4a636e',
        margin:10,
        padding:10,
        width:Dimensions.get('window').width*0.35,
        alignSelf:'center',
        borderRadius:8,
    },

    buttonText:{
      color:'white',
      fontWeight:'bold',
      textAlign:'center'
    }


})

const todo_card = StyleSheet.create({
    container: {
        backgroundColor: '#a7b6bd',
        padding: 8,
        margin: 5,
        borderRadius: 7
    },
    text: {
        fontSize: 18
    }
})

export { main, todo_input, todo_card };