import * as React from 'react';
import Image from 'next/image';



const Congratulation = ({classTitle}) => {

    return (
        <div className={`absolute w-full fixed-width left-0 transition-all duration-500 ease-out bg-white bg-opacity-80 z-10 h-full top-0 flex justify-center items-center items-center`}>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 pl-2">
                <Image src="/leftConfetti.png" width={264} height={428} priority alt="Left Confetti"/>
            </div>
            <div className="bg-white px-7 py-5 flex flex-col justify-center items-center shadow-pro rounded-lg">
                <h1 className="text-4xl font-medium text-pro-gray">Congratulations!</h1>
                <h1 className="text-4xl font-medium text-pro-gray">{`You're done with `}<span className="text-pro-blue">{classTitle}</span></h1>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 pr-2">
                <Image src="/rightConfetti.png" width={264} height={428} priority alt="Right Confetti"/>
            </div>
            {/* <style jsx>{`
                .fixed-width {
                    width: calc(100% - 90px);
                }
            `}</style> */}
        </div>
    )
};

export default Congratulation;