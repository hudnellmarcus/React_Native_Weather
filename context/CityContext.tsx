import React, { useState, useContext, createContext } from 'react';
import { CityContextType } from '../types/CityContextType';
import { CityProviderProps } from '../models/CityProviderProps';


const CityContext = createContext<CityContextType | undefined>(undefined);


export const useCityInput = () => {

    const context = useContext(CityContext);
    if (!context) {
        throw new Error('useCityInput must be used within a CityInputProvider'); 
    }
    return context; 
}
   

export const CityInputProvider = ({ children }: CityProviderProps) => {
    const [city, setCity] = useState<string>('');

    return (
        <CityContext.Provider
            value={{ city, setCity }}
        >
            {children}
        </CityContext.Provider>
    );
};