import * as React from 'react';
import Image from 'next/image';
import {FaRegUser} from 'react-icons/fa';
import {RiBook2Line} from 'react-icons/ri';
import {BiBookAdd} from 'react-icons/bi';
import {IoSettingsOutline} from 'react-icons/io5';
import SidebarItem from './SidebarItem';


type itemDataType = {
    name: string,
    icon: JSX.Element | JSX.Element[],
    url: string,
};


const itemData:itemDataType[] = [
    {
    name: 'Caroline',
    icon: <FaRegUser />,
    url: '/user'
    },
    {
    name: 'Lesson Plan',
    icon: <RiBook2Line />,
    url: '/lesson'
    },
    {
    name: 'Supplementary Classes',
    icon: <BiBookAdd />,
    url: '/supple'
    },
    {
    name: 'Settings',
    icon: <IoSettingsOutline />,
    url: '/settings'
    },
]

const Sidebar = () => {

return (
    <div className="w-23 min-h-screen max-h-screen shadow-2xl">
        <div className="w-full h-20 flex justify-center items-center py-5">
            <Image src="/logo.png" width="47" height="47" alt="Logo" />
        </div>
        <div className="w-full flex flex-col">
            {
                itemData.map((item, idx) =>  <SidebarItem key={idx} name={item.name} icon={item.icon} url={item.url} />)
            }
        </div>
    </div>
) 

};

export default Sidebar;