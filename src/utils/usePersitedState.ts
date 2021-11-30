import React from "react";

const usePersitedState = (key: string, initialState: any) => { 
  const [state, setState] = React.useState(() => {
    const storageValue = localStorage.getItem(key);

    if(storageValue){
      return JSON.parse(storageValue);
    }else{
      return initialState
    }
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, setState];
};

export default usePersitedState;