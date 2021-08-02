import * as React from 'react';


type RewardsProps = {

};

const Rewards = ({}: RewardsProps) => {

return (
    <div className="w-full">
        <div className="w-full flex">
            <h1 className="text-gray-700 text-sm font-medium">Rewards</h1>
            <span>See All </span>
        </div>
        <div className="w-full h-32 flex items-center justify-between px-2 py-5 rounded shadow-lg">
           <div className="">
               <i className="">Icon</i>
               <h2 className="">Title</h2>
               <div className="">Badge</div>
           </div>
        </div>
    </div>
) 

};

export default Rewards;