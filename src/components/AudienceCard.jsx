import audienceImg from "/images/illustration-audience-growth.webp";

function AudienceCard() {
  return (
    <div className="bg-white p-6 rounded-[10px] flex flex-col gap-6">
      <div className="flex flex-col gap-3.75">
        <h2 className="font-medium text-[46px] leading-10.5 tracking-[-4%]">&gt;56%</h2>
        <p>faster audience growth</p>
      </div>

      <img src={audienceImg} alt="Audience images" className="w-44.5" />
    </div>
  )
}

export default AudienceCard;