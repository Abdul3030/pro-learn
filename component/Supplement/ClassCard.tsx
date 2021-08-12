import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import { gradColPallate } from '../../colorPallate';


const ClassCard = ({index, data}) => {
    const {id, class_name, subject, time, description} = data;
    const router = useRouter();
    console.log(router.asPath+'/'+ id);
    return (
        <div onClick={() => router.push(`${router.asPath}/${id}`)} className="bg-white cursor-pointer w-full h-72 shadow-pro text-pro-darkgray px-7 py-5 rounded">
            <div className="w-full">
                <h2 className="text-xs">{class_name}</h2>
                <h1 className="text-lg font-medium">{subject}</h1>
            </div>
            <h1 className={`my-10 text-5xl bg-clip-text font-medium bg-gradient-to-r text-transparent ${gradColPallate[index]}`}>
                {time}mins
            </h1>
            <div className="w-full">
                <h3 className="font-medium text-sm">Description</h3>
                <p className="text-xs">
                    {
                        description
                    }
                </p>
            </div>
        </div>
    )
};


export default ClassCard;