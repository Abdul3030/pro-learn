import { isEmptyArray } from 'formik';
import * as React from 'react';
import { FiLoader } from 'react-icons/fi';
import McQuestion from './McQuestion';


const McqTest = ({title, data}:{title: string, data: any}) => {

    // if(data = {}) return <FiLoader />;

    const {questions} = data;

    return (
        <div className="w-full">
            
                    <h1 className=" h-10 font-semibold text-pro-darkgray px-5 py-2">{title}</h1>
                    <form onSubmit={(e) => e.preventDefault() } className="w-full px-5 pb-10 scrollable scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-pro-scroll">
                        {
                            questions.map((item, idx) => <McQuestion key={idx} qData={item} />)
                        }
                        <div className="w-full my-5 flex justify-center items-center text-white">
                            <button className="bg-gradient-to-br from-pro-blue to-pro-lightblue rounded-lg px-10 py-1 hover:from-pro-lightblue hover:to-pro-lightblue" type="submit">Submit</button>
                        </div>
                    </form>
            <style jsx>{`
                .scrollable {
                    max-height: calc(100vh - 120px);
                }
            `}</style>
        </div>
    )
};

export default McqTest;