export const addItemToMenu = item => {
  return ({
      type: 'ADD_ITEM_TO_MENU',
      payload: item
  })
}

export const removeItemFromMenu = item => {
  return ({
      type: 'REMOVE_ITEM_FROM_MENU',
      payload: item
  })
}
