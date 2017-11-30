import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.darkGray
  },
  row: {
    flex: 1,
    marginVertical:1,
	backgroundColor: Colors.gray,
	height:44,
	paddingLeft:10,
	paddingRight:10,
    justifyContent: 'center'
  },
  boldLabel: {
    
    alignSelf: 'center',
    color: Colors.background,
    textAlign: 'center',
    marginBottom: 0,
	fontSize:18,
  },
  label: {
    textAlign: 'center',
    color: Colors.coal
  },
  listContent: {
    marginTop: 0
  }
})
