import React, { Component } from 'react';
import {View,Alert,AsyncStorage,AppState } from 'react-native';
import { connect } from 'react-redux';
import AddNotesForm from '../Components/AddNotesForm';
import { actionCreators } from '../Redux/addNoteRedux';
import {loadSavedData,addItem} from '../Redux/addNoteReduxReducerAction';

// Styles
import styles from './Styles/LaunchScreenStyles';

class LaunchScreen extends Component {

handleSubmit = values  => {
var addnote = {};
addnote['title'] = values['notes'];
console.log("addnote " + addnote);
this.props.addItem(addnote);

}

componentWillMount() {
	AsyncStorage.getItem('mynotes').then((data) => {
        if (data !== null && this.props.notesReducer.notesItems.length < 1) {
		  const notesItem = JSON.parse(data);
		 notesItem.map((item) => {
		 this.props.addItem(item);
		}); 
		  
        }else{
		console.log('mynotes');
		}
    });
  }
  
  componentWillUpdate(nextProps) {
        if (nextProps.notesReducer !== this.props.notesReducer) {
            // Do whatever you want
			AsyncStorage.setItem('mynotes', JSON.stringify(nextProps.notesReducer.notesItems));
        }
    }
  
  
  render () {
    return (
      <View style={styles.mainContainer}>
            <AddNotesForm onSubmit={(values) =>this.handleSubmit(values)}
			notesReducer={this.props.notesReducer} navigation ={this.props.navigation}
			
			/> 
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
	notesReducer: state.notesReducer,
});

const mapActionCreators = {
	loadSavedData,
	addItem,	
};


export default connect(mapStateToProps,mapActionCreators)(LaunchScreen)