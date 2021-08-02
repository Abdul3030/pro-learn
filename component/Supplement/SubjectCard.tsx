import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import {BiDotsVerticalRounded, BiCheck} from 'react-icons/bi';


const SubjectCard = ({data}) => {
    const {id, sub_name, class_name, level, progress, prev_score} = data;
    const [active, setActive] = React.useState(false);
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/supplementary/${id}`) } className="relative group w-full cursor-pointer h-36 px-5 py-2 flex flex-col justify-between shadow-pro rounded">
            <div className={`absolute transform ${active ? 'block' : 'hidden'} group-hover:block transition-all duration-1000 ease-in-out w-2 h-full top-0 left-0 bg-pro-blue rounded`}></div>
            <div className="w-full flex justify-between">
                {/* ********** Subject Top  *************** */}
                <div className="text-xs">
                    <h1 className="text-pro-darkgray font-medium text-base">{sub_name}</h1>
                    <h3 className="text-pro-gray">Class {class_name}</h3>
                    <h3 className="text-pro-gray">{level}</h3>
                </div>
                <div className="text-4xl cursor-pointer text-pro-gray -mr-4">
                    <BiDotsVerticalRounded />
                </div>
            </div>
            {/**************** Progress Bar ***************/ }
            <div className="relative w-full py-5">
                <div className="w-full h-1 bg-pro-white rounded-full overflow-hidden">
                    <div className="h-full bg-pro-blue" style={{width: `${progress}%`}}></div>
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex justify-between items-center">
                    <div className={`w-5 h-5 rounded-full bg-pro-blue flex justify-center items-center text-pro-lightgray ${progress >= 25 ? 'bg-pro-blue text-pro-lightgray' : 'bg-pro-white text-pro-white'}`}><BiCheck/></div>
                    <div className={`w-5 h-5 rounded-full bg-pro-blue flex justify-center items-center text-pro-lightgray ${progress >= 50 ? 'bg-pro-blue text-pro-lightgray' : 'bg-pro-white text-pro-white'}`}><BiCheck/></div>
                    <div className={`w-5 h-5 rounded-full bg-pro-blue flex justify-center items-center text-pro-lightgray ${progress >= 75 ? 'bg-pro-blue text-pro-lightgray' : 'bg-pro-white text-pro-white'}`}><BiCheck/></div>
                    <div className={`w-5 h-5 rounded-full bg-pro-blue flex justify-center items-center text-pro-lightgray ${progress >= 100 ? 'bg-pro-blue text-pro-lightgray' : 'bg-pro-white text-pro-white'}`}><BiCheck/></div>
                </div>
            </div>
            <div className="w-full">
                <h2 className="text-right text-pro-lightgray text-sm">Previous Test Score <span className="font-medium text-pro-darkgray">{prev_score}/100</span></h2>
            </div>
        </div>
    )
};
export default SubjectCard;