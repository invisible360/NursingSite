import React, { createContext, useState } from 'react';

export const ContextHistory = createContext();

const HistoryCarrierContext = ({ children }) => {
    const value = {
        value: useState ([]),
        history: useState([])
    }

    return (
        <ContextHistory.Provider value={value}>
            {children}
        </ContextHistory.Provider>
    );
};


export default HistoryCarrierContext;