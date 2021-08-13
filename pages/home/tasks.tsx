import * as React from 'react';
import useSWR from 'swr';
import { BsPlayFill } from 'react-icons/bs';
import { GetServerSideProps } from 'next';
import api from '../../axios';
import TaskCard from '../../component/Homepage/Overview/TaskCard';
import Weekly from '../../component/Homepage/Weekly';
import Rewards from '../../component/Homepage/Rewards';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LiteratureTextbox from '../../component/Homepage/Overview/LiteratureTextbox';
import RecommendItem from '../../component/Homepage/Recommend/RecommendItem';
import Recommended from '../../component/Homepage/Recommend';
import McQuestion from '../../component/Homepage/Overview/McQuestion';
import Quote from '../../component/Homepage/Quote';
import McqTest from '../../component/Homepage/Overview/McqTest';
import { useRouter } from 'next/dist/client/router';
import { FiLoader } from 'react-icons/fi';



const Overview = ({tasks, quote, summary, rewards}) => {

    const router = useRouter();
    //  Setting up States
    const [active , setActive] = React.useState('');
    const [selectedTest, setSelectedTest] = React.useState<number | null>(null);
    // Fetching selected test data
    const fetcher = (url) => fetch(url).then(res => res.json());
    const { data, error } = useSWR(`/api/test/get/${selectedTest}`, fetcher);
    const selectedTestData = data ? data.data : null;
    console.log(data);
    if(data){
        console.log("Selected Test Data", selectedTestData.length);
    }


    const weeklyReards = (
        <>
            <Weekly data={summary} />
            <Rewards rewards={rewards} />
        </>
    );
    let testItem;
    if(data){
        testItem = data.data.length > 0 && selectedTestData[0].type === "written" ? <LiteratureTextbox /> : <McqTest title={active} data={selectedTestData[0]} /> 
    }
    return (
        <div className="w-full">
            <div className="w-full flex transition-width duration-500 ease-in-out">
                <div className={`${active ? 'w-1/3' : 'w-2/3'} transition-width duration-500 ease-in-out relative inline-block max-h-full shadow-right px-3`} >
                    <div className="w-full h-14 px-5">
                        <div className="w-full py-2 text-sm font-medium">
                            <h1 onClick={() => router.push('/home')} className="relative text-pro-lightgray cursor-pointer"> <span className="absolute top-0.5  inline-block transform -rotate-180 -left-4"><BsPlayFill /></span> Overview</h1>
                            <h2 className="text-pro-darkgray">{`Today's Tasks`}</h2>
                        </div>
                    </div>
                    <div className="height overflow-y-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-pro-scroll scrollbar-track-gray-100">
                        <div className={`pr-6 grid gap-5 pl-5 ${active ? 'grid-cols-1' : 'grid-cols-2'}   py-2 `}>
                            {
                                tasks.filter(val => val.type === 'test' || val.type === 'content').map((item, idx) => 
                                <TaskCard
                                    key={idx} 
                                    index={idx}
                                    clicked={!item.completed ? () => {setActive(item.name); setSelectedTest(item.id);} : () => {return;}}
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
                </div>
                <div className={`${active ? 'w-2/3' : 'w-1/3'} transition-width duration-500 ease-in-out max-h-full pl-3 pr-4 py-2`}>
                    

                    {
                         active ? testItem : weeklyReards
                    }
                    
                </div>
            </div>
            <style jsx>{`
            .height {
                max-height: calc(100vh - 146px);
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