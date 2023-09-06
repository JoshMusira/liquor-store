import hero from '../assets/water.jpg'

const Hero = () => {
    return (
        <div className='max-w-[1640px]  rounded-lg mx-auto p-4'>
            <div className='max-h-[500px]  rounded-lg relative'>
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold pb-8'>The best <span className='text-[#de6e12]'>Wines</span></h1>
                    <h1 className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold'>and <span className='text-[#de6e12]'>Spirits</span> in town</h1>
                </div>
                <img className='w-full max-h-[500px] rounded-lg object-cover' src="https://images.unsplash.com/photo-1594063835597-7806ade59614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2luZXMlMjBhbmQlMjBzcGlyaXQlMjBib3R0bGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="/" />
            </div>
        </div>
    )
}

export default Hero