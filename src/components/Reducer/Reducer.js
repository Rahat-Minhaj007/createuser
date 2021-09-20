export const initialUserState = {
  userList: []
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, userList: [...state.userList, action.payload] };
    case 'REMOVE_USER':
      return { ...state, userList: state.userList.filter((user) => user.id !== action.payload) };
    case 'UPDATE':
      return state;
    default:
      return state;
  }
}