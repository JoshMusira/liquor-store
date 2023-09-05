import { useState } from 'react'
import { AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'
import { BsFillSaveFill } from 'react-icons/bs'


const SideMenu = ({ menu, setMenu }) => {
    return (
        <div className={menu ? "fixed top-0 left-0 w-[200px] sm:w-[300px] lg:w-[350px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>

            <AiOutlineClose size={30} onClick={() => setMenu(!menu)} className='absolute top-4 right-4 cursor-pointer' />
            <h2 className='text-1xl mt-6 p-4 sm: text-3xl lg:text-4xl'>Liquor <span className='text-[#de6e12] font-bold'>Store</span></h2>
            <nav>
                <ul>
                    <li className='text-xl py-4 flex text-center pl-4 sm:text-2xl sm:font-bold text-gray-600 '><TbTruckDelivery size={30} className='mr-4' /> Orders</li>
                    <li className='text-xl py-4  flex text-center pl-4 sm:text-2xl sm:font-bold text-gray-600 lg:3xl  '><MdFavorite size={25} className='mr-4' /> Favorites</li>
                    <li className='text-xl py-4  flex text-center pl-4 sm:text-2xl sm:font-bold text-gray-600 lg:3xl'><FaWallet size={25} className='mr-4' /> Wallet</li>
                    <li className='text-xl py-4  flex text-center pl-4 sm:text-2xl sm:font-bold text-gray-600 lg:3xl'><MdHelp size={25} className='mr-4' /> Help</li>
                    <li className='text-xl py-4  flex text-center pl-4 sm:text-2xl sm:font-bold text-gray-600 lg:3xl'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                    <li className='text-xl py-4  flex text-center pl-4 sm:text-2xl sm:font-bold text-gray-600 lg:3xl'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                    <li className='text-xl py-4  flex text-center pl-4 sm:text-2xl sm:font-bold text-gray-600 lg:3xl'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                </ul>
            </nav>
        </div>
    )
}

export default SideMenu