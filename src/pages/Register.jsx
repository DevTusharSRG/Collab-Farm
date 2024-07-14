import { useState } from 'react';
import {useNavigate, Link } from 'react-router-dom';
import registerImage from '../images/login.jpg'; // Importing the image
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify'
const URL ="https://collab-farm-server.onrender.com/register"


const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        address: "",
        type: "",
        password: "",
        
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
    const handleSubmit = async(e) => {
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
           
           setUser({username: "",
           email: "",
           phone: "",
           address: "",
           type: "",
           password: "",}) ;
           toast.success("registration Successfully")
           navigate("/login")

        }
        else{
          const res_data = await response.json()
           console.log("responce data ",res_data.extraDetails);
          toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message)
        }
        console.log(response);
        } catch (error) {
          console.log("registration  error",error);
        }
        
        console.log(user);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden w-full md:max-w-4xl">
                {/* Image Section */}
                <div className="md:w-1/2 bg-gray-200 p-8 flex justify-center items-center">
                    <img src={registerImage} alt="Register Image" className="max-w-full h-auto" />
                </div>
                {/* Form Section */}
                <div className="md:w-1/2 bg-white p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Register</h1>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-800 font-semibold">Username</label>
                        <input type="text" value={user.username} onChange={handleInput} id="username" name="username" className="form-input mt-1 block w-full bg-gray-200 border-gray-300 rounded-md py-2 px-4" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-800 font-semibold">Email</label>
                        <input type="email" value={user.email} onChange={handleInput} id="email" name="email" className="form-input mt-1 block w-full bg-gray-200 border-gray-300 rounded-md py-2 px-4" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-800 font-semibold">Phone</label>
                        <input type="text" value={user.phone} onChange={handleInput} id="phone" name="phone" className="form-input mt-1 block w-full bg-gray-200 border-gray-300 rounded-md py-2 px-4" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-800 font-semibold">Address</label>
                        <input type="text" value={user.address} onChange={handleInput} id="address" name="address" className="form-input mt-1 block w-full bg-gray-200 border-gray-300 rounded-md py-2 px-4" />
                      </div>
                     
                      <div className="mb-4">
                        <label htmlFor="userType" className="block text-gray-800 font-semibold">User Type</label>
                        <select id="type" name="type" value={user.type} onChange={handleInput} className="form-select mt-1 block w-full bg-gray-200 border-gray-300 rounded-md py-2 px-4">
                          <option value="">Select User Type</option>
                          <option value="landowner">Landowner</option>
                          <option value="company">Company</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800 font-semibold">Password</label>
                        <input type="password" value={user.password} onChange={handleInput} id="password" name="password" className="form-input mt-1 block w-full bg-gray-200 border-gray-300 rounded-md py-2 px-4" />
                      </div>
                      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full">
                        Register
                      </button>
                    </form>
                    <p className="mt-4 text-gray-800">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;


