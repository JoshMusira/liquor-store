import card from '../assets/artificial.jpg'

const HeadLineCard = () => {
    return (
        <div className='rounded-xl relative max-w-[350px]'>
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className='font-bold text-xlsm:text-2xl px-2 pt-4 '>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[350px] rounded-xl sm:max-h-[450px] w-full object-cover' src="https://images.unsplash.com/photo-1561150169-371f366b828a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxjb2hvbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
    )
}

export default HeadLineCard