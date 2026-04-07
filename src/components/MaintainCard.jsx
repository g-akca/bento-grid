import scheduleImg from "/images/illustration-consistent-schedule.webp";

function MaintainCard({ className }) {
  return (
    <div className={`bg-yellow-500 rounded-[10px] px-4 pt-4 tablet:px-6 tablet:pt-6 flex flex-col gap-4 items-start overflow-hidden ${className}`}>
      <h2 className="font-medium text-[26px] tablet:text-[28px] desktop:text-[32px] leading-6 tablet:leading-6.5 desktop:leading-7 tracking-[-6%] desktop:tracking-[-1px]">Maintain a consistent posting schedule.</h2>

      <img src={scheduleImg} alt="Consistent schedule" className="w-52" />
    </div>
  )
}

export default MaintainCard;