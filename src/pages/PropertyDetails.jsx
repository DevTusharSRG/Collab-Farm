import  { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';

function PropertyDetails() {
    const { pid } = useParams();
    
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                const response = await fetch(`https://collab-farm-server.onrender.com/getproperties/${pid}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setProperty(data);
                } else {
                    console.error('Failed to fetch property details');
                }
            } catch (error) {
                console.error('Error fetching property details:', error);
            }
        };

        fetchPropertyDetails();
    }, [pid]);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto mt-8 px-4 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <div className="">
                    <div>
                        <h1 className='text-4xl'>Property Details</h1>
                        <h2 className="text-3xl font-semibold mb-4">{property.propertyTitle}</h2>
                        <p className="mb-2"><strong>Address:</strong> {property.address}</p>
                        <p className="mb-2"><strong>Price:</strong> Rs {property.price}</p>
                        <p className="mb-2"><strong>Area:</strong> {property.area}</p>
                        <p className="mb-6"><strong>Description:</strong> {property.description}</p>
                        <p className="mb-2"><strong>Survey Number:</strong> {property.surveyNo}</p>
                        <p className="mb-2">
                            View (7/12): 
                            <a href={property.proof} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                Click Here!
                            </a>
                        </p>
                        <h3 className="text-xl mb-4">Images</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="aspect-w-4 aspect-h-3">
                                <img src={`${property.image1}`} className="object-cover w-full h-full" alt="Property Image" />
                            </div>
                            <div className="aspect-w-4 aspect-h-3">
                                <img src={`${property.image2}`} className="object-cover w-full h-full" alt="Property Image" />
                            </div>
                            <div className="aspect-w-4 aspect-h-3">
                                <img src={`${property.image3}`} className="object-cover w-full h-full" alt="Property Image" />
                            </div>
                        </div>
                        <div className='mt-4 mb-6'>
                        <Link to={`/application/${property._id}`} className="bg-blue-500 text-white py-2 px-4 rounded">Apply now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyDetails;
