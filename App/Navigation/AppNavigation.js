import { StackNavigator } from 'react-navigation';
import NotesListScreen from '../Containers/NotesListScreen'
import LaunchScreen from '../Containers/LaunchScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
 
  LaunchScreen: { screen: LaunchScreen,navigationOptions: { headerTitle: 'Home',
    }},
  NotesListScreen: { screen: NotesListScreen,navigationOptions: { headerTitle: 'Notes List',
    }},
}, {
  // Default config for all screens
  
  initialRouteName: 'LaunchScreen',
    navigationOptions: {
    headerStyle: styles.header,
	headerTintColor: '#ffffff',headerTitleStyle: { alignSelf: 'center' },
  }
})

export default PrimaryNav
