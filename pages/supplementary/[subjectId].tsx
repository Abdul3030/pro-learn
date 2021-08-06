import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import ClassCard from '../../component/Supplement/ClassCard';
import RewardCard from '../../component/Supplement/RewardCard';



const SubjectClasses = () => {
    const router = useRouter();
    return (
        <div className="w-full px-10">
            <h1 onClick={() => router.back()} className="relative text-pro-gray font-medium py-2 cursor-pointer"><span className="absolute top-3  inline-block transform -rotate-180 -left-4"><BsPlayFill /></span> Mathmatics</h1>
            <div className="">
                <h1 className="relative text-2xl font-medium text-pro-darkgray">Supplementary Classes</h1>
                <p className="text-sm text-pro-darkgray">These supplementary classes will help you to learn, understand and practice topics that you need more help in.</p>
            </div>
            <div className="w-full py-5 grid grid-cols-3 gap-5">
               { Array(3).fill('').map((val, index) => <ClassCard key={index} index={index} />)}
            </div>
            <div className="w-full py-5 grid grid-cols-3 gap-5">
                <RewardCard />
                <RewardCard />
                <RewardCard />
            </div>
        </div>
    )
};


export default SubjectClasses;