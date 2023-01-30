const CHECK_STATUS = 'bookstore-roy/categories/CHECK_STATUS';

// Actions

const checkStatus = () => ({ type: CHECK_STATUS });

const defaultState = [];

// Category Reducer
const categoryReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
export { checkStatus };
export default categoryReducer;
