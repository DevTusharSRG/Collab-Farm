import { useState, useEffect } from 'react';

export const Admin_services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('https://collab-farm-server.onrender.com/data/getservice', {
                    method: "GET",
                    headers: {
                        // Add any authorization headers if needed
                    }
                });
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, []);

    const handleEdit = (serviceId) => {
        // Handle edit action
        console.log('Edit service with id:', serviceId);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://collab-farm-server.onrender.com/admin/services/delete/${id}`, {
                method: "DELETE",
               
            });
            if (response.ok) {
                console.log('User deleted successfully:', id);
                // Update the user list after deletion
                const updatedUsers = services.filter(user => user._id !== id);
                setServices(updatedUsers);
            } else {
                console.error('Error deleting user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold mb-4">Admin Services</h1>
            <div className="overflow-x-auto mx-4">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Title</th>
                            {/* <th className="px-4 py-2">Description</th> */}
                            <th className="px-4 py-2">Provider</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service,index) => {
                            return(<tr key={index}>
                                <td className="border px-4 py-2">{index+1}</td>
                                <td className="border px-4 py-2">{service.title}</td>
                                {/* <td className="border px-4 py-2">{service.description}</td> */}
                                <td className="border px-4 py-2">{service.provider}</td>
                                <td className="border px-4 py-2">
                                    <button onClick={() => handleEdit(service.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                    <button onClick={() => handleDelete(service.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin_services;
