import Countdown from "../component/Homepage/Countdown";
import Summary from "../component/Homepage/Summary";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full h-20 shadow-lg"></div>
      <div className="w-full h-36 flex justify-center items-center px-5">
        <Summary />
        <Countdown />
      </div>
    </div>
  )
}
