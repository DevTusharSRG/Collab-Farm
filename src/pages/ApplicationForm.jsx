import { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import { useParams } from 'react-router-dom';

const ApplicationForm = () => {
    let { pid } = useParams(); // Get the pid from the route parameters
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        email: "",
        company: "",
        address: "",
        description: "",
        propertyId: pid, // Initialize propertyId with pid
        status: "pending"
    });

    const { userData } = useAuth();

    useEffect(() => {
        if (userData) {
            setFormData(prevFormData => ({
                ...prevFormData,
                username: userData.username,
                phone: userData.phone,
                email: userData.email,
            }));
        }
    }, [userData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/form/apply/${pid}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Application submitted successfully');
                alert("Application submitted successfully");
                setFormData({
                    username: userData.username,
                    phone: userData.phone,
                    email: userData.email,
                    company: "",
                    address: "",
                    description: "",
                    propertyid: pid, // Reset propertyId with pid
                    status: "pending"
                });
            } else {
                console.error('Failed to submit application');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    return (
        <div className="container mt-5 mx-auto max-w-lg bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Application Form</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-1 text-gray-700">Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">Company:</label>
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
};

export default ApplicationForm;
