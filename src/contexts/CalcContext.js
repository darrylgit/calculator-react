import React, { useState } from 'react';

import inputValueHandler from '../logic/inputValueHandler/inputValueHandler';

const CalcContext = React.createContext();

export const CalcProvider = ({ children }) => {
  const [inputsArray, updateInputs] = useState([]);

  const pushNewInput = incomingInputValue =>
    updateInputs(inputValueHandler([...inputsArray], incomingInputValue));

  return (
    <CalcContext.Provider value={{ inputsArray, pushNewInput }}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContext;
