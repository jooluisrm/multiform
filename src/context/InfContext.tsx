"use client"

import { createContext, ReactNode, useState } from "react";

type TypeContext = {
    name: string;
    setName: (name: string) => void;
}

export const InfoContext = createContext<TypeContext | null>(null);

type Props = {
    children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {

    const [name, setName] = useState('');

    return (
        <InfoContext.Provider value={{name, setName}} >
            { children }
        </InfoContext.Provider>
    );
}