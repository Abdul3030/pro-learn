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

const taskData = [
    {
        subject: 'Literature',
        estTime: '3 hours',
        description: 'Reseach about Harper Lee and write a 1500 words essay about Harper Lee’s background.',
        completed: false
    },
    {
        subject: 'Physics',
        estTime: '30 minutes',
        description: 'Practing multiple choices to familiarise yourself with physics.',
        completed: true
    },
    {
        subject: 'History',
        estTime: '2 hours',
        description: 'Questions about Modern World History will help you to understand even deeper about history.',
        completed: false
    },
    {
        subject: 'Social Studies',
        estTime: '1 hours',
        description: 'These practice Source-Based-Questions will help to tackle problems easier.',
        completed: false
    },
]

const Overview = ({tasks, quote, summary, rewards}) => {
    console.log(quote);
    const [active , setActive] = React.useState('');

    //  ${active ? 'w-1/3' : 'w-2/3'}
    //  ${active ? 'grid-cols-1 h-4/6' : 'grid-cols-2 h-3/5'}

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
                            taskData.map((item, idx) => 
                            <TaskCard 
                                key={idx} 
                                index={idx}
                                clicked={!item.completed ? () => setActive(item.subject) : () => {return;}}
                                subject={item.subject}
                                estTime={item.estTime}
                                description={item.description}
                                active={active === item.subject}
                                completed={item.completed}
                                />)
                        }
                    </div>
                    <div className="pl-5">
                        <Recommended active={!active} />
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
                        active === 'Social Studies' ?
                        <McqTest title="Social Studies" />:
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
  
    // const tasks = await api.get('/task/pending').then((res) => res.data);
    const tasks = [
        {
            subject: 'Literature',
            estTime: 40,
            description: 'Lorem ipsum akdjfk adjkjka djfkldj djdkl ddjdkl',
            completed: false,
        },
        {
            subject: 'Mathmatics',
            estTime: 40,
            description: 'Lorem ipsum akdjfk adjkjka djfkldj djdkl ddjdkl',
            completed: false,
        },
        {
            subject: 'Physics',
            estTime: 40,
            description: 'Lorem ipsum akdjfk adjkjka djfkldj djdkl ddjdkl',
            completed: false,
        },
        {
            subject: 'Chemistry',
            estTime: 40,
            description: 'Lorem ipsum akdjfk adjkjka djfkldj djdkl ddjdkl',
            completed: false,
        },
    ];
    // const quote = await api.get('/home/quote').then((res) => res.data);
    // const summary = await api.get('/path/summary').then((res) => res.data);
    // const rewards = await api.get('/reward/earned').then((res) => res.data);

    const summary = {
        days_to_next_exam: 40, 
        days_to_holiday: 8, 
        tasks: 4,
        lessons_taken: 2, 
        time_spent: 150, 
        rewards_earned: 5
      };
    
      const rewards = [
        {
          name: 'Early access the name of the blank.',
          used: false,
        },
        {
          name: 'Early access the name of the blank.',
          used: true,
        },
        {
          name: 'Early access the name of the blank.',
          used: true,
        },
        {
          name: 'Early access the name of the blank.',
          used: true,
        },
        {
          name: 'Early access the name of the blank.',
          used: true,
        },
      ];
   
    return {
      props: {
        tasks,
        quote: 'This is the quote of the day.',
        // summary: summary.data,
        // rewards: rewards.data
        summary,
        rewards
      }
    }
  };

export default Overview;