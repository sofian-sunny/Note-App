import { AsyncStorage } from 'react-native';
const types = {
  ADD_ITEM: 'ADD_ITEM',LOAD_SAVED_DATA: 'LOAD_SAVED_DATA',
}

const initialState = {
  notesItems: [],
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  const { notesItems } = state

  switch(type) {
    case types.ADD_ITEM: {
	const itemData = JSON.stringify(payload);
	console.log("payload " + itemData);
	console.log("Notes Items  " + JSON.stringify(notesItems));	
      return {
		   notesItems: [...notesItems,payload]
      }	
    }
	
	case types.LOAD_SAVED_DATA: {
      return {
        ...state,
        notesItems: payload,
      }
    }	
    
    default: {
      return state
    }
  }
}