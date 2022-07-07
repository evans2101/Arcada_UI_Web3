import React from "react";

let AccountContext = React.createContext();

let WalletProvider = ({ children }) => {
  const [address, setAddress] = React.useState("");

  const contextValue = {
    setAddress,
    address,
  };
  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
};

export { AccountContext, WalletProvider };
