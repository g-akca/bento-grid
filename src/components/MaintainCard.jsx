import scheduleImg from "/images/illustration-consistent-schedule.webp";

function MaintainCard({ className }) {
  return (
    <div className={`bg-yellow-500 rounded-[10px] px-4 pt-4 flex flex-col gap-4 items-start overflow-hidden ${className}`}>
      <h2 className="font-medium text-[26px] leading-6 tracking-[-6%]">Maintain a consistent posting schedule.</h2>

      <img src={scheduleImg} alt="Consistent schedule" className="w-52" />
    </div>
  )
}

export default MaintainCard;