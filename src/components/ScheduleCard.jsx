import scheduleImg from "/images/illustration-schedule-posts.webp";

function ScheduleCard({ className }) {
  return (
    <div className={`bg-purple-100 py-8 px-4.25 tablet:px-8 rounded-[10px] text-center desktop:text-start flex flex-col items-center desktop:justify-center gap-6 overflow-hidden ${className}`}>
      <h2 className="font-medium text-[26px] tablet:text-[28px] desktop:text-[32px] leading-6 tablet:leading-6.5 desktop:leading-7 tracking-[-6%] desktop:tracking-[-1px]">Schedule to social media.</h2>

      <img src={scheduleImg} alt="Best time to post" className="tablet:w-89.25 desktop:max-w-none desktop:self-start" />

      <p className="px-2 tablet:px-0 tablet:max-w-89.75">Optimize post timings to publish content at the perfect time for your audience.</p>
    </div>
  )
}

export default ScheduleCard;