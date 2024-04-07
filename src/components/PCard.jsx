// @ts-nocheck
/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../api/bazarSlice";
import { ToastContainer , toast } from "react-toastify";

const PCard = ({pro}) => {
    const dispatch = useDispatch();
    const notify = () => toast.success(`${pro.title} is added`);
    return (
        <div className="group relative  flex-grow mx-5 my-2">
            <div className="max-w-md h-96 cursor-pointer overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 duration-500"
                src={pro.image} alt={pro.title} />
            </div>
            <div className="w-full border-[1px] px-2 py-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-base font-bold">{pro.title.substring(0 , 14)}{pro.title.split('').length > 14 && '...'}</h2>
                </div>
                <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm bg-slate-300 p-1 rounded-lg items-center">
                    <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
                        <p className="line-through text-gray-500">${pro.oldPrice}</p>
                        <p className="font-semibold">${pro.price}</p>
                    </div>
                    <p onClick= {()=>
                        dispatch(addToCart({pro})) &
                        notify() } className="absolute z-20 w-[100] text-gray-950 hover:text-red-700 flex
                    items-center gap-1 top-1 transform -translate-x-32 group-hover:translate-x-0
                    translition-transform cursor-pointer duration-500">Add to cart <span><BsArrowRight /></span></p>
                </div>
            </div>
                <div className="absolute top-0 right-0">
                    {pro.isNew &&<p style={{clipPath: 'polygon(100% 0, 21% 0, 100% 70%)'}} className="bg-red-700 w-20 h-20 text-white text-end pr-1  font-semibold">Sale</p>}
                </div>
                <Link to={`./product/${pro._id - 1}`}>
                <div  className="text-center bg-cyan-600 rounded-md text-white py-1 mt-1 cursor-pointer">
                show ditailes...
                </div>
                </Link>
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

export default PCard;
