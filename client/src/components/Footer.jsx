import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import { BiRightArrow, BiCurrentLocation } from 'react-icons/bi'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex flex-col gap-1'>
            <div className=' flex flex-col sm:flex-row w-[100%] justify-between '>
                <div className='w-[30%] pl-3'>
                    <h1 className='text-2xl text-orange-600 font-bold'>Liqour Store</h1>
                    <h2 className='pt-3 sm:text-1xl'>The world in your glass</h2>
                    <h3 className='font-bold'>CONNECT</h3>
                    <div className=' flex gap-2'>
                        <BsTwitter className='pt-3 text-4xl text-blue-600 ' />
                        <BsInstagram className='pt-3 text-4xl text-red-400 ' />
                        <BsFacebook className='pt-3 text-4xl text-blue-600 ' />
                        <AiOutlineMail className='pt-3 text-4xl text-silver-600 ' />

                    </div>
                </div>
                <div className='w-[25%]'>
                    <h1 className='text-2xl text-orange-600 font-bold'>QUICK LINKS</h1>
                    <p className='flex items-center gap-2'><BiRightArrow size={20} /> <span className='sm:text-2xl'>Wine</span></p>
                    <p className='flex items-center gap-2 pt-3'><BiRightArrow size={20} /> <span className='sm:text-2xl'>Spirit</span></p>
                    <p className='flex items-center gap-2 pt-3'><BiRightArrow size={20} /> <span className='sm:text-2xl'>Sparkling</span></p>
                    <p className='flex items-center gap-2 pt-3'><BiRightArrow size={20} /> <span className='sm:text-2xl'>About Us</span></p>
                    <p className='flex items-center gap-2 pt-3'><BiRightArrow size={20} /> <span className='sm:text-2xl'>Contact Us</span></p>
                    <p className='flex items-center gap-2 pt-3'><BiRightArrow size={20} /> <span className='sm:text-2xl'>Privacy</span></p>
                    <p className='flex items-center gap-2 pt-3'><BiRightArrow size={20} /> <span className='sm:text-2xl'>Shipping</span></p>
                    <p className='flex items-center gap-2 pt-3'><BiRightArrow size={20} /> <span className='sm:text-2xl'>Customer Services</span></p>
                </div>
                <div className='w-[45%] '>
                    <div>
                        <h1 className='text-1xl sm:text-2xl lg:text-3xl font-bold text-orange-600'>ABOUT LIQOUR STORE</h1>
                        <p className='py-2 text-1xl sm:text-2xl text-gray-800'>Liqour Store wines and spirits is a beloved family run businnes with two locations in Kutus and Kereugoya.Founded in 2004,owners Dita and Gary Liqour curate a clollection of unique wines and spirits and ship them globally.</p>
                    </div>
                    <div>

                        <div className='mt-2' >
                            <h1 className='text-2xl font-bold text-yellow-600'>STORE LOCATION</h1>
                            <p className='flex items-center text-white pt-2 gap-2'><BiCurrentLocation className='text-red-600' /> <span>5620 Kutus Kirinyaga Kenya 00100</span></p>
                            <p className='flex items-center text-white pt-2 gap-2'><BiCurrentLocation className='text-green-600' /> <span>719 Kerugoya Kirinyaga Kenya 00100</span></p>
                            <p className='flex items-center text-white pt-2 gap-2'><FaLocationArrow className='text-yellow-600' /> <span>cheers@liqourstore.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1640px] w-[100%] bg-slate-900 mx-auto my-3 border-x-2 border-gray-400'>
                <p className='sm:text-2xl flex justify-center'>@2023 Liqour Store wines & Spirits.All Rights Reserved Sitemap</p>
            </div>
        </div>
    )
}

export default Footer