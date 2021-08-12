import * as React from 'react';
import Link from 'next/link';
import {BsPlayFill} from 'react-icons/bs';
import RewardItem from './RewardItem';

type RewardsProps = {
    rewards: Array<object>
};

const Rewards = ({rewards}: RewardsProps) => {

return (
    <div className="w-full mt-7 px-5">
        <div className="w-full flex items-center py-3">
            <h1 className="text-pro-darkgray text-sm font-medium">Rewards</h1>
            <Link href="#" ><a className="text-xs text-pro-lightgray px-1 flex items-center">See all <BsPlayFill /></a></Link>
        </div>
        {
            rewards.map(({name, used}:{name: string, used: boolean}, idx) => <RewardItem key={idx} name={name} used={used}  />)
        }
    </div>
) 

};

export default Rewards;