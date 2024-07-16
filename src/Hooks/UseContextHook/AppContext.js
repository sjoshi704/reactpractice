import React, { createContext } from 'react'

export const AppContext = createContext();

const phoneNo = 8668446654;

export const ContextProvider = (props) => {
  return <>
    <AppContext.Provider value={phoneNo}>
      {props.children}
    </AppContext.Provider>
  </>

}
