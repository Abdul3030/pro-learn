import * as React from 'react';
import SubjectCard from '../../component/Supplement/SubjectCard';
import { GetServerSideProps } from 'next';
import api from '../../axios';
import Summary from '../../component/Homepage/Summary';
import Weekly from '../../component/Homepage/Weekly';
import Rewards from '../../component/Homepage/Rewards';


const Supplementary = ({summary, rewards}) => {

    const subjectData = [
        {
            id: 284422,
            sub_name: 'English',
            class_name: '040A',
            level: 'Secondary 4',
            progress: 65,
            prev_score: 72
        },
        {
            id: 284422,
            sub_name: 'Mathmatics',
            class_name: '040A',
            level: 'Secondary 4',
            progress: 75,
            prev_score: 65
        },
        {
            id: 284422,
            sub_name: 'Chemistry',
            class_name: '040A',
            level: 'Secondary 4',
            progress: 95,
            prev_score: 85
        },
        {
            id: 284422,
            sub_name: 'Biology',
            class_name: '040A',
            level: 'Secondary 4',
            progress: 32,
            prev_score: 72
        },
        {
            id: 284422,
            sub_name: 'Physics',
            class_name: '040A',
            level: 'Secondary 4',
            progress: 50,
            prev_score: 85
        },
        {
            id: 284422,
            sub_name: 'Social Studies',
            class_name: '040A',
            level: 'Secondary 4',
            progress: 75,
            prev_score: 25
        },
    ];
    return (
        <div className="w-full h-full">
            <div className="w-full h-full">
                <div className="w-full h-full flex">
                    <div className="w-2/3 min-h-full  px-5 shadow-right">
                        <h1 className="text-2xl text-pro-darkgray font-medium my-3">Subjects</h1>
                        <div className="w-full grid grid-cols-2 gap-5">
                            {
                                subjectData.map((item, idx) => <SubjectCard key={idx} data={item} />)
                            }
                        </div>
                    </div>
                    <div className="w-1/3 h-full px-5">
                        <Weekly data={summary} />
                        <Rewards rewards={rewards} />
                    </div>
                </div>
            </div>
        </div>
    )
};
export const getServerSideProps: GetServerSideProps = async () => {
  
  const summary = await api.get('/path/summary').then((res) => res.data.data);

  const rewards = await api.get('/reward/earned').then((res) => res.data.data);

  
  return {
    props: {
        summary,
        rewards
    }
  }
};

export default Supplementary;