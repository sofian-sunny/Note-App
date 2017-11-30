import { AsyncStorage } from 'react-native';
const types = {
  ADD_ITEM: 'ADD_ITEM',LOAD_SAVED_DATA: 'LOAD_SAVED_DATA',
}

export function addItem(payload)
{
return {type:types.ADD_ITEM,payload}
}

export function loadSavedData(payload)
{
return {type:types.LOAD_SAVED_DATA,payload}
}


