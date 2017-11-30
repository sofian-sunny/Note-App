import React from 'react'
import { View, Text, FlatList,TouchableOpacity  } from 'react-native'
import { connect } from 'react-redux'


// Styles
import styles from './Styles/NotesListScreenStyle'

class MyListItem extends React.PureComponent {
  _onPress = () => {
	  alert(this.props.title);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.row}>
          <Text numberOfLines={1} ellipsizeMode ={'tail'} style={styles.boldLabel}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}


class NotesListScreen extends React.PureComponent {
  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> No Notes Added So far !  </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  render () {
    return (
      <View style={styles.container}>
	  
	  <FlatList
          data={this.props.notesReducer.notesItems}
          renderItem={({ item }) => (
            <MyListItem onPress={()=>handleSelectedAddress(item.title)}
              title={`${item.title}`}
              containerStyle={{ borderBottomWidth: 0 }} 
            />
          )}
          keyExtractor={item => item.title}
          ListEmptyComponent={this.renderEmpty}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notesReducer: state.notesReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesListScreen)
