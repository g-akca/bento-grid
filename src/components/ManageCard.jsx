import platformsImg from "/images/illustration-multiple-platforms.webp";

function ManageCard() {
  return (
    <div className="bg-white p-4 rounded-[10px] flex flex-col gap-4">
      <img src={platformsImg} alt="Image of two accounts on different platforms" />

      <h2 className="font-medium text-black text-[26px] leading-6 tracking-[-6%]">Manage multiple accounts and platforms.</h2>
    </div>
  )
}

export default ManageCard;