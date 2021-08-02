import * as React from 'react';
import { FiGift } from 'react-icons/fi';


const RewardCard = () => {

    return (
        <div className="w-full p-5 flex items-center text-pro-darkgray shadow-pro rounded">
            <div className="text-4xl">
                <FiGift />
            </div>
            <div className="ml-2">
                <h1 className="text-sm font-medium">Reward</h1>
                <h5 className="text-xs">Plus 2 marks for the next assessment</h5>
            </div>
        </div>
    )
};

export default RewardCard;