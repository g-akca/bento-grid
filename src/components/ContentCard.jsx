import createImg from "/images/illustration-create-post.webp";

function ContentCard({ className }) {
  return (
    <div className={`bg-yellow-100 rounded-[10px] p-8 flex flex-col gap-6 ${className}`}>
      <h2 className="text-[32px] leading-7 tracking-[-6%] font-medium">Create and schedule content <i className="text-purple-500">quicker.</i></h2>

      <img src={createImg} alt="Create post image" className="w-47.5" />
    </div>
  )
}

export default ContentCard;