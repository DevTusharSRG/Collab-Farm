import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const Admin_users = () => {
    const [users , setUsers] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllUsersData = async () => {
        try {
            const response = await fetch('https://collab-farm-server.onrender.com/admin/users', {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            });
            const data = await response.json();
            setUsers(data); // Update the state with fetched data
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        getAllUsersData();
    }, []);

    const handleEdit = (id) => {
        console.log('Edit user with id:', id);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://collab-farm-server.onrender.com/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    // Add any authorization headers if needed
                    Authorization: authorizationToken
                }
            });
            if (response.ok) {
                console.log('User deleted successfully:', id);
                // Update the user list after deletion
                const updatedUsers = users.filter(user => user._id !== id);
                setUsers(updatedUsers);
            } else {
                console.error('Error deleting user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    


    return (
        <div className="container mx-auto py-8">
            <h1 className="mx-4 text-4xl font-semibold mb-4">Admin user</h1>
            <div className="overflow-x-auto mx-4">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Username</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Address</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((curUser, index) => (
                            <tr key={index}>

                                <td className="border px-4 py-2">{curUser._id}</td>
                                <td className="border px-4 py-2">{curUser.username}</td>
                                <td className="border px-4 py-2">{curUser.email}</td>
                                <td className="border px-4 py-2">{curUser.phone}</td>
                                <td className="border px-4 py-2">{curUser.address}</td>
                                <td className="border px-4 py-2">{curUser.type}</td>
                                <td className="border px-4 py-2">
                                    <button onClick={() => handleEdit(curUser._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                    <button onClick={() => handleDelete(curUser._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin_users;
