import * as React from 'react';
import {FaGraduationCap} from 'react-icons/fa';
import {BiTimeFive} from 'react-icons/bi';
import {FiGift} from 'react-icons/fi';

type propsType = {
    lessons_taken: number,
    time_spent: number,
    rewards_earned: number
}

type WeeklyProps = {
    data: propsType
};

const Weekly = ({data}: WeeklyProps) => {

    const {lessons_taken, time_spent, rewards_earned} = data;
    let timeSpent;

    if(time_spent >= 60){
       const minutes = time_spent % 60;
       const hours = (time_spent - minutes) / 60;
       timeSpent = `${hours}h ${minutes}m`
    }else{
       timeSpent = `${time_spent}m`
    }
return (
    <div className="w-full font-medium">
        <h1 className="text-pro-darkgray text-sm font-medium py-2">Weekly</h1>
        <div className="w-full h-32 flex text-pro-lightgray items-center justify-between px-7 py-4 rounded shadow-pro">
           <div className="">
               <i className="text-2xl"><FaGraduationCap /></i>
               <h3 className="text-xss">Lesson taken</h3>
               <h1 className="bg-clip-text  text-xl text-transparent inline-block bg-gradient-to-r from-pro-blue to-pro-lightblue">{lessons_taken}</h1>
           </div>
           <div className="">
               <i className="text-2xl"><BiTimeFive/></i>
               <h3 className="text-xss">Time spent</h3>
               <h1 className="text- bg-clip-text   text-xl text-transparent inline-block bg-gradient-to-r from-pro-orange to-pro-lightorange">{timeSpent}</h1>
           </div>
           <div className="">
               <i className="text-2xl"><FiGift /></i>
               <h3 className="text-xss">Rewards</h3>
               <h1 className="bg-clip-text text-xl text-transparent inline-block bg-gradient-to-r from-pro-red to-pro-darkorange">{rewards_earned}</h1>
           </div>
        </div>
    </div>
) 

};

export default Weekly;