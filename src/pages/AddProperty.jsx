import { useState } from 'react';
import {toast} from 'react-toastify'

function AddProperty() {
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        area: '',
        address: '',
        title: '',
        price: '',
        surveyno: '',
        description: '',
        image1: '',
        image2: '',
        image3: '',
        proof: ''
    });

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await fetch('https://collab-farm-server.onrender.com/form/addproperty', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
               
                console.log('Property added successfully');
                toast.success("Property added  Successfully");
                // Reset form fields after successful submission
                setFormData({
                    username: '',
                    phone: '',
                    email: '',
                    area: '',
                    address: '',
                    title: '',
                    price: '',
                    surveyno: '',
                    description: '',
                    image1: '',
                    image2: '',
                    image3: ''
                });
            } else {
                console.error('Failed to add property');
            }
        } catch (error) {
            console.error('Error adding property:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        const { name } = event.target;
    
        reader.onload = function(event) {
            const base64String = event.target.result;
            console.log(formData);

    
            // Update form data with the Base64 string
            setFormData({
                ...formData,
                [name]: base64String // Assuming the input element has a 'name' attribute
            });
        };
    
        reader.readAsDataURL(file);
    }
    

    return (
        <div className="mx-auto px-4 lg:px-20">
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="flex justify-center items-center h-full">
                        <div className="w-full max-w-md">
                            <div className="bg-gray-100 rounded-lg shadow-md p-8">
                                <h3 className="text-xl font-semibold mb-6">Add Property</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                                        <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} className="form-input w-full mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phoneNumber" className="block text-gray-700 font-medium">Phone Number</label>
                                        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="form-input w-full mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input w-full mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="area" className="block text-gray-700 font-medium">Area</label>
                                        <input type="text" id="area" name="area" value={formData.area} onChange={handleInputChange} className="form-input w-full mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="address" className="block text-gray-700 font-medium">Address</label>
                                        <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="form-input w-full mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="propertyTitle" className="block text-gray-700 font-medium">Property Title</label>
                                        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} className="form-input w-full mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="price" className="block text-gray-700 font-medium">Price</label>
                                        <input type="text" id="price" name="price" value={formData.price} onChange={handleInputChange} className="form-input w-full mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="survey_no" className="block text-gray-700 font-medium">Survey Number</label>
                                        <input type="text" id="surveyno" name="surveyno" value={formData.surveyno} onChange={handleInputChange} className="form-input w-full mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="description" className="block text-gray-700 font-medium">Description</label>
                                        <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} className="form-textarea w-full mt-2" rows="4" required></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="image1" className="block text-gray-700 font-medium">Image 1</label>
                                        <input type="file" id="image1" name="image1" onChange={handleImageChange} accept="image/*" className="form-input w-full mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="image2" className="block text-gray-700 font-medium">Image 2</label>
                                        <input type="file" id="image2" name="image2" onChange={handleImageChange} accept="image/*" className="form-input w-full mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="image3" className="block text-gray-700 font-medium">Image 3</label>
                                        <input type="file" id="image3" name="image3" onChange={handleImageChange} accept="image/*" className="form-input w-full mt-2" required />
                                    </div>
                                    <div className="mt-6">
                                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-300">Apply</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AddProperty;
