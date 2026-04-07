import aiImg from "/images/illustration-ai-content.webp";

function AICard({ className }) {
  return (
    <div className={`bg-yellow-500 p-6 rounded-[10px] flex flex-col gap-6 desktop:justify-between ${className}`}>
      <h2 className="text-[32px] tablet:text-[36px] desktop:text-[40px] leading-7 tablet:leading-7.5 desktop:leading-9 tracking-[-6%] desktop:tracking-[-2px] font-medium desktop:max-w-50">Write your content using AI.</h2>

      <img src={aiImg} alt="AI chat image" className="w-55 desktop:max-w-none" />
    </div>
  )
}

export default AICard;