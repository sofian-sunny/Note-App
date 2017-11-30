import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',paddingTop:40,flex: 1,
        
  },
  formSubmit: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 25,
    padding: 5
  },
  showNotesStyle :{height:50,position: 'absolute',bottom: 0,width:'100%',},
  showNotesButton :{backgroundColor:'#3d1212',borderColor:'#2d0c0c',
  paddingLeft:25,paddingRight:25,borderWidth: 1,justifyContent: 'center',height:50},
  btnTextStyle :{color:'#fff',textAlign:'center',fontSize: 18,},
});