import { StyleSheet,Dimensions} from "react-native";

const styles = StyleSheet.create({
  image:{
    width:'100%',
    height:500,
    resizeMode:'cover',
    justifyContent:'center',
  },
  title:{
   fontSize:80,
   fontWeight:"900",
   color:'white',
   width:'60%',
   marginLeft:25
  },
  button:{
    backgroundColor:'white',
    width:200,
    height:40,
    marginLeft:25,
    marginTop:25,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  btntxt:{
    fontSize:16,
    fontWeight:'bold',
    color:'black'
  },
  Searchbutton:{
    backgroundColor:'white',
    height:60,
    width:Dimensions.get("screen").width -20 ,
    marginHorizontal:10,
    flexDirection:"row",
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    position:"absolute",
    top:50,
    zIndex:100,
  },
  Searchbtntxt:{
    fontSize:16,
    fontWeight:'bold',
    color:'black'
  }
})

export default styles