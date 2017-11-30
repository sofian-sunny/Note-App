import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity,View,StyleSheet} from 'react-native';
import AppTextInput from './AppTextInput';
import FullButton from './FullButton'
import { ApplicationStyles } from '../Themes/';
import styles from './Styles/AddNotesFormStyle';
import AppNavigation from '../Navigation/AppNavigation'
const required = value => (value ? undefined : 'Required')

function AddNotesForm(props) {
	
const { handleSubmit,notesReducer,navigation } = props;

handleShowNotesPress = () => {
    navigation.navigate('NotesListScreen');
  }
  
  
  return (
	<View style={styles.container}>
      <View style={{flex:1}}>
	 
      <Field
        name={'notes'}
		placeholder={'Write Note Here'}
        component={AppTextInput}
		validate={[(val) => val ? undefined : 'Notes field is required']}
		validate={[required]}
      />
      
		 <TouchableOpacity onPress={props.handleSubmit}>
		  <View style={ApplicationStyles.btnStyle}>
		  <Text style={ApplicationStyles.btnTextStyle}>Submit</Text>
		  </View>
		  </TouchableOpacity>
		  </View>
		  
		  <View style={styles.showNotesStyle}>
		  <TouchableOpacity style={styles.showNotesButton} onPress={this.handleShowNotesPress}>
		  <View >
		  <Text style={styles.btnTextStyle}>Show Notes {notesReducer.notesItems.length}</Text>
		  </View>
		  </TouchableOpacity>
		  </View>
		
		  </View>
		  
  );
}
const validate = (props) => {
  const errors = {};
  const fields = ['notes'];

  fields.forEach((f) => {
    if (!(f in props)) {
      errors[f] = `${f} is required`;
    }
  });
  return errors;
};


export default reduxForm({ form: 'addnotes',validate })(AddNotesForm);