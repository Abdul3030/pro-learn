import * as React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { GetServerSideProps } from 'next';
import api from '../axios';
import TaskCard from '../component/Homepage/Overview/TaskCard';
import Weekly from '../component/Homepage/Weekly';
import Rewards from '../component/Homepage/Rewards';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LiteratureTextbox from '../component/Homepage/Overview/LiteratureTextbox';
import RecommendItem from '../component/Homepage/Recommend/RecommendItem';
import Recommended from '../component/Homepage/Recommend';
import McQuestion from '../component/Homepage/Overview/McQuestion';
import Quote from '../component/Homepage/Quote';
import McqTest from '../component/Homepage/Overview/McqTest';



const Overview = ({tasks, quote, summary, rewards}) => {
    console.log(summary);
    const [active , setActive] = React.useState('');


    return (
        <div className="w-full">
            <div className="w-full flex">
                <div className={`${active ? 'w-1/3' : 'w-2/3'} relative height max-h-full scrollbar-thumb-rounded-full overflow-y-auto scrollbar-thin scrollbar-thumb-pro-scroll scrollbar-track-gray-100`} >
                    <div className="w-full bg-white z-40 pl-5 sticky top-0 left-0">
                        <div className="w-full py-2">
                            <h1 className="relative text-gray-700 text-base font-medium cursor-pointer"> <span className="absolute top-1  inline-block transform -rotate-180 -left-4"><BsPlayFill /></span> Overview</h1>
                            <h2 className="text-sm text-gray-500">Todays Tasks</h2>
                        </div>
                    </div>
                    <div className={`pr-5 grid gap-5 pl-5 ${active ? 'grid-cols-1' : 'grid-cols-2'}   py-2 `}>
                        {
                            tasks.filter(val => val.type === 'test' || val.type === 'content').map((item, idx) => 
                            <TaskCard 
                                key={idx} 
                                index={idx}
                                clicked={!item.completed ? () => setActive(item.name) : () => {return;}}
                                subject={item.name}
                                estTime={item.time}
                                description={item.text}
                                active={active === item.name}
                                completed={item.completed}
                                />)
                        }
                    </div>
                    <div className="pl-5">
                        <Recommended active={!active} data={tasks} />
                    </div>
                    <div className="sticky bottom-0 w-full bg-white pb-3 pl-5">
                        <Quote active={active ? true : false} quote={quote.text} />
                    </div>
                </div>
                <div className={`${active ? 'w-2/3' : 'w-1/3'} max-h-full px-5 py-2`}>
                    {
                        active === 'Literature' ?
                        <LiteratureTextbox />:
                        active ===  'Physics' ?
                        <McqTest title="Physics" />:
                        active === 'History' ?
                        <McqTest title="History" />:
                        active === 'Mathematics' ?
                        <McqTest title="Mathematics" />:
                        <>
                            <Weekly data={summary} />
                            <Rewards rewards={rewards} />
                        </>

                    }
                    
                </div>
            </div>
            <style jsx>{`
            .height {
                max-height: calc(100vh - 80px);
            }
            `}</style>
        </div>
    )
};

export const getServerSideProps: GetServerSideProps = async () => {
  
    const tasks = await api.get('/task/pending').then((res) => res.data.data);
    const summary = await api.get('/home/summary').then((res) => res.data.data);
    const rewards = await api.get('/reward/on_offer').then((res) => res.data.data);
    const quote = await api.get('/home/quote').then((res) => res.data.data);
   
    return {
      props: {
        tasks,
        summary,
        rewards,
        quote
      }
    }
  };

export default Overview;