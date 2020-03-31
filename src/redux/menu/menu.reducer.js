import item_list from '../../items.js';

const INITIAL_STATE = {
  selected_items_list: [],
  selected_items_by_menu_type: {},
  all_menu_items: item_list
};

const updateDietariesCount = (items) => {
  let allDietaries = [];
  let dietaryHash = {};
  items.forEach((item)=>{
    allDietaries = [...allDietaries,...item.dietaries];
    dietaryHash = allDietaries.reduce((acc, each)=>{
        let val;
        acc[each] ? val = ++acc[each] : val = 1;
        return {...acc, [each]: val}
    },{});
  });
  return dietaryHash;
}

const removeItemFromList = (originalList, id) => {
  return originalList.filter((item) => {
    return item.id !== id
  });
}

const addItemToList = (originalList, newItem) =>{
  return [newItem, ...originalList];
}

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_MENU':
      const newSelectedMenu = addItemToList(state.selected_items_list, action.payload);
      return {
        ...state,
        all_menu_items: removeItemFromList(state.all_menu_items, action.payload.id),
        selected_items_list: newSelectedMenu,
        selected_items_by_menu_type: updateDietariesCount(newSelectedMenu)
      };
    case 'REMOVE_ITEM_FROM_MENU':
      const newMenu = removeItemFromList(state.selected_items_list, action.payload.id);
      return {
        ...state,
        all_menu_items: addItemToList(state.all_menu_items, action.payload),
        selected_items_list: newMenu,
        selected_items_by_menu_type: updateDietariesCount(newMenu)
      };
    default:
      return state;
  }
};

export default menuReducer;
