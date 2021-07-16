import * as React from 'react';
import Sidebar from './Sidebar';


type LayoutProps = {
    children: React.ReactNode
};

const Layout = ({children}: LayoutProps) => {

return (
    <div className="w-full flex">
        <Sidebar />
        <div className="w-full">
            {children}
        </div>
    </div>
) 

};

export default Layout;