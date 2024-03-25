import { BackgroundBoxesDemo } from "../components/BackgroundBoxesDemo";
import MostPopular from "./MostPopular";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen  flex">
      <div className="w-full h-full bg-lprimary dark:bg-dprimary">
        <MostPopular />
        <BackgroundBoxesDemo />
      </div>
    </div>
  );
};

export default Dashboard;
