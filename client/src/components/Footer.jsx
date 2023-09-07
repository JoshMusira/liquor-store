import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import { BiRightArrow, BiCurrentLocation } from 'react-icons/bi'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>Liqour Store</h1>
                    <h2>The world in your glass</h2>
                    <h3>CONNECT</h3>
                    <div>
                        <BsTwitter />
                        <BsInstagram />
                        <BsFacebook />
                        <AiOutlineMail />

                    </div>
                </div>
                <div>
                    <h1>QUICK LINKS</h1>
                    <p><BiRightArrow /> <span>Wine</span></p>
                    <p><BiRightArrow /> <span>Spirit</span></p>
                    <p><BiRightArrow /> <span>Sparkling</span></p>
                    <p><BiRightArrow /> <span>About Us</span></p>
                    <p><BiRightArrow /> <span>Contact Us</span></p>
                    <p><BiRightArrow /> <span>Privacy</span></p>
                    <p><BiRightArrow /> <span>Shipping</span></p>
                    <p><BiRightArrow /> <span>Customer Services</span></p>
                </div>
                <div>
                    <div>
                        <h1>ABOUT LIQOUR STORE</h1>
                        <p>Liqour Store wines and spirits is a beloved family run businnes with two locations in Kutus and Kereugoya.Founded in 2004,owners Dita and Gary Liqour curate a clollection of unique wines and spirits and ship them globally.</p>
                    </div>
                    <div>

                        <div>
                            <h1>STORE LOCATION</h1>
                            <p><BiCurrentLocation /> <span>5620 Kutus Kirinyaga Kenya 00100</span></p>
                            <p><BiCurrentLocation /> <span>719 Kerugoya Kirinyaga Kenya 00100</span></p>
                            <p><FaLocationArrow /> <span>cheers@liqourstore.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>@2023 Liqour Store wines & Spirits.All Rights Reserved Sitemap</p>
            </div>
        </div>
    )
}

export default Footer