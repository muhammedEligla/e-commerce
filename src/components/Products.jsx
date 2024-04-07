/* eslint-disable react/prop-types */

import PCard from "./PCard";
import { useGetProductByNameQuery } from "../api/Api";

const Products = () => {
const myData = 'products'
//const [myData , setDateApi] = useState(data);    , error , isLoading
 const { data } = useGetProductByNameQuery(myData); 
    return (
        <div className="py-10">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">
                    Shoppin everyday
                </h1>
                <span className="w-20 h-[3px] bg-black">
                </span>
                <p className="max-w-[700] text-gray-600 text-center" >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae veritatis explicabo enim adipisci corporis placeat.
                </p>
            </div>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 sm:grid-cols-2  gap-2">
            {data && data.map((item , i)=>{
                return(
                     <PCard key={i} pro={item} />
                )
            })}
                
                
            </div>
        </div>
    );
}

export default Products;
