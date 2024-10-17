import { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/header/header";

type Props = {
    children: ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <html>
            <body className="container mx-auto bg-[#01044A] text-white">
                
                <Header />
    
                <div>
                    {children}
                </div>

            </body>
        </html>
    );
}

export default Layout;

