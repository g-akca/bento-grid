import followerImg from "/images/illustration-grow-followers.webp";

function FollowerCard({ className }) {
  return (
    <div className={`bg-purple-500 p-6 rounded-[10px] flex flex-col tablet:flex-row gap-10 items-center justify-center text-center tablet:text-start desktop:gap-2 desktop:justify-between ${className}`}>
      <img src={followerImg} alt="Grow followers" className="w-56.75" />

      <h2 className="text-white font-medium text-[32px] tablet:text-[36px] desktop:text-[40px] leading-7 tablet:leading-7.5 desktop:leading-9 tracking-[-6%] desktop:tracking-[0.2px] tablet:max-w-64.25 desktop:grow desktop:max-w-none">Grow followers with non-stop content.</h2>
    </div>
  )
}

export default FollowerCard;