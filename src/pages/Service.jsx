import electricityImg from '../images/services-img-01.jpg';
// import irrigationImg from '../images/services-img-02.jpg';
// import laonImg from '../images/services-img-03.jpg';
import logo1 from '../images/logo_01.png';
import logo2 from '../images/logo_02.png';
import logo3 from '../images/logo_03.png';
import logo4 from '../images/logo_04.png';
import logo5 from '../images/logo_05.png';
import logo6 from '../images/logo_06.png';
import { useAuth } from '../store/auth';

const Service = () => {
    const { services } = useAuth();

    // Check if services is not available or is not an array
    if (!services || !Array.isArray(services) || services.length === 0) {
        // Render loading state or message
        return <div>Loading services...</div>;
    }

    return (
        <>
            <div className="container mx-auto px-4 lg:px-20">
                <h1 className="text-3xl font-semibold mb-4 mt-4">Our Best Services</h1>
                {/* Services Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.map((current, index) => {
                        const { provider, title, description } = current;
                        return (
                            <div className="col-lg-4 mb-4" key={index}>
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img className="w-full h-48 object-cover object-center" src={electricityImg} alt="Electricity Services" />
                                    <div className="p-4">
                                        <h4 className="text-xl font-semibold mb-2">{title}</h4>
                                        <p className="text-gray-700 mb-4">{description}</p>
                                        <p className="text-gray-700 mb-4"> <b>Provider</b> {provider}</p>
                                        <a href="https://www.agrosonaadhar.com/" className="inline-block px-4 py-2 bg-green-500 text-white rounded
                                        hover:bg-blue-600 transition duration-300">Get Service</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Our Customers */}
                <div className="my-8">
                    <h2 className="text-3xl font-semibold mb-4">Our Customers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="w-full h-auto" src={logo1} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="w-full h-auto" src={logo2} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="w-full h-auto" src={logo3} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="w-full h-auto" src={logo4} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="w-full h-auto" src={logo5} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="w-full h-auto" src={logo6} alt="" />
                        </div>
                        {/* Add more customer logos here */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
