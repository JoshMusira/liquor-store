import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left Side  */}
            <div className='flex items-center'>
                <div className='cursor-pointer text-[#de6e12]'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Liquor <span className='font-bold text-[#de6e12] '>Store</span> </h1>
                <div className='hidden lg:flex items-center bg-[#683308] rounded-full p-1 text-[14px]'>
                    <p className='bg-[#fbfbfb] text-[17px] text-black rounded-full p-2'>Delivery</p>
                    <p className='p-2 text-white'>Pickup</p>
                </div>

            </div>

            {/* Search Input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch className='text-gray/400' size={25} />
                <input type="text"
                    className='bg-transparent p-2 w-full focus:outline-none'
                    placeholder='Search drinks...' />
            </div>

            <div className='flex gap-4'>
                {/* Cart button */}
                <button className='bg-[#de6e12] text-white hidden md:flex items-center py-2 rounded-full'>
                    <BsFillCartFill size={20} className='mr-2' /> Cart
                </button>

                {/* User */}

                <div className='w-[60px] h-[60px] rounded-full border border-gray'>
                    <img className='w-[100%] rounded-full h-[100%] object-cover' src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Navbar