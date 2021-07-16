import * as React from 'react';
import Link from 'next/link';

type SidebarItemProps = {
    icon: JSX.Element | JSX.Element[],
    name: string,
    url: string,
};

const SidebarItem = ({icon, name, url}: SidebarItemProps) => {

return (
    <div className="group relative w-full transition-all duration-200 ease-in-out cursor-pointer hover:bg-blue-200 text-gray-400 hover:text-gray-600">
        <div className="absolute w-1 h-full group-hover:bg-pro-blue"></div>
        <Link href={url} passHref>
            <div className="w-full py-3 px-1 flex flex-col justify-center items-center">
                <i className="text-2xl">{icon}</i>
                <p className="text-xs text-center">{name}</p>
            </div>
        </Link>
    </div>
) 

};

export default SidebarItem;