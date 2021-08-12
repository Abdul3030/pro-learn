import * as React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { BsPlayFill } from 'react-icons/bs';
import {useTimer} from 'use-timer';
import { gradColPallate } from '../../../colorPallate';
import Fraction from '../../../component/Supplement/Fraction';
import { Router, useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import Congratulation from '../../../component/Supplement/Congratulation';


const ClassTest = () => {
    const router = useRouter();
    const [congrats, setCongrats] = useState(false);
    console.log(congrats);
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


    const onSubmitHanlder = (e) => {
        e.preventDefault();
    };

    return (

        <div className="relative w-full px-2 pt-1 select-none">
            <div className="w-full px-8 h-25 bg-white">
                <h1 onClick={() => router.back() } className="relative inline-block text-sm text-pro-lightgray font-medium cursor-pointer">
                    <span className="absolute top-0.5  inline-block transform -rotate-180 -left-4">
                        <BsPlayFill />
                    </span>
                    Supplementary Classes
                </h1>
                <div className="flex pt-5 items-center">
                    <div className="w-36">
                        <h1 className={`text-5xl font-medium bg-clip-text bg-gradient-to-r text-transparent ${minutes < 6 && minutes >= 1 ? gradColPallate[1] : minutes < 1 ? gradColPallate[2] : gradColPallate[0]}`}>
                            {`${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`}
                        </h1>
                    </div>
                    <div className="">
                        <h1 className="text-xs font-medium text-pro-darkgray">Supplementary Class 1</h1>
                        <p className="text-pro-darkgray font-semibold">Fractions</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmitHanlder} className="w-full px-8 scrollable overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-pro-scroll">
                {
                    Array(10).fill('').map((item, idx) => <Fraction key={idx} />)
                }
                <div className="w-full my-5 flex justify-center items-center text-white">
                    <button onClick={() => setCongrats(true)} className="bg-gradient-to-br from-pro-blue to-pro-lightblue rounded-lg px-10 py-1" type="submit">Submit</button>
                </div>
            </form>
            {
                congrats && <Congratulation classTitle="Supplementary Class 1" />
            }
            <style jsx>{`
                .scrollable {
                    max-height: calc(100vh - 180px);
                }
            `}</style>
        </div>
    )
};


export default ClassTest;