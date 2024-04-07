// @ts-nocheck
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import { useState } from "react";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";


const Card = () => {
    const [payNow , setPayNow] = useState(false)
    const pro = useSelector(state=> state.bazar.productData)
    const userInfo = useSelector(state=> state.bazar.userInfo)
    const totalPrice = pro.reduce((acc , pro)=>{ 
        acc += pro.price * pro.quantity
        return acc
    }, 0)

    const handleCheckOut =()=>{
        userInfo ? setPayNow(true): toast.error('please sign in to checkout!')
        }
    
    
        return (
        <div>
            <img className="w-full h-60 object-cover"
            src='https://static.vecteezy.com/system/resources/thumbnails/012/105/210/small/abstract-technology-futuristic-digital-square-pattern-with-lighting-glowing-particles-square-elements-on-dark-purple-background-free-vector.jpg' alt="img" />
            <div className="max-w-screem-xl mx-auto py-20 flex flex-wrap">
                <CardItem />
                <div className="lg:w-2/5 flex-grow w-full bg-[#fafafa] py-6 px-4">
                    <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                        

                        <p className="flex items-center gap-4 text-base">
                            shipping
                            <span className="font-titleFont font-bold text-lg">ekj kerhl d ekshdfkrjt rlkejfshdl elk eklsfhkle her.lkj g;lkjer ljgrljt olj ldkjf klrejdfl </span>
                        </p>
                    </div>
                    <p>
                        Total: <span className="text-xl text-red-500 font-bold">${totalPrice}</span>
                    </p>
                    <button onClick={handleCheckOut} className="text-base bg-black text-white w-full py-3 pt-3 mt-6 hover:bg-gray-800 duration-100">proceed to checkout</button>
                    {payNow && (
                        <div className="w-full mt-6 flex items-center justify-center">
                            <StripeCheckout 
                            stripeKey="pk_test_51OsfhOCGYECcsrhfZOt78mjeWue3uvkjBHI6gF2zvBbcVALqs6ZJmZTJrzkIIExqwCyVfnyVQ5CHFpqkQRpJ4cAn00sQMe8w40"
                            name="shoppingapp"
                            amount={totalPrice}
                            label="BUY NOW"
                            description={"your payment amount is" + {totalPrice}}
                            email={userInfo.email}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}

export default Card;
