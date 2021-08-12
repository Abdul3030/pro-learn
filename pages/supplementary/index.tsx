import * as React from 'react';
import SubjectCard from '../../component/Supplement/SubjectCard';
import { GetServerSideProps } from 'next';
import api from '../../axios';
import Summary from '../../component/Homepage/Summary';
import Weekly from '../../component/Homepage/Weekly';
import Rewards from '../../component/Homepage/Rewards';


const Supplementary = ({summary, rewards, subjects}) => {
    
    return (
        <div className="w-full h-full">
            <div className="w-full h-full">
                <div className="w-full h-full flex">
                    <div className="w-2/3 min-h-full  px-5 shadow-right">
                        <h1 className="text-2xl text-pro-darkgray font-medium my-3">Subjects</h1>
                        <div className="w-full grid grid-cols-2 gap-5">
                            {
                                subjects.map((item, idx) => <SubjectCard key={idx} data={item} />)
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

  const subjects = await api.get('/supplementary').then((res) => res.data.data);

  
  return {
    props: {
        summary,
        rewards,
        subjects
    }
  }
};

export default Supplementary;