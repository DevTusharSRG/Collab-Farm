import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Properties() {
    const [properties, setProperties] = useState([]);
    const [filterBuy, setFilterBuy] = useState('');
    const [filterPrice, setFilterPrice] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('https://collab-farm-server.onrender.com/getproperties', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setProperties(data);
                } else {
                    console.error('Failed to fetch properties');
                }
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    const handleFilterBuyChange = (e) => {
        setFilterBuy(e.target.value);
    };

    const handleFilterPriceChange = (e) => {
        setFilterPrice(e.target.value);
    };

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="mx-auto px-4 lg:px-20">
            {/* Banner */}
            <div className=" p-4">
                <div className="container mx-auto">
                    <span className="float-right">Home / Buy, Sale & Rent</span>
                    <h2 className="text-2xl font-semibold">Buy, Sale & Rent</h2>
                </div>
            </div>
            {/* End Banner */}

            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between mt-4">
                    {/* Filter form */}
                    <div className="w-full md:w-1/4 p-4">
                        {/* Filter form content */}
                        <div className="bg-gray-200 shadow p-4">
                            <h4 className="text-lg mb-4">Search for</h4>
                            <div className="mb-4">
                                <input type="text" name="search" className="w-full border py-2 px-3 mb-2" placeholder="Search for Properties" onChange={handleSearchQueryChange} />
                                <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded">Search</button>
                            </div>
                            <div className="mb-4 flex">
                                <div className="w-1/2 pr-2">
                                    <select name="buy" className="w-full border py-2 px-3" onChange={handleFilterBuyChange}>
                                        <option value="">All</option>
                                        <option value="buy">Buy</option>
                                        <option value="rent">Rent</option>
                                    </select>
                                </div>
                                <div className="w-1/2 pl-2">
                                    <select name="price" className="w-full border py-2 px-3" onChange={handleFilterPriceChange}>
                                        <option value="">Price</option>
                                        <option value="10000">Rs 0 - Rs100,000</option>
                                        <option value="110000">Rs 100,000 - Rs200,000</option>
                                        <option value="220000">Rs 200,000 - Rs300,000</option>
                                    </select>
                                </div>
                            </div>
                            <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Find Now</button>
                        </div>

                    </div>

                    {/* Property Listings */}
                    <div className="w-full md:w-3/4">
                        <div className="text-lg mb-4">Showing: {properties.length} of 100</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {properties.map(property => (
                                <div key={property.id} className="mb-4">
                                    <div className="bg-white shadow p-4 ">
                                        <img src={`${property.image1}`} alt="Property Image" className="w-full h-48 object-cover mb-4" />
                                        <h5 className="text-xl font-semibold mb-2">{property.title}</h5>
                                        <p className="text-lg mb-2">{property.price} Rs</p>
                                        <p className="mb-4">{property.area}</p>
                                        {/* Use Link component to navigate to PropertyDetails page */}
                                        <Link to={`/propertydetails/${property._id}`} className="bg-blue-500 text-white py-2 px-4 rounded">View Details</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Properties;
