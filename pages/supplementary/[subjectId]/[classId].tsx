import * as React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import {useTimer} from 'use-timer';
import { gradColPallate } from '../../../colorPallate';
import Fraction from '../../../component/Supplement/Fraction';
import { useState } from 'react';
import Congratulation from '../../../component/Supplement/Congratulation';


const ClassTest = () => {
    const router = useRouter();

    const [congrats, setCongrats] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const submitRef = React.useRef(null);
    console.log(congrats);
    const { time, start, pause, reset, status } = useTimer({
        initialTime: 600,
        endTime: 0,
        timerType: 'DECREMENTAL',
        onTimeOver: () => {
          submitRef.current.click();
        },
      });

    // onLoad the exam timer will be started
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
        pause();
        setCongrats(true);
    };

    // After 5 minutes of submitting result will be shown and congrats window disappeared
    useEffect(()=> {
        let timeout;
        if(congrats){
            timeout = setTimeout(() => {setShowResults(true); setCongrats(false);}, 3000);
        }
        return () => clearTimeout(timeout);
    },[showResults, congrats]);

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
                    <button ref={submitRef} className="bg-gradient-to-br from-pro-blue to-pro-lightblue rounded-lg px-10 py-1" type="submit">Submit</button>
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