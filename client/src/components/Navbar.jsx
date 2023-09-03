import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div>
            {/* Left Side  */}
            <div>
                <div>
                    <AiOutlineMenu />
                </div>
                <h1>Liquor Store</h1>
                <div>
                    <p>Delivery</p>
                    <p>Pickup</p>
                </div>

            </div>

            {/* Search Input */}
            <div>
                <AiOutlineSearch />
                <input type="text" placeholder='Search drinks...' />
            </div>


        </div>
    )
}

export default Navbar