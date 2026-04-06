import starsImg from "/images/illustration-five-stars.webp";

function SocialMediaCard() {
  return (
    <div className="py-10 px-8 bg-purple-500 rounded-[10px] text-white text-center flex flex-col gap-6">
      <h1 className="text-[46px] leading-10.5 font-medium tracking-[-4%]">Social Media <span className="text-yellow-500">10x</span> <i>Faster</i> with AI</h1>

      <div className="flex flex-col gap-2 items-center">
        <img src={starsImg} alt="Five stars" className="w-48" />
        <p>Over 4,000 5-star reviews</p>
      </div>
    </div>
  )
}

export default SocialMediaCard;