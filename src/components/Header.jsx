// @ts-nocheck
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

const Header = () => {

  const arrayList =[
    {name:'Home' , path:'/' },
    {name:'about' , path:'/footer' },
    {name:'card' , path:'/card' },
  ]

  const [toggleMenue , setToggle] = useState(false)

  const handleList = ()=>{
    setToggle(!toggleMenue)
  }
  const productData = useSelector(state => state.bazar.productData)
  const userInfo = useSelector(state => state.bazar.userInfo)
  return (
    <div className="w-full h-15 bg-white border-b-[1px] border-b-gray-800 fixed top-0 z-10">
      <div className=" max-w-screen-xl h-full xl:mx-auto mx-3 flex items-center justify-between">
        <div>
          <h1 className="w-28 text-2xl font-bold">SHOPPING</h1>
        </div>

        <div className="flex items-center gap-8 ">
        <div className="md:hidden">
          <button className="hover:bg-zinc-400 rounded-full p-1 duration-300" onClick={()=> handleList(!toggleMenue)}>
            <IoIosMenu className="text-3xl" />
          </button>
          {toggleMenue && (
            <div className="absolute py-3  w-28 bg-white text-center text-lg">
              <ul className="">
                {arrayList.map(i=>{
                  return(
                    <li key={i.path} className="cursor-pointer mb-2 hover:bg-zinc-400 ">{i.name}</li>
                  )
                })}
              </ul>
          </div>
          )}
          
        </div>
        
          <ul className="md:flex items-center hidden gap-8">
          {arrayList.map((item , index)=>{
            return(
              <li key={index} className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              {item.name}
            </li>
            )
          })}
          </ul>

          <Link to='/card'>
          <div className="relative"> 
            <img  className="w-7" src="./shopping-bag.png" />
            <span className="absolute w-7 top-2 left-0 text-sm flex items-center justify-center font-semibold text-red-600 ">{productData.length}</span>
          </div>
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold text-cyan-900">{userInfo.name}</p>
          )}
          <Link to='/login'>
            <div>
              <img className="w-8 h-8 my-1 rounded-full" src={userInfo ? userInfo.image : "https://cdn-icons-png.flaticon.com/512/310/310818.png"} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
