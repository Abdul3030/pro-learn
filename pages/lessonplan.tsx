import Image from 'next/image';



const LessonPlan = () => {

    return (
        <div className={`relative w-full top-0 fixed-height fixed-width bg-white z-10 flex justify-center items-center`}>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 pl-2">
                <Image src="/leftConfetti.png" width={264} height={428} priority alt="Left Confetti"/>
            </div>
            <div className="bg-white px-7 py-5 flex flex-col justify-center items-center shadow-pro rounded-lg">
                <h1 className="text-4xl font-medium text-pro-gray">Congratulations!</h1>
                <h1 className="text-4xl font-medium text-pro-gray">{`You're done with `}<span className="text-pro-blue">Supplementary Class 2</span></h1>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 pr-2">
                <Image src="/rightConfetti.png" width={264} height={428} priority alt="Right Confetti"/>
            </div>
            <style jsx>{`
                .fixed-height {
                    height: calc(100vh - 90px);
                }
            `}</style>
        </div>
    )
};

export default LessonPlan;