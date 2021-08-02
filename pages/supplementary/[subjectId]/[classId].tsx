import * as React from 'react';
import { useEffect } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import {useTimer} from 'use-timer';
import Fraction from '../../../component/Supplement/Fraction';


const ClassTest = () => {

    const { time, start, pause, reset, status } = useTimer({
        initialTime: 600,
        endTime: 0,
        timerType: 'DECREMENTAL',
        onTimeOver: () => {
          start();
        },
      });

    useEffect(()=> {
        start();
    },[]);

    // Converting seconds into hour, minutes seconds
    let hours, minutes, seconds;
    
        const minute = 60;
        const hour = 60*60;

        hours = Math.floor(time / hour);
        minutes = Math.floor((time % hour) / minute);
        seconds = Math.floor((time % minute));

    return (

        <div className="relative w-full scrollable px-10 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-pro-scroll ">
            <div className="w-full sticky top-0">
                <h1 className="relative text-base text-pro-gray font-medium py-2 cursor-pointer">
                    <span className="absolute top-3  inline-block transform -rotate-180 -left-4">
                        <BsPlayFill />
                    </span>
                    Supplementary Classes
                </h1>
                <div className="flex h-full items-center">
                    <div className="w-36">
                        <h1 className="text-5xl font-medium bg-clip-text bg-gradient-to-r from-pro-blue to-pro-lightblue text-transparent">
                            {`${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`}
                        </h1>
                    </div>
                    <div className="">
                        <h1 className="text-xs font-medium text-pro-darkgray">Supplementary Class 1</h1>
                        <p className="text-pro-darkgray font-semibold">Fractions</p>
                    </div>
                </div>
            </div>
            <form className="w-full">
                {
                    Array(10).fill('').map((item, idx) => <Fraction key={idx} />)
                }
                <div className="w-full my-5 flex justify-center items-center text-white">
                    <button className="bg-gradient-to-br from-pro-blue to-pro-lightblue rounded-lg px-10 py-1" type="submit">Submit</button>
                </div>
            </form>
            <style jsx>{`
                .scrollable {
                    max-height: calc(100vh - 80px);
                }
            `}</style>
        </div>
    )
};


export default ClassTest;