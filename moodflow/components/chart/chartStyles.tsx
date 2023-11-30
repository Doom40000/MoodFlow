import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      marginTop: 30,
      backgroundColor: "#1EAED7",
    },
      listItem: {
        flex:2,
        marginTop: 16,
      },
      textStyle:{
        textDecorationLine: "none",
        color: 'white',
        fontSize: 25
      },
      list: {
        borderColor: '#ffff',
        borderStyle: 'solid',
        borderWidth: 7,
        borderRadius:10,
        paddingLeft: 20,
        paddingRight:50,
        height: 300
      },
      text: {
        marginVertical:50,
        fontSize: 28,
        color: 'white',
      },
      press: {
        marginTop: 20,
        backgroundColor: '#1EAED7',
        borderColor: '#ffff',
        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius:10,
        width: 150,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buuttonText: {
        color: 'white',
        fontSize: 23,

      }
    });
    export default styles;
