// src/utils/GlobalUtils.js
import { useState, useContext, createContext } from 'react';

const initialGlobalState = {
    todoList: [],
};

const GlobalContext = createContext();

let setGlobalState;

const GlobalProvider = ({ children }) => {
    const [globals, setGlobals] = useState(initialGlobalState);

    setGlobalState = (data = {}) => {
        setGlobals((prevGlobals) => ({
            ...prevGlobals,
            ...data,
        }));
    };

    return (
        <GlobalContext.Provider value={{ ...globals, setGlobalState }}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalState = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalProvider');
    }
    return context;
};

export { GlobalProvider, useGlobalState};
