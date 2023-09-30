import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedroom: {
    marginVertical: 10,
    color: "#5b5b5b5b"
  },
  description: {
    fontSize: 18,
    lineHeight: 26
  },
  prices: {
    fontSize: 18,
    marginVertical: 10
  },
  oldPrice: {
    color: "#5b5b5b5b",
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold'
  },
  totalPrice: {
    color: '#5b5b5b5b',
    textDecorationLine: 'underline'
  },
  detailedDes:{
    fontSize:14,
    lineHeight:24,
    marginVertical:20
  }
})
export default styles