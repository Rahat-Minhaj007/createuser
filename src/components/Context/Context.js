import { createContext, useReducer } from "react";
import { initialUserState, userReducer } from "../Reducer/Reducer";

export const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ children = null }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState)
  const value = { state, dispatch }
  return <Provider value={value}>{children}</Provider>
}
export default UserProvider;