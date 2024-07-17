import React, { createContext } from 'react'

export const AppContext = createContext();

const phoneNo = 8668446654;
const name="100Rabh...";

// export const ContextProvider = (props) => {
//   return <>
//     <AppContext.Provider value={phoneNo}>
//       {props.children}
//     </AppContext.Provider>
//   </>

// }

export function ContextProvider(props) {
  return (
    <>
      <AppContext.Provider value={{phoneNo,name}}>
        {props.children}
      </AppContext.Provider>
    </>
  );
}

