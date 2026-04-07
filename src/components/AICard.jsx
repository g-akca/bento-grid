import aiImg from "/images/illustration-ai-content.webp";

function AICard({ className }) {
  return (
    <div className={`bg-yellow-500 p-6 rounded-[10px] flex flex-col gap-6 ${className}`}>
      <h2 className="text-[32px] tablet:text-[36px] leading-7 tablet:leading-7.5 tracking-[-6%] font-medium">Write your content using AI.</h2>

      <img src={aiImg} alt="AI chat image" className="w-55" />
    </div>
  )
}

export default AICard;