import {AiFillFacebook, AiOutlineInstagram,AiFillYoutube,AiOutlineTwitter} from "react-icons/ai"

export const Footer = () => {
  return (
    <div className=" px-6 xl:px-24  lg:py-20  pb-5">
    <div className="flex justify-center gap-10 lg:pb-4 pb-2">
    <AiFillFacebook size={30} className="text-[#111827]"/>
    <AiOutlineInstagram size={30} className="text-[#111827]"/>
    <AiOutlineTwitter size={30} className="text-[#111827]"/>
    <AiFillYoutube size={30} className="text-[#111827]"/>
    </div>

    <div className="flex justify-center lg:gap-8 gap-4 flex-col lg:flex-row py-4 font-DMSans text-[#111827] lg:text-lg text-base font-semibold">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
    </div>

    <div className="flex justify-center pt-4 text-[#6B7280] lg:text-lg text-base font-semibold">
    <p>© 2023 MovieBox by Anazodo Michael  </p>
    </div>
    </div>
  )
}