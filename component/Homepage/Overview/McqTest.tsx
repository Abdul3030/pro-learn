import * as React from 'react';
import McQuestion from './McQuestion';


const McqTest = ({title}:{title: string}) => {

    return (
        <div className="w-full px-5 scrollable scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-pro-scroll">
            <h1 className="font-semibold text-pro-darkgray">{title}</h1>
            <form onSubmit={(e) => e.preventDefault() } className="w-full">
                {
                    Array(10).fill(0).map((item, idx) => <McQuestion key={idx} />)
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

export default McqTest;