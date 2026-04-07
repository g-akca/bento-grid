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
    <div className="text-base leading-base text-black min-h-screen bg-[#F6F5F6] px-4 py-8 tablet:px-10 tablet:py-13 desktop:flex desktop:justify-center desktop:items-center">
      <main 
        className="
          flex flex-col gap-8 tablet:grid tablet:grid-cols-2 tablet:grid-rows-[324px_247px_auto_auto_auto_auto]
          desktop:grid-cols-[repeat(4,256px)] desktop:grid-rows-[324px_247px_246px]
        "
      >
        <SocialMediaCard className="tablet:col-span-2" />
        <ManageCard />
        <MaintainCard className="h-[216.25px] tablet:h-auto" />
        <ScheduleCard className="tablet:col-span-2 desktop:col-span-1 desktop:row-span-2 desktop:col-start-4 desktop:row-start-1" />
        <FollowerCard className="tablet:col-span-2" />
        <AudienceCard className="tablet:col-span-2 desktop:col-span-1 desktop:col-start-2 desktop:row-start-3" />

        <div className="contents desktop:flex desktop:flex-col desktop:gap-8 desktop:col-start-1 desktop:row-start-1 desktop:row-span-3">
          <ContentCard className="desktop:h-103.75" />
          <AICard className="desktop:h-108.5" />
        </div>
      </main>
    </div>
  )
}

export default App;