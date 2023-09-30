import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    padding:20,
    height:'100%',
  },
    textinput:{
      fontSize:20,
      marginBottom:5,
      backgroundColor:'white',
      color:'black'
   },
   rowData:{
      flexDirection:'row',
      alignItems:"center",
      paddingVertical:15,
      borderBottomWidth:1,
      borderColor:'lightgrey'
   },
   iconContainer:{
        backgroundColor:'lightgrey',
        padding:7,
        borderRadius:10,
        marginRight:15,
   },
});

export default styles