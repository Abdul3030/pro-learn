import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import { GetServerSideProps } from 'next';
import api from '../../axios'; 
import { BsPlayFill } from 'react-icons/bs';
import ClassCard from '../../component/Supplement/ClassCard';
import RewardCard from '../../component/Supplement/RewardCard';



const SubjectClasses = ({classes}) => {
    const router = useRouter();
    return (
        <div className="w-full px-10 py-2">
            <h1 onClick={() => router.back()} className="relative text-pro-lightgray font-medium text-sm cursor-pointer"><span className="absolute top-0.5  inline-block transform -rotate-180 -left-4"><BsPlayFill /></span> Mathmatics</h1>
            <div className="mt-6">
                <h1 className="relative text-2xl font-medium text-pro-darkgray">Supplementary Classes</h1>
                <p className="text-sm text-pro-darkgray">These supplementary classes will help you to learn, understand and practice topics that you need more help in.</p>
            </div>
            <div className="w-full mt-5 py-5 grid grid-cols-3 gap-5">
               { classes.map((val, index) => <ClassCard key={index} index={index} data={val} />)}
            </div>
            <div className="w-full mt-1 grid grid-cols-3 gap-5">
                <RewardCard />
                <RewardCard />
                <RewardCard />
            </div>
        </div>
    )
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    

    const classes = await api.get(`/supplementary/${query}`).then((res) => res.data.data);
  
    
    return {
      props: {
          classes,
      }
    }
  };
  

export default SubjectClasses;