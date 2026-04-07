import platformsImg from "/images/illustration-multiple-platforms.webp";

function ManageCard({ className }) {
  return (
    <div className={`bg-white p-4 tablet:p-6 rounded-[10px] flex flex-col gap-4 overflow-hidden tablet:justify-between ${className}`}>
      <img src={platformsImg} alt="Image of two accounts on different platforms" className="tablet:w-79 tablet:max-w-none" />

      <h2 className="font-medium text-[26px] tablet:text-[28px] leading-6 tablet:leading-6.5 tracking-[-6%] tablet:w-52">Manage multiple accounts and platforms.</h2>
    </div>
  )
}

export default ManageCard;