import {useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import loginImage from '../images/login.jpg'; // Importing the image
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify'

const URL ="https://collab-farm-server.onrender.com/login"

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    const navigate = useNavigate()
    const {storeTokenInLS}=useAuth()
    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL,{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(user)
             
          })
          if(response.ok){
            const res_data = await response.json()
            console.log("responce data ",res_data);
            storeTokenInLS(res_data.token);
           
            if (user.email === "superadmin@gmail.com") {
                setUser({
                    email: "",
                    password: ""
                });
                toast.success("Logged in Successfully");
                navigate("/admin");
            } else {
                console.log("Logged in")
                setUser({
                    email: "",
                    password: ""
                });
                // toast.success("Logged in Successfully");
                navigate("/");
            }
            
            
  
          }
          else{
            toast.error("invalid credintials")
          }
          console.log(response);
          } catch (error) {
            console.log("login  error",error);
          }
        console.log(user);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden w-full md:max-w-4xl">
                {/* Image Section */}
                <div className="md:w-1/2 bg-gray-200 p-8 flex justify-center items-center">
                    <img src={loginImage} alt="Login Image" className="max-w-full h-auto" />
                </div>
                {/* Form Section */}
                <div className="md:w-1/2 bg-white p-8">
                    <h1 className="mt-20 text-3xl font-bold text-gray-800 mb-4">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-800 font-semibold">Email</label>
                            <input type="text" onChange={handleInput} id="email" name="email" className="form-input mt-1 block w-full bg-gray-200 border-gray-300 rounded-md py-2 px-4 text-gray-800" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-800 font-semibold">Password</label>
                            <input type="password" onChange={handleInput} id="password" name="password" className="form-input mt-1 block w-full bg-gray-200 border-gray-300 rounded-md py-2 px-4 text-gray-800" />
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full">
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-gray-800">Dont have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
