import platformsImg from "/images/illustration-multiple-platforms.webp";

function ManageCard({ className }) {
  return (
    <div className={`bg-white p-4 tablet:p-6 rounded-[10px] flex flex-col gap-4 overflow-hidden tablet:justify-between ${className}`}>
      <img src={platformsImg} alt="Image of two accounts on different platforms" className="tablet:w-79 tablet:max-w-none" />

      <h2 className="font-medium text-[26px] tablet:text-[28px] desktop:text-[32px] leading-6 tablet:leading-6.5 desktop:leading-7 tracking-[-6%] desktop:tracking-[-1.2px] tablet:max-w-52 desktop:max-w-50">Manage multiple accounts and platforms.</h2>
    </div>
  )
}

export default ManageCard;