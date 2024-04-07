import { addUser, removeUser } from '../api/bazarSlice';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const provider = new GoogleAuthProvider();
    const auth = getAuth()


    const handleNavigate =(Mssage)=>{
        toast.success(Mssage)
        setTimeout(()=>{
            navigate('/')
        }, 2000)
    }
    const handleGoogle = (e)=>{
        e.preventDefault()
        signInWithPopup(auth,provider).then(result =>{
            const user = result.user;
            dispatch(addUser({
                _id:user.uid,
                name:user.displayName,
                email:user.email,
                image:user.photoURL
            }))
            handleNavigate("sign in Successfully")
        }).catch(error =>{
            console.log(error)
        })
    }


const handleSignOut = ()=>{signOut(auth).then(() => {
    dispatch(removeUser())
    handleNavigate("log Out Successfully")
}).catch((error) => {
    console.log(error)
})
}
    return (
        <div className="w-full flex flex-col items-center justify-center gap-5 py-20">
            <div className="w-full flex items-center justify-center gap-10">
                <div onClick={handleGoogle} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 
                rounded-md flex items-center justify-center gap-2 hover:border-blue-600 
                cursor-pointer duration-300 ">
                    <img src="https://1000logos.net/wp-content/uploads/2016/11/google-logo.jpg" className="w-20" alt="google" />
                    <span className="text-sm text-gray-900">sign in with Google</span>
                </div>
                <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
                Sign out</button>
            </div>

            <div className="w-full flex items-center justify-center gap-10 ">
                <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 
                rounded-md flex items-center justify-center gap-2 hover:border-blue-600 
                cursor-pointer duration-300 ">
                    <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" className="w-20" alt="google" />
                    <span className="text-sm text-gray-900">sign in with Github</span>
                </div>
                <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
                Sign out</button>
            </div>
            <ToastContainer
            position="top-left"
            autoClose={1500}
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

export default Login;
