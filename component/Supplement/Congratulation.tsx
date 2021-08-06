import * as React from 'react';
import Image from 'next/image';



const Congratulation = ({classTitle}) => {

    return (
        <div className={`fixed fixed-width left-23 transition-all duration-500 ease-out bg-white bg-opacity-80 z-10 h-full top-0 flex justify-between items-center`}>
            <div className="pl-2">
                <Image src="/leftConfetti.png" width={264} height={428} alt="Left Confetti"/>
            </div>
            <div className=" flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-pro-gray">Congratulations!</h1>
                <h1 className="text-3xl font-bold text-pro-gray">{`You're done with `}<span className="text-pro-blue">{classTitle}</span></h1>
            </div>
            <div className="pr-2">
                <Image src="/rightConfetti.png" width={264} height={428} alt="Right Confetti"/>
            </div>
            <style jsx>{`
                .fixed-width {
                    width: calc(100% - 90px);
                }
            `}</style>
        </div>
    )
};

export default Congratulation;