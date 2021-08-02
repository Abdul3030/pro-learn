import * as React from 'react';
import Image from 'next/image';

type TaskCardProps = {
    completed: boolean,
    active?: boolean,
    subject: string,
    estTime: string,
    description: string,
    clicked: () => void,
};

const TaskCard = ({completed, active, subject, estTime, description, clicked}: TaskCardProps) => {

return (
    <div onClick={clicked} className={`relative ${completed ? '' : 'cursor-pointer'}  group w-full h-36 flex flex-col justify-between overflow-hidden p-5 shadow-pro rounded`}>
        <div className={`absolute ${completed ? '' : 'group-hover:block'} transform ${active ? 'block' : 'hidden'} transition-all duration-1000 ease-in-out w-2 h-full top-0 right-0 bg-pro-blue rounded`}></div>
        <div className="w-full">
            <h1 className="flex items-center">
                <p className="text-pro-darkgray font-medium">{subject}</p> 
                <div className="ml-2 w-3 h-3 rounded-full bg-gradient-to-r from-pro-red to-pro-orange"></div></h1>
            <h4 className="text-pro-gray text-sm">Estimated Time: {estTime}</h4>
        </div>
        <p className="text-pro-gray text-xs">
            {description}
        </p>    
        <div className={`absolute ${completed ? 'block' : 'hidden'} transition-all duration-500 ease-out bg-white bg-opacity-80 z-10 w-full h-full top-0 left-0 flex justify-between items-center`}>
            <div className="">
                <Image src="/leftConfetti.png" width={74} height={122} alt="Left Confetti"/>
            </div>
            <div className=" flex justify-center items-center">
                <h1 className="text-5xl bg-clip-text bg-gradient-to-r font-bold from-pro-green to-pro-spring text-transparent">Done!</h1>
            </div>
            <div className="">
                <Image src="/rightConfetti.png" width={74} height={122} alt="Left Confetti"/>
            </div>
        </div>
    </div>
) 

};

export default TaskCard;