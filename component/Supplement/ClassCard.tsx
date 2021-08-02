import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import { gradColPallate } from '../../colorPallate';


const ClassCard = ({index}) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/supplementary/ajdljd/dkdkd')} className="w-full shadow-pro text-pro-darkgray p-6 rounded">
            <div className="w-full">
                <h2 className="text-xs">Supplementary Class 1</h2>
                <h1 className="text-xl font-medium">Fractions</h1>
            </div>
            <h1 className={`my-10 text-5xl bg-clip-text font-medium bg-gradient-to-r text-transparent ${gradColPallate[index]}`}>
                10mins
            </h1>
            <div className="w-full">
                <h3 className="font-medium text-sm">Description</h3>
                <p className="text-xs">
                    This supplementary Class will focus purely on
                    Fractions. Doing 8 questions in 10 mins will
                    allow you to familiarise yourself with fractions.
                </p>
            </div>
        </div>
    )
};


export default ClassCard;