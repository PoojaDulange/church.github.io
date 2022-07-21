/* eslint-disable react/prop-types */
import React, { useReducer } from 'react'
import UserReducer from './UserReducer'

export const UserContext = React.createContext()

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer)

  return (
    <UserContext.Provider value={{ user: state.user, dispatch }}>{children}</UserContext.Provider>
  )
}
