import { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/header/header";
import { ContextProvider } from "@/context/InfContext";

type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <html>
            <body className="container mx-auto bg-[#01044A] text-white">

                <Header />

                <div>
                    <ContextProvider>
                        {children}
                    </ContextProvider>

                </div>

            </body>
        </html>
    );
}

export default Layout;

