import audienceImg from "/images/illustration-audience-growth.webp";

function AudienceCard({ className }) {
  return (
    <div className={`bg-white p-6 rounded-[10px] flex flex-col gap-6 overflow-hidden tablet:flex-row tablet:justify-between tablet:items-center desktop:items-start desktop:flex-col ${className}`}>
      <div className="flex flex-col gap-3.75">
        <h2 className="font-medium text-[46px] tablet:text-[54px] desktop:text-[62px] leading-10.5 tablet:leading-12 desktop:leading-14.5 tracking-[-4%] desktop:tracking-[-3px]">&gt;56%</h2>
        <p>faster audience growth</p>
      </div>

      <img src={audienceImg} alt="Audience images" className="w-44.5" />
    </div>
  )
}

export default AudienceCard;