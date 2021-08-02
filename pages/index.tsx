import * as React from 'react';
import momentjs from 'moment';
import { GetServerSideProps } from 'next';
import Calendar from "../component/Homepage/Calendar";
import Countdown from "../component/Homepage/Countdown";
import Happened from "../component/Homepage/Happened";
import Rewards from "../component/Homepage/Rewards";
import Summary from "../component/Homepage/Summary";
import Weekly from "../component/Homepage/Weekly";
import api from '../axios';

export default function Home({summary, rewards}) {
  const today = momentjs().format('D MMM')
  const [date, setDate] = React.useState(today);
  return (
    <div className="w-full height z-0">
      <div className="w-full flex justify-center">
        <div className="w-2/3 py-2 pl-7 flex shadow-right">
          <div className="flex-grow pb-10">
            <Summary summary={summary} />
            <Calendar setDate={setDate} />
          </div>
          <div className="px-10 pb-10">
            <Countdown />
            <Happened date={date} />
          </div>
        </div>
        <div className="w-1/3 px-5 py-2">
          <Weekly 
            data={summary}
            />
          <Rewards rewards={rewards} />
        </div>
      </div>
      <style jsx>{`
        .height {
          height: 100vh - 60px;
        }
      `}</style>
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  
  // const summary = await api.get('/path/summary').then((res) => res.data);

  const summary = {
    days_to_next_exam: 40, 
    days_to_holiday: 8, 
    tasks: 4,
    lessons_taken: 2, 
    time_spent: 150, 
    rewards_earned: 5
  }
  // const rewards = await api.get('/reward/earned').then((res) => res.data);

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
      // summary: summary.data,
      summary,
      // rewards: rewards.data
      rewards
    }
  }
};
