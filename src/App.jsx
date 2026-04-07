import SocialMediaCard from "./components/SocialMediaCard";
import ManageCard from "./components/ManageCard";
import MaintainCard from "./components/MaintainCard";
import ScheduleCard from "./components/ScheduleCard";
import FollowerCard from "./components/FollowerCard";
import AudienceCard from "./components/AudienceCard";
import ContentCard from "./components/ContentCard";
import AICard from "./components/AICard";

function App() {
  return (
    <div className="text-base leading-base text-black min-h-screen bg-[#F6F5F6] px-4 py-8">
      <main className="flex flex-col gap-8">
        <SocialMediaCard />
        <ManageCard />
        <MaintainCard />
        <ScheduleCard />
        <FollowerCard />
        <AudienceCard />
        <ContentCard />
        <AICard />
      </main>
    </div>
  )
}

export default App;