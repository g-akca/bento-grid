import scheduleImg from "/images/illustration-schedule-posts.webp";

function ScheduleCard() {
  return (
    <div className="bg-purple-100 py-8 px-4.25 rounded-[10px] text-black text-center flex flex-col gap-6">
      <h2 className="font-medium text-black text-[26px] leading-6 tracking-[-6%]">Schedule to social media.</h2>

      <img src={scheduleImg} alt="Best time to post" />

      <p className="px-2">Optimize post timings to publish content at the perfect time for your audience.</p>
    </div>
  )
}

export default ScheduleCard;