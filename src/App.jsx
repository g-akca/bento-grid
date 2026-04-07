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
    <div className="text-base leading-base text-black min-h-screen bg-[#F6F5F6] px-4 py-8 tablet:px-10 tablet:py-13">
      <main className="flex flex-col gap-8 tablet:grid tablet:grid-cols-2 tablet:grid-rows-[324px_247px_auto_auto_auto_auto]">
        <SocialMediaCard className="tablet:col-span-2" />
        <ManageCard />
        <MaintainCard className="h-[216.25px] tablet:h-auto" />
        <ScheduleCard className="tablet:col-span-2" />
        <FollowerCard className="tablet:col-span-2" />
        <AudienceCard className="tablet:col-span-2" />
        <ContentCard />
        <AICard />
      </main>
    </div>
  )
}

export default App;