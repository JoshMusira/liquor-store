
const MainDrinks = () => {
    return (
        <div className=" max-w-[1640px] m-auto px4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
            <div className=" flex flex-col lg:flex-row justify-between">
                <div>
                    <p className=" font-bold text-gray-950 text-3xl">Filter Type</p>
                    <div className=" mt-3 flex justify-between flex-wrap">
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-gray-800">All</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-gray-800">Wine</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-whi bg-gray-800">Beer</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-gray-800">Alcohol</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-gray-800"> Liquor</button>
                    </div>
                </div>
                <div>
                    <p className=" font-bold text-gray-950 text-3xl">Filter Price</p>
                    <div className="mt-3">
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-gray-800 ">$</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-gray-800">$$</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-gray-800 ">$$$</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-gray-800">$$$$</button>
                    </div>
                </div>
            </div>
            {/* <div>

            </div> */}
        </div >
    )
}

export default MainDrinks