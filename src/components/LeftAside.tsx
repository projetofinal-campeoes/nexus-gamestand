import Image from 'next/image'
import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsFillSunFill } from 'react-icons/bs'
import { FaBug, FaCoins, FaRegUserCircle, FaUserFriends } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { GiGamepadCross } from 'react-icons/gi'

const LeftAside = () => {
  return (
    <>  
        <div id="aside esquerda" className="mr-10 pr-6 border-r-[1px] border-backgroundcolor border-solid">
            <Image src="/Logo-dark.svg" width="200" height="40" className="px-10 cursor-pointer"/>
            <div className="pt-[7.5rem]">
              <div className="flex flex-col gap-5 text-defaulttextdark">
                <p className="text-[12px] cursor-default">Nexus tools</p>
                <div className="flex gap-5">
                  <FaRegUserCircle className="cursor-pointer" /> <p className="cursor-pointer">Profile</p>
                </div>
                <div className="flex gap-5">
                  <GiGamepadCross className="cursor-pointer" /> <p className="cursor-pointer">Games</p> 
                </div>
                <div className="flex gap-5">
                  <FaCoins className="cursor-pointer" /> <p className="cursor-pointer">Promotions</p>
                </div>
                <div className="flex gap-5">
                  <FaUserFriends className="cursor-pointer" /> <p className="cursor-pointer">Friends</p>
                </div>
                <div className="flex gap-5">
                  <BsFillSunFill className="cursor-pointer" /> <p className="cursor-pointer">Light theme</p>
                </div>
                <div className="flex flex-col"></div>
                <hr className="text-backgroundcolor"></hr>
                <p className="text-[12px] cursor-default">User tools</p>
                <div className="flex gap-5">
                  <AiOutlineSetting className="cursor-pointer" /> <p className="cursor-pointer">Settings</p>
                </div>
                <div className="flex gap-5">
                  <FaBug className="cursor-pointer" /> <p className="cursor-pointer">Bug report</p>
                </div>
                <div className="flex gap-5">
                  <FiLogOut className="cursor-pointer" /> <p className="cursor-pointer">Log out</p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default LeftAside