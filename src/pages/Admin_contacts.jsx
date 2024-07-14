import { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

export const Admin_contacts = () => {
    const [contacts, setContacts] = useState([]);
    const { authorizationToken } = useAuth();

    const fetchContacts = async () => {
        try {
            
            const response = await fetch('http://localhost:4000/admin/contact', {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }});
            const data = await response.json();
            setContacts(data); 
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    useEffect(() => {
        fetchContacts(); 
    }, []);

    const handleEdit = (contactId) => {
        
        console.log('Edit contact with id:', contactId);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    // Add any authorization headers if needed
                    Authorization: authorizationToken
                }
            });
            if (response.ok) {
                console.log('User deleted successfully:', id);
                // Update the user list after deletion
                const updatedUsers = contacts.filter(user => user._id !== id);
                setContacts(updatedUsers);
            } else {
                console.error('Error deleting user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold mb-4">Admin contacts</h1>
            <div className="overflow-x-auto mx-4">
                <table className="table-auto border-2 w-full">
                    <thead>
                        <tr className='bg-slate-200'>
                            <th className="border-2 px-4 py-2">ID</th>
                            <th className="border-2 px-4 py-2">Username</th>
                            <th className="border-2 px-4 py-2">Email</th>
                            <th className="border-2 px-4 py-2">Phone</th>
                            <th className="border-2 px-4 py-2">Message</th>
                            <th className="border-2 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {contacts.map((curUser, index) => {
                        return(    <tr key={index}>
                                <td className="border-2 px-4 py-2">{index+1}</td>
                                <td className="border-2 px-4 py-2">{curUser.username}</td>
                                <td className="border-2 px-4 py-2">{curUser.email}</td>
                                <td className="border-2 px-4 py-2">{curUser.phone}</td>
                                <td className="border-2 px-4 py-2">{curUser.message}</td>
                                <td className="border-2 px-4 py-2">
                                    <button onClick={() => handleEdit(curUser._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                    <button onClick={() => handleDelete(curUser._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
