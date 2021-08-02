import * as React from 'react';
import {BsPlayFill} from 'react-icons/bs';
import RewardItem from './RewardItem';

type RewardsProps = {
    rewards: Array<object>
};

const Rewards = ({rewards}: RewardsProps) => {

return (
    <div className="w-full mt-2">
        <div className="w-full flex items-center py-2">
            <h1 className="text-gray-700 text-sm font-medium">Rewards</h1>
            <a className="text-xs text-pro-lightgray px-1 flex items-center">See all <BsPlayFill /></a>
        </div>
        {
            rewards.map(({name, used}:{name: string, used: boolean}, idx) => <RewardItem key={idx} name={name} used={used}  />)
        }
    </div>
) 

};

export default Rewards;