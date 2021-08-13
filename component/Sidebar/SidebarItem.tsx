import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type SidebarItemProps = {
    icon: JSX.Element | JSX.Element[],
    name: string,
    url: string,
};

const SidebarItem = ({icon, name, url}: SidebarItemProps) => {
    
    const router = useRouter();
    const isActive = router.pathname.includes(url);

return (
    <div className={`group relative w-full transition-all duration-200 ease-in-out cursor-pointer hover:text-pro-darkgray hover:bg-pro-blue hover:bg-opacity-20 ${isActive ? 'bg-pro-blue bg-opacity-20 text-pro-darkgray' : 'text-pro-lightgray'}`}>
        <div className={`absolute w-1 h-full group-hover:bg-pro-blue ${isActive && 'bg-pro-blue'}`}></div>
        <Link href={url} passHref>
            <div className="w-full py-4 px-1 flex flex-col justify-center items-center">
                <i className="text-2xl">{icon}</i>
                <p className=" text-xxss text-center font-medium">{name}</p>
            </div>
        </Link>
    </div>
) 

};

export default SidebarItem;