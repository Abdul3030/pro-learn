import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import Sidebar from './Sidebar';


type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    const router = useRouter();
    if(router.pathname.includes('/login')) return <div>{children}</div>;
return (
    <div className="w-full flex max-h-screen min-h-screen overflow-hidden">
        <Sidebar />
        <div className="w-full h-full background-color">
            <div className="w-full h-20 inner-shadow"></div>
            <div className="main-body">
                {children}
            </div>
        </div>
        <style jsx>{`
        
        .inner-shadow {
            -webkit-box-shadow: inset 4px -28px 15px -14px rgba(0,0,0,0.19); 
            box-shadow: inset 4px -15px 15px -14px rgba(0,0,0,0.19);
        }

        .main-body {
            max-height: calc(100vh - 80px);
        }
        .background-color {
            background: #F8FAFC;
        }
        `}</style>
    </div>
) 

};

export default Layout;