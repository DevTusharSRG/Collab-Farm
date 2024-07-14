import { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
// import { Link } from 'react-router-dom';

const Contact = () => {
    const [user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        message: ""
    });

    const { userData } = useAuth();

    useEffect(() => {
        if (userData) {
            setUser({
                username: userData.username,
                phone: userData.phone,
                email: userData.email,
                message: ""
            });
        }
    }, [userData]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/form/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                console.log('Message sent successfully');
                alert("message sent successfully")
                // Optionally, reset the form fields
                setUser({
                    username: userData.username,
                    phone: userData.phone,
                    email: userData.email,
                    message: ""
                });
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
        console.log(user);
    }

    return (
        <>
            <div className="container mt-5 mb-5 mx-auto px-4 lg:px-20">
                <div className="bg-white shadow-md rounded-lg overflow-hidden md:flex">
                    <div className="md:w-1/2 bg-gray-100 px-8 py-6">
                        <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
                        <form name="sentMessage" onSubmit={handleSubmit} id="contactForm" noValidate>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Full Name:</label>
                                <input type="text" value={user.username} onChange={handleInput} id="username" name="username" className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required data-validation-required-message="Please enter your name." />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number:</label>
                                <input type="tel" value={user.phone} onChange={handleInput} id="phone" name="phone" className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required data-validation-required-message="Please enter your phone number." />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address:</label>
                                <input type="email" value={user.email} onChange={handleInput} id="email" name="email" className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required data-validation-required-message="Please enter your email address." />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
                                <textarea id="message" name="message" value={user.message} onChange={handleInput} rows="5" className="form-textarea w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required data-validation-required-message="Please enter your message" maxLength="999" style={{ resize: 'none' }}></textarea>
                            </div>
                            <div id="success"></div>
                            {/* For success/fail messages */}
                            <button type="submit" className="btn btn-primary bg-green-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md focus:outline-none focus:shadow-outline">Send Message</button>
                        </form>
                    </div>
                    <div className="md:w-1/2 bg-gray-700 px-8 py-6">
                        <h2 className="text-2xl font-semibold mb-4 text-white">Contact Details</h2>
                        <p className="text-gray-400 mb-4">
                            Colab Farming, new sahyadry,<br />
                            Vadgaon Bk, Pune
                        </p>
                        <p className="text-gray-400 mb-4">
                            <abbr title="Phone">P</abbr>: +91 8483924998
                        </p>
                        <p className="text-gray-400 mb-4">
                            <abbr title="Email">E</abbr>: <a href="mailto:colabfarm@gmail.com" className="text-blue-500 hover:underline">colabfarm@gmail.com</a>
                        </p>
                        <p className="text-gray-400 mb-4">
                            <abbr title="Hours">H</abbr>: Monday - Saturday: 9:00 AM to 5:00 PM
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
