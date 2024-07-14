import aImage from "../images/about.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-4 lg:px-20">
            <h1 className="text-4xl font-semibold text-center my-8">About Us</h1>
            <div className="about-main mt-8 md:flex items-center">
                <div className="md:w-1/2">
                    <img src={aImage} alt="About Image" className="mx-auto w-full rounded-md mb-4 md:mb-0  max-w-xl" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-semibold mb-4">About Modern Business</h2>
                    <p className="mb-4">Welcome to Collaborative Farming!</p>
                    <p className="mb-4">At Collaborative Farming, we believe in the power of community and cooperation to transform agriculture.</p>
                    <p className="mb-4">Our platform brings together farmers, landowners, and agricultural enthusiasts to cultivate a shared vision of sustainable and prosperous farming practices.</p>
                    <p className="mb-4">With a focus on collaboration, innovation, and stewardship of the land, we facilitate partnerships and connections that enable farmers to access resources, expertise, and support networks necessary for success.</p>
                    <p className="mb-4">Whether youre a seasoned farmer looking to expand your operations, a landowner seeking to utilize your property for agricultural purposes, or simply passionate about sustainable agriculture, Collaborative Farming provides the tools, knowledge, and community you need to thrive.</p>
                    <p className="mb-4">Join us in reimagining the future of farming, where collaboration is the key to unlocking greater productivity, profitability, and sustainability for all. Together, we can cultivate a brighter future for agriculture and our planet.</p>
                </div>
            </div>
        </div>
  );
}

export default About;
