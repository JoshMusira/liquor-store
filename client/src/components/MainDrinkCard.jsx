
const MainDrinkCard = () => {
    return (
        <div className="w-[450px]  shadow-lg sm:w-[280px] mx-auto lg:w-[350px]">
            <div className="border  shadow-lg cursor-pointer rounded-lg hover:scale-105 duration-300">
                <img className="w-full h-[400px] object-cover rounded-t-lg" src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWxjb2hvbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className=" flex text-2xl px-2 py-3 justify-between">
                    <p className="font-bold ">Black Label</p>
                    <p >
                        <span className=" bg-orange-500 text-white p-1 rounded-[10px]">$$
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainDrinkCard