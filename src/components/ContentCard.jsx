import createImg from "/images/illustration-create-post.webp";

function ContentCard({ className }) {
  return (
    <div className={`bg-yellow-100 rounded-[10px] p-8 tablet:p-6 desktop:p-8 flex flex-col gap-6 tablet:justify-center ${className}`}>
      <h2 className="text-[32px] tablet:text-[36px] desktop:text-[40px] leading-7 tablet:leading-7.5 desktop:leading-9 tracking-[-6%] desktop:tracking-[-2px] font-medium">Create and schedule content <i className="text-purple-500">quicker.</i></h2>

      <img src={createImg} alt="Create post image" className="w-47.5" />
    </div>
  )
}

export default ContentCard;