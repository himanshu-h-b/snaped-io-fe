import History from "./components/history";
import Introduction from "./components/introduction";
import Steps from "./components/steps";
import Tutorials from "./components/tutorials";
import VideoOptions from "./components/video-options";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
      <Steps />
      <Introduction />
      <VideoOptions />
      <History />
      <Tutorials />
    </div>
  );
};

export default Dashboard;
