import { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

export const Admin_property = () => {
    const [properties, setProperties] = useState([]);
    const { authorizationToken } = useAuth();

    const fetchProperties = async () => {
        try {
            const response = await fetch('http://localhost:4000/getproperties', {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                setProperties(data);
            } else {
                console.error('Failed to fetch properties:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    const handleEdit = (propertyId) => {
        console.log('Edit property with id:', propertyId);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/admin/properties/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken
                }
            });
            if (response.ok) {
                console.log('Property deleted successfully:', id);
                // Update the property list after deletion
                const updatedProperties = properties.filter(property => property._id !== id);
                setProperties(updatedProperties);
            } else {
                console.error('Error deleting property:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting property:', error);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold mb-4">Admin Properties</h1>
            <div className="overflow-x-auto mx-4">
                <table className="table-auto border-2 w-full">
                    <thead>
                        <tr className='bg-slate-200'>
                            <th className="border-2 px-4 py-2">ID</th>
                            <th className="border-2 px-4 py-2">Title</th>
                            <th className="border-2 px-4 py-2">Address</th>
                            <th className="border-2 px-4 py-2">Price</th>
                            <th className="border-2 px-4 py-2">Area</th>
                            <th className="border-2 px-4 py-2">Description</th>
                            <th className="border-2 px-4 py-2">Survey No</th>
                            <th className="border-2 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((property, index) => (
                            <tr key={property._id}>
                                <td className="border-2 px-4 py-2">{index + 1}</td>
                                <td className="border-2 px-4 py-2">{property.title}</td>
                                <td className="border-2 px-4 py-2">{property.address}</td>
                                <td className="border-2 px-4 py-2">{property.price}</td>
                                <td className="border-2 px-4 py-2">{property.area}</td>
                                <td className="border-2 px-4 py-2">{property.description}</td>
                                <td className="border-2 px-4 py-2">{property.surveyno}</td>
                                <td className="border-2 px-4 py-2">
                                    <button onClick={() => handleEdit(property._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                    <button onClick={() => handleDelete(property._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
