import Calendar from "../component/Homepage/Calendar";
import Countdown from "../component/Homepage/Countdown";
import Happened from "../component/Homepage/Happened";
import Rewards from "../component/Homepage/Rewards";
import Summary from "../component/Homepage/Summary";
import Weekly from "../component/Homepage/Weekly";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full h-20 shadow-lg"></div>
      <div className="w-full flex justify-center px-5">
        <div className="w-3/5 h-full grid grid-cols-2 py-2 shadow-2xl">
          <Summary />
          <Countdown />
          <Calendar />
          <Happened />
        </div>
        <div className="w-2/5 px-5 py-2">
          <Weekly />
          <Rewards />
        </div>
      </div>
    </div>
  )
}
