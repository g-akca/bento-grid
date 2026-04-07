import scheduleImg from "/images/illustration-schedule-posts.webp";

function ScheduleCard({ className }) {
  return (
    <div className={`bg-purple-100 py-8 px-4.25 tablet:px-8 rounded-[10px] text-center flex flex-col items-center gap-6 ${className}`}>
      <h2 className="font-medium text-[26px] tablet:text-[28px] leading-6 tablet:leading-6.5 tracking-[-6%]">Schedule to social media.</h2>

      <img src={scheduleImg} alt="Best time to post" className="tablet:w-89.25" />

      <p className="px-2 tablet:px-0 tablet:w-89.75">Optimize post timings to publish content at the perfect time for your audience.</p>
    </div>
  )
}

export default ScheduleCard;