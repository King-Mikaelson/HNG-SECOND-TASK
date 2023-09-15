import Image from "next/image"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import {BiSearch} from "react-icons/bi"
import {AiFillPlayCircle} from "react-icons/ai"


type Props = {
  search:string,
  setSearch: Dispatch<SetStateAction<string>>
  
}
const Hero = ({search,setSearch}:Props) => {


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>{
    setSearch(e.target.value)
  }

  console.log(search)


  return (
    <main className='bg-[url("/Poster.svg")] w-screen h-[75vh] bg-cover bg-no-repeat bg-center px-6 xl:px-24 pt-6 flex flex-col relative'>
    <div className='flex justify-between'>
    <Image src="/Logo.svg" alt="logo image" width={300} height={300} className="lg:w-48 w-32  lg:h-full"/>

    <div className="bg-transparent hidden md:flex justify-between items-center  rounded-[0.375rem] border-2 solid border-[#D1D5DB]  lg:w-[32rem] px-3 h-fit py-2 w-[20rem]">
    <input value={search} onChange={(e) => handleSearch(e)} type="text" className="font-DMSans text-base  border-none outline-none text-white  w-full bg-transparent placeholder:text-white placeholder:text-base placeholder:font-DMSans"   placeholder="What do you want to watch?"/>
    <BiSearch size={20} className="text-white" />
    </div>

    <div className="flex gap-6 items-center">
    <p className="font-DMSans text-white text-base font-bold">Sign In</p>
    <Image  src="/Menu.svg" alt="menu image" width={300} height={300} className="w-10"/>
    </div>
    </div>

    <div className="bg-transparent flex md:hidden justify-between items-center  rounded-[0.375rem] border-2 solid border-[#D1D5DB] px-3 h-fit py-2 w-full mt-6">
    <input value={search} onChange={(e) => handleSearch(e)} type="text" className="font-DMSans text-base  border-none outline-none text-white  w-full bg-transparent placeholder:text-white placeholder:text-base placeholder:font-DMSans"   placeholder="What do you want to watch?"/>
    <BiSearch size={20} className="text-white" />
    </div>

    <div className="flex justify-between m-auto mx-0 items-center">
    <div className="flex  flex-col gap-4">
    <h1 className="md:w-[11ch] leading-10 font-bold font-DMSans lg:text-5xl text-3xl text-white ">John Wick 3 : Parabellum</h1>


    <div className="flex text-white  gap-10">
    <div className="flex flex-row items-center  gap-2">
    <Image src="imdb.svg" alt="imdb logo" width={100} height={100} className="w-10"/>
    <p className=" font-normal font-DMSans text-xs ">86.0 / 100</p>
    </div>
    <div className="flex flex-row items-center  gap-2">
    <Image src="tomato.svg" alt="tomato" width={100} height={100} className="w-5"/>
    <p className=" font-normal font-DMSans text-xs ">
    97%
    </p>
    </div>
    </div>

    <p className="md:w-[32ch] font-medium font-DMSans text-sm text-white ">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
    
    <button className="bg-[#BE123C] flex py-2 px-4 items-center gap-2 w-fit rounded-[0.375rem] text-white">
    <AiFillPlayCircle size={20} className="text-white"/>
    <p className="font-DMSans font-bold text-sm uppercase">Watch Trailer</p>
    </button>
    </div>

    <div  className="flex  md:flex-col gap-1  absolute md:top-[40%] md:right-2  font-normal font-DMSans text-xs text-[#9CA3AF] items-center bottom-5 right-[40%]">
    <p>1</p>
    <p>2</p>

    <p className="text-white text-base pr-4">- 3</p>
    <p>4</p>
    <p>5</p>

    </div>
    </div>

  
    </main>
  )
}

export default Hero
