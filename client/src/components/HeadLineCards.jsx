import { HeadLineCard } from "../exports/exports"

const HeadLineCards = () => {
    return (
        <div className=" max-w-[1640px] mx-auto ">
            <h1 className='text-orange-700 font-bold text-4xl sm:text-6xl text-center'>
                Flash Sales Items
            </h1>
            <div className="  p-4 grid  sm:grid-cols-3 md:grid-cols-4 gap-6">
                <HeadLineCard />
                <HeadLineCard />
                <HeadLineCard />
                <HeadLineCard />
            </div>

        </div>
    )
}

export default HeadLineCards