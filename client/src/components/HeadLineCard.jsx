import card from '../assets/artificial.jpg'

const HeadLineCard = () => {
    return (
        <div className='rounded-xl relative max-w-[200px]'>
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className='font-bold text-xlsm:text-2xl px-2 pt-4 '>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[200px] rounded-xl sm:max-h-[300px] w-full object-cover' src={card} alt="" />
        </div>
    )
}

export default HeadLineCard