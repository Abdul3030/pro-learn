import * as React from 'react';
import momentjs from 'moment';
import { GetServerSideProps } from 'next';
import Calendar from "../../component/Homepage/Calendar";
import Countdown from "../../component/Homepage/Countdown";
import Happened from "../../component/Homepage/Happened";
import Rewards from "../../component/Homepage/Rewards";
import Summary from "../../component/Homepage/Summary";
import Weekly from "../../component/Homepage/Weekly";
import api from '../../axios';
import { useRouter } from 'next/router';

export default function Home({summary, rewards}) {
  
  const today = momentjs().format('D/M');
  const [date, setDate] = React.useState(today);

  const router = useRouter();

  //  Important days of the month

  const idays = [
    {
        date: '18',
        information: [
          'Literature Quiz 7',
          'Physics Prelims'
        ],
    },
    {
        date: '20',
        information: [
          'Mathmatics Quiz 1',
          'Literature Prelims'
        ],
    },
    {
        date: '21',
        information: [
          'Chemistry Quiz 3',
          'Mathmatics Prelims'
        ],
    },
    {
        date: '23',
        information: [
          'History Quiz 8',
          'Chemistry Prelims'
        ],
    },
    {
        date: '25',
        information: [
          'Social Studies Quiz 1',
          'History Prelims'
        ],
    },
];

  return (
    <div className="w-full height z-0">
      <div className="w-full flex justify-center">
        <div className="w-2/3 py-2 pl-9 flex shadow-right">
          <div className="flex-grow pb-10">
            <Summary summary={summary} />
            <Calendar setDate={setDate} selectedDay={date} idays={idays} />
          </div>
          <div className="px-10 pb-10">
            <Countdown />
            <Happened date={date} idays={idays} />
          </div>
        </div>
        <div className="w-1/3 px-4 py-2">
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
  
  const summary = await api.get('/path/summary').then((res) => res.data);

  const rewards = await api.get('/reward/earned').then((res) => res.data);

  
 
  return {
    props: {
      summary: summary.data,
      rewards: rewards.data
    }
  }
};
