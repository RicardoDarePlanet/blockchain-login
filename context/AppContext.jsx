import React, { createContext, useState } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <AppContext.Provider value={{ walletAddress, setWalletAddress }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
