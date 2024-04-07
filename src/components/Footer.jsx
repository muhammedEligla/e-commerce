import { FaFacebook, FaHouseUser, FaInstagram, FaMapMarkerAlt, FaMobile, FaPaypal, FaTwitter, FaWhatsapp  } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
const Footer = () => {
    return (
        <>
        <div className="bg-black text-[#949494] py-20 font-title-font">
            <div className="max-w-screen-xl  mx-auto flex  justify-around md:flex-row gap-5 px-3 text-center  flex-col">
                <div className="flex flex-col md:mr-4 gap-7">
                    <h1 className="font-bold text-white text-3xl">L O G O</h1>
                    <p className="text-white text-sm tracking-wide">© ReactBD.com</p>

                    <div className="flex flex-row md:mx-0 mx-auto gap-3">
                    <img className="w-10" src="./payment1.jpg" alt="paymentlogo" />
                    <img className="w-10" src="./payment2.jpg" alt="paymentlogo" />
                    <img className="w-10" src="./payment3.jpg" alt="paymentlogo" />
                    </div>

                    <div className="flex flex-row md:mx-0 mx-auto gap-3">
                        <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
                        <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                        <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                        <FaWhatsapp className="hover:text-white duration-300 cursor-pointer" />
                        <FaMobile className="hover:text-white duration-300 cursor-pointer" />
                    </div>
                </div>

                <div className="md:text-left">
                <h1 className="text-2xl font-semilbold text-white mb-4">contact us</h1>
                <div className="text-base flex flex-col gap-2">
                    <p>TR , Kay , Turkiye</p>
                    <p>Mobile: 123456678</p>
                    <p>email: Shopping@gmail.com</p>
                </div>
                </div>


                <div className="mx-auto my-4">
                <h1 className="text-2xl font-semilbold text-white mb-4">Profile</h1>
                <div className="text-base flex flex-col gap-2">

                <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg"><IoPerson /> </span> my account
                </p>

                <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg"><FaHouseUser /> </span> order tracking
                </p>

                <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg"><FaPaypal /> </span> checkout
                </p>

                <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg"><FaMapMarkerAlt /> </span> help & support
                </p>
                
                </div>
                </div>


                <div className="flex flex-col justify-center" >
                    <input className="bg-transparent border px-4 py-2 text-sm"
                    placeholder="email" type="email" />
                    <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black" >Submit</button>
                </div>

                
            </div>
        </div>
            <div className="text-sm sm:text-md text-center flex justify-center items-center">
            <p>Designed and developed by </p>
            <a className="mx-1 text-bold text-red-600 " href="protofolio-9bd8c.web.app/"> MUHAMMED ELIGLA</a>
            <p>©2024</p>
            </div>
        </>
    );
}

export default Footer;
