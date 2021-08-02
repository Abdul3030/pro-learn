import * as React from 'react';


type HappenedProps = {

};

const Happened = ({}: HappenedProps) => {

return (
    <div className="w-full ml-10">
    <h1 className="text-gray-700 text-sm font-medium">What&apos;s happening</h1>
    <div className="w-32 h-32 py-5 rounded shadow-lg">
        <div className="w-full text-center bg-gradient-to-r from-pro-blue to-pro-lightblue ">
            <h1 className=" pt-5 text-3xl text-white leading-0 uppercase"> Today </h1>
        </div>
        <div className="w-full">
            <ul className="">
                <li className="">Nothing is going</li>
                <li className="">much right now</li>
            </ul>
        </div>
    </div>
</div>
) 

};

export default Happened;