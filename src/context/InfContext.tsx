"use client"

import { createContext, ReactNode, useState } from "react";

type TypeContext = {
    name: string;
    setName: (name: string) => void;
    level: number | null
    setLevel: any;
    email: string;
    setEmail: (email: string) => void;
    gitHub: string;
    setGitHub: (gitHub: string) => void;
}

export const InfoContext = createContext<TypeContext | null>(null);

type Props = {
    children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {

    const [name, setName] = useState('');
    const [level, setLevel] = useState(null);
    const [email, setEmail] = useState('');
    const [gitHub, setGitHub] = useState('');

    return (
        <InfoContext.Provider value={{ name, setName, email, setEmail, gitHub, setGitHub, level, setLevel }} >
            {children}
        </InfoContext.Provider>
    );
}