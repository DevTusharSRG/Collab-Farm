import { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

export const Admin_Applications = () => {
    const [applications, setApplications] = useState([]);
    const { authorizationToken } = useAuth();

    const fetchApplications = async () => {
        try {
            const response = await fetch('https://collab-farm-server.onrender.com/form/getapplication', {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                setApplications(data);
            } else {
                console.error('Failed to fetch applications:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const handleEdit = (applicationId) => {
        console.log('Edit application with id:', applicationId);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://collab-farm-server.onrender.com/form/getapplication/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken
                }
            });
            if (response.ok) {
                console.log('Application deleted successfully:', id);
                // Update the application list after deletion
                const updatedApplications = applications.filter(application => application._id !== id);
                setApplications(updatedApplications);
            } else {
                console.error('Error deleting application:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting application:', error);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold mb-4">Admin Applications</h1>
            <div className="overflow-x-auto mx-4">
                <table className="table-auto border-2 w-full">
                    <thead>
                        <tr className='bg-slate-200'>
                            <th className="border-2 px-4 py-2">ID</th>
                            <th className="border-2 px-4 py-2">Username</th>
                            <th className="border-2 px-4 py-2">Phone</th>
                            <th className="border-2 px-4 py-2">Email</th>
                            <th className="border-2 px-4 py-2">Company</th>
                            <th className="border-2 px-4 py-2">Address</th>
                            <th className="border-2 px-4 py-2">Description</th>
                            <th className="border-2 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application, index) => (
                            <tr key={application._id}>
                                <td className="border-2 px-4 py-2">{index + 1}</td>
                                <td className="border-2 px-4 py-2">{application.username}</td>
                                <td className="border-2 px-4 py-2">{application.phone}</td>
                                <td className="border-2 px-4 py-2">{application.email}</td>
                                <td className="border-2 px-4 py-2">{application.company}</td>
                                <td className="border-2 px-4 py-2">{application.address}</td>
                                <td className="border-2 px-4 py-2">{application.description}</td>
                                <td className="border-2 px-4 py-2">
                                    <button onClick={() => handleEdit(application._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                    <button onClick={() => handleDelete(application._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
