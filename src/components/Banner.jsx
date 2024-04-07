// @ts-nocheck


import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
const data = [
    "https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706918400&semt=ais",
    "https://static.vecteezy.com/system/resources/thumbnails/002/006/967/small/young-women-takes-a-shopping-cart-and-enjoy-online-shopping-through-smartphones-choose-to-buy-gifts-valentine-s-day-concepts-website-or-mobile-phone-application-flat-design-illustration-vector.jpg",
    "https://t3.ftcdn.net/jpg/05/35/13/82/360_F_535138292_62ZnI4Hcw37J8Jaeg4E9TzJwUciCwSnp.jpg"
]
const Banner = () => {
    const [currentSlide , setSlide ] = useState(0)

    const prevSlide = ()=>{
        setSlide(currentSlide === 0 ? 2 : (prev)=> prev - 1)
    }

    const nextSlide = ()=>{
        setSlide(currentSlide === 2 ? 0 : (prev)=> prev + 1)
    }
    return (
        <div className="w-full h-auto overflow-x-hidden" >
            <div className="w-screen h-[650px] relative " >
                <div className="w-[300vw] h-full flex transition-transform duration-1000" 
                style={{transform: `translateX(-${currentSlide * 100}vw)`}} >
                {data.map((item , i)=>{
                    return(
                        <img key={i} className="w-[100vw] h-full object-cover" src={item} alt={`img${i}`} loading="priority" />
                    )
                })}
                </div>

                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44" >
                    <div onClick={prevSlide} className="w-14 h-12 border-[1px] border:bg-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300" ><HiArrowLeft /></div>
                    <div onClick={nextSlide} className="w-14 h-12 border-[1px] border:bg-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300" ><HiArrowRight /></div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
