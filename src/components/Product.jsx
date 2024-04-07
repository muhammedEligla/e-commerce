// @ts-nocheck
import { useGetProductByNameQuery } from "../api/Api";
import { useParams } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../api/bazarSlice";
import { ToastContainer , toast } from "react-toastify";

const Product = () => {
    let params = useParams().proId;
    const myData = `products`
 const { data , error , isLoading } = useGetProductByNameQuery(myData); 

 let [coant , setCoant] = useState(1);

 const dispatch = useDispatch()

 
 
 
 const pro =data && data[params];

 const notify = () => toast.success(`${pro.title} is added`);


    if (isLoading) {
      return (
        <div>......</div>
        /*<Box sx={{ py: 11, textAlign: "center" }}>
          <CircularProgress />
        </Box>*/
      );
    }



  
    if (error) {
      return (

        <div className="container py-10 text-center">
            
            <h6 >Please try again later</h6>
        </div>
       
      );
    }
  



if(data){
    return (
        <div className="my-10 md:my-0 md:pt-10 pt-0">
            <div className="max-w-screen-xl md:flex-nowrap flex-wrap mx-auto flex gap-10">
                <div className="w-2/5 mx-auto relative" >
                    <img className="w-full lg:h-5/6 md:h-full h-4/5 obfect-cover"
                    src={pro.image} alt="productImg" />
                    <div className="absolute top-0 right-0">
                        {pro.isNew &&<p style={{clipPath: 'polygon(100% 0, 21% 0, 100% 70%)'}} className="bg-red-700 w-20 h-20 text-white text-end pr-1  font-semibold">Sale</p>}
                    </div>
                </div>

                <div className="md:w-3/5 w-full flex flex-col mx-auto bg-gray-50 gap-2 justify-center">
                    <div>
                        <h2 className="text-4xl font-semibold">{pro.title}</h2>
                        <div className="flex items-center gap-4 mt-3">
                            <p className="line-through font-base text-gray-500">${pro.oldPrice}</p>
                            <p className="text-2xl font-medium text-gray-900">${pro.price}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2  text-2xl">
                        <div className="flex text-yellow-400">
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                        </div>
                        <p className="text-xs text-gray-500">1 customer review</p>
                    </div>
                    <p className="text-base text-gray-500 -mt-3">{pro.description}</p>
                
                <div className="w-52 flex mx-auto items-center justify-between text-gray-500 gap-4 border p-3">
                    <p className="text-sm">quantity</p>
                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <button onClick={()=> setCoant(coant === 1 ? (coant = 1) : coant -1)} className="border h-5 font-normal text-lg flex items-center 
                        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                        duration-300 active:bg-black">-</button>
                        <span>{coant}</span>
                        <button onClick={()=> setCoant(coant + 1)} className="border h-5 font-normal text-lg flex items-center 
                        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                        duration-300 active:bg-black">+</button>
                    </div>
                </div>
                <button onClick={()=> notify() & dispatch(addToCart({pro , coant})) } className="bg-cyan-900 text-white py-3 px-6 active:bg-gray-800">add to cart</button>
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
    
}

export default Product;
