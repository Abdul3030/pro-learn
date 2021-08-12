import * as React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';


const Quote = ({active, quote}: {active: boolean, quote: string}) => {

    return (
        <div className={`bottom z-10 flex w-full pr-5 bg-white ${active ? 'hidden' : 'block'}`}>
            <div className="">
                <h1 className="text-sm font-medium py-2 text-left">Progress</h1>
                <div className="bg-white w-32 h-28 px-5 py-2 flex justify-center items-center shadow-pro">
                    <CircularProgressbarWithChildren value={0} counterClockwise >
                        <h1 className="text-3xl font-medium bg-clip-text bg-gradient-to-r from-pro-blue to-pro-lightblue text-transparent">0<span className="text-xl font-semibold">%</span></h1>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
            <div className="ml-5 flex-1">
                <h1 className="text-sm font-medium py-2">Quote of the day</h1>
                <div className="bg-white w-full h-28 px-5 py-2 flex justify-center items-center shadow-pro">
                    <p className="bg-clip-text font-medium text-md text-transparent inline-block bg-gradient-to-r from-pro-blue to-pro-red">
                        {quote}
                    </p>
                </div>
            </div>
        </div>
    )
};
export default Quote;