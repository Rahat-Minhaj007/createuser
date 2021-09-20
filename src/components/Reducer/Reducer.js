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
      return { ...state, userList: state.userList.map((user) => user.id === action.payload.id ? { ...user, firstName: action.payload.firstName, lastName: action.payload.lastName, userName: action.payload.userName, email: action.payload.email, password: action.payload.password } : user) };
    default:
      return state;
  }
}