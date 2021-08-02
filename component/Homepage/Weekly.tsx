import * as React from 'react';
import {FaGraduationCap} from 'react-icons/fa';
import {BiTimeFive} from 'react-icons/bi';
import {FiGift} from 'react-icons/fi';


type WeeklyProps = {

};

const Weekly = ({}: WeeklyProps) => {

return (
    <div className="w-full">
        <h1 className="text-gray-700 text-sm font-medium">Weekly</h1>
        <div className="w-full h-32 flex items-center justify-between px-2 py-5 rounded shadow-lg">
           <div className="w-full px-2">
               <i className=""><FaGraduationCap /></i>
               <h3 className="">Lesson taken</h3>
               <h1 className="bg-clip-text font-medium text-5xl text-transparent inline-block bg-gradient-to-r from-pro-blue to-pro-lightblue">25</h1>
           </div>
           <div className="w-full px-2">
               <i className=""><BiTimeFive/></i>
               <h3 className="">Time spent</h3>
               <h1 className="bg-clip-text font-medium text-5xl text-transparent inline-block bg-gradient-to-r from-pro-green to-pro-spring">2h 25m</h1>
           </div>
           <div className="w-full px-2">
               <i className=""><FiGift /></i>
               <h3 className="">Rewards</h3>
               <h1 className="bg-clip-text font-medium text-5xl text-transparent inline-block bg-gradient-to-r from-pro-red to-pro-orange">Value</h1>
           </div>
        </div>
    </div>
) 

};

export default Weekly;