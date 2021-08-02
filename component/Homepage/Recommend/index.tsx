import * as React from 'react';
import RecommendItem from './RecommendItem';



const Recommended = ({active}: {active: boolean}) => {

    return (
        <div className="w-full pr-5">
            <h1 className="text-sm font-medium py-2">Recommended For You</h1>
            <div className={`grid gap-5 py-2 ${active ? 'grid-cols-2' : 'grid-cols-1'}`}>
                <RecommendItem />
                <RecommendItem />
                <RecommendItem />
            </div>
        </div>
    )
};

export default Recommended;