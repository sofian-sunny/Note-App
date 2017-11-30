const types = {
  ADD_ITEM: 'ADD_ITEM',LOAD_SAVED_DATA: 'LOAD_SAVED_DATA',
}

export const actionCreators = {
  addItem: (item) => {
    return {
      type: types.ADD_ITEM,
      payload: item
    }
  },
  loadSavedData: (localStorage) => {
 
    return {
      type: types.LOAD_SAVED_DATA,
      payload: localStorage
    }
  },
}

const initialState = {
  notesItems: [],
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  const { notesItems } = state

  switch(type) {
    case types.ADD_ITEM: {
	console.log("Notes Added : " + payload);
      return {
        ...state,
        notesItems: [{label: payload}, ...notesItems],
      }
    }
	
	case types.LOAD_SAVED_DATA: {
	console.log("Notes Added : " + JSON.parse(payload));
      return {
        ...state,
        notesItems: JSON.parse(payload),
      }
    }	
    
    default: {
      return state
    }
  }
}