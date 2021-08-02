import * as React from 'react';
import {FiGift} from 'react-icons/fi';
type RewardItemProps = {
    name: string,
    used: boolean
};
const RewardItem = ({name, used}: RewardItemProps) => {


    return (
    <div className={`w-full flex items-center justify-between px-2 py-5 rounded shadow-pro ${used ? 'opacity-60' : 'opacity-100'}`}>
        <div className="px-5 text-pro-gray w-full flex justify-between items-center">
            <i className="text-xl">
             <FiGift />
            </i>
            <h2 className="flex-1 pl-3 font-medium text-sm text-left">
                {name}
            </h2>
            <p className={`uppercase bg-clip-text font-semibold text-xs text-transparent inline-block bg-gradient-to-r from-pro-red to-pro-orange ${used ? 'invisible' : 'visible'}`}>New</p>
        </div>
     </div>
    )
};

export default RewardItem;