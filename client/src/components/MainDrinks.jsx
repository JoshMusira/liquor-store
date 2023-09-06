
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
            <div className=" w-[200px] sm:w-[450px] lg:w-[500px] grid grid-cols-2 lg:grid-cols4 gap-6 pt-4">
                <div className="border shadow-lg cursor-pointer rounded-lg hover:scale-105 duration-300">
                    <img className="w-full h-[345px] object-cover rounded-t-lg" src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWxjb2hvbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className=" flex text-2xl px-2 py-3 justify-between">
                        <p className="font-bold ">Black Label</p>
                        <p >
                            <span className=" bg-orange-500 text-white p-1 rounded-[10px]">$$$
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default MainDrinks