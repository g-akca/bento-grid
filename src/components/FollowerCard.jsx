import followerImg from "/images/illustration-grow-followers.webp";

function FollowerCard({ className }) {
  return (
    <div className={`bg-purple-500 p-6 rounded-[10px] flex flex-col gap-10 items-center text-center ${className}`}>
      <img src={followerImg} alt="Grow followers" className="w-56.75" />

      <h2 className="text-white font-medium text-[32px] leading-7 tracking-[-6%]">Grow followers with non-stop content.</h2>
    </div>
  )
}

export default FollowerCard;