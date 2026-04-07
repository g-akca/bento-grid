import followerImg from "/images/illustration-grow-followers.webp";

function FollowerCard({ className }) {
  return (
    <div className={`bg-purple-500 p-6 rounded-[10px] flex flex-col tablet:flex-row gap-10 items-center justify-center text-center tablet:text-start ${className}`}>
      <img src={followerImg} alt="Grow followers" className="w-56.75" />

      <h2 className="text-white font-medium text-[32px] tablet:text-[36px] leading-7 tablet:leading-7.5 tracking-[-6%] tablet:w-64.25">Grow followers with non-stop content.</h2>
    </div>
  )
}

export default FollowerCard;