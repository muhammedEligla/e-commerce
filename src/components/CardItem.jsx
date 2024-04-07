// @ts-nocheck
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md"
import { deletItem , plusQuant , mainusQuant, resetCart } from "../api/bazarSlice";
import { ToastContainer , toast } from "react-toastify";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CardItem = () => {
    const navigate = useNavigate()
    const dispacth = useDispatch()
    const proData = useSelector(state => state.bazar.productData);
    

 const notify = (pro) => toast.error(`${pro} is removed`);

    return (
        <div className='lg:w-1/2 w-full lg:pr-10 mx-3 '>
            <div className='w-full'>
                <h2 className='font-titleFont text-center font-bold text-2xl'>shopping cart</h2>
            </div>
            <div>
                {proData.map((item , i) =>{
                    return(
                        <div key={i}
                        className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6 border-b-2">
                        <div className=" flex sm:flex-row flex-col justify-center text-center items-center">
                            <div className="flex items-center gap-2">
                                
                                <img src={item.image} alt="proimg" className="w-32 h-32 object-cover" />
                            </div>
                            <h2 className="w-52">{item.title}</h2>
                            <p className="w-10 ">${item.price}</p>
                            
                        </div>
                            

                            <div className="w-64 flex items-center justify-between text-gray-500 gap-4 border p-3">
                            <MdOutlineClose onClick={()=>{
                                dispacth(deletItem(item._id))  & notify(item.title)
                            }}
                            className="text-xl text-gray600 hover:text-red-600 cursor-pointer duration-300" />
                    <p className="text-sm">quantity</p>
                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <button onClick={()=> dispacth(mainusQuant(item))} className="border h-5 font-normal text-lg flex items-center 
                        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                        duration-300 active:bg-black">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={()=> dispacth(plusQuant(item))} className="border h-5 font-normal text-lg flex items-center 
                        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                        duration-300 active:bg-black">+</button>
                    </div>


                </div>
                        </div>
                    )
                })}
                {proData.length > 0 && (
                    <button onClick={()=> dispacth(resetCart())} className="p-1 text-white text-lg text-center bg-red-500 rounded-md my-2 w-full">clear</button>
                )}
                <div className="flex row-auto  w-full justify-around items-center">
                
                <button onClick={()=> navigate('/')} className="p-1 text-lg my-2 "><FaArrowLeftLong className="inline-block" /> go to shop</button>
                </div>
            </div>
            <ToastContainer
            position="top-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </div>
    );
}

export default CardItem;
