import React, { createContext, useState, useContext } from 'react';
const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [item, setItem] = useState(null);

  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItem = () => {
  return useContext(ItemContext);
};