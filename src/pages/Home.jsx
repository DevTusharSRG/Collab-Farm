import aImage from "../images/1.jpg";
import abImage from "../images/blog.cta1.jpg";

const Home = () => {
  return (
    <>
      <header className="slider-main relative">
        <div
          className="carousel-item h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${aImage})` }}
        >
          <div className="carousel-caption absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-black text-white p-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Farming Sector
            </h1>
            <p className="text-lg md:text-xl mb-8">
              A Great Time to engage with agriculture
            </p>
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
            >
              Explore Now
            </a>
          </div>
        </div>
      </header>
      <main className="bg-gray-100">
        <div className="container mx-auto px-4 lg:px-20">
          <section id="about">
            <div className="bg-gray-100 py-12">
              <div className="container mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  About Us
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <div className="md:w-1/2 px-4 mb-6 md:mb-0">
                    <img
                      className="w-full rounded-lg"
                      src={abImage}
                      alt="Collaborative Farming"
                    />
                  </div>
                  <div className="md:w-1/2 px-4">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Welcome to Collaborative Farming
                      </h2>
                      <p className="text-lg mb-6">
                        Embrace a collaborative approach to farming, where
                        farmers come together to share resources, knowledge,
                        and expertise to cultivate a sustainable future.
                      </p>
                      <h5 className="text-lg font-semibold mb-2">
                        Our Approach
                      </h5>
                      <ul className="list-disc list-inside mb-6">
                        <li>
                          Collaborative resource sharing for enhanced efficiency.
                        </li>
                        <li>
                          Pooling expertise to innovate farming practices.
                        </li>
                        <li>
                          Empowering farmers through collective decision-making.
                        </li>
                        <li>
                          Supporting community growth and prosperity.
                        </li>
                        <li>
                          Promoting environmental stewardship through shared
                          responsibility.
                        </li>
                      </ul>
                      <p className="text-lg">
                        Join us in reshaping the future of agriculture, where
                        collaboration drives progress and sustainability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="bg-gray-100 py-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Pricing of Lands
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/3 px-4 mb-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex items-center justify-center bg-amber-700">
                      <div className="p-6">
                        <h1 className="text-4xl font-semibold text-white mb-4">
                          Sign up to check
                        </h1>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-4xl font-bold">2 lakh</div>
                      <div className="italic text-gray-600 mb-4">per annum</div>
                      <div className="italic text-gray-600 mb-4">
                        Start collaborating today!
                      </div>
                      <ul className="list-disc list-inside mb-4">
                        <li>Connect with fellow farmers</li>
                        <li>Access to shared resources</li>
                        <li>Collaborative projects</li>
                      </ul>
                      <a
                        href="signup.php"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
                      >
                        Sign Up Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 px-4 mb-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex items-center justify-center bg-amber-700">
                      <div className="p-6">
                        <h1 className="text-4xl font-semibold text-white mb-4">
                          Sign up to check
                        </h1>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-4xl font-bold">2 lakh</div>
                      <div className="italic text-gray-600 mb-4">per annum</div>
                      <div className="italic text-gray-600 mb-4">
                        Start collaborating today!
                      </div>
                      <ul className="list-disc list-inside mb-4">
                        <li>Connect with fellow farmers</li>
                        <li>Access to shared resources</li>
                        <li>Collaborative projects</li>
                      </ul>
                      <a
                        href="signup.php"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
                      >
                        Sign Up Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 px-4 mb-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex items-center justify-center bg-amber-700">
                      <div className="p-6">
                        <h1 className="text-4xl font-semibold text-white mb-4">
                          Sign up to check
                        </h1>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-4xl font-bold">2 lakh</div>
                      <div className="italic text-gray-600 mb-4">per annum</div>
                      <div className="italic text-gray-600 mb-4">
                        Start collaborating today!
                      </div>
                      <ul className="list-disc list-inside mb-4">
                        <li>Connect with fellow farmers</li>
                        <li>Access to shared resources</li>
                        <li>Collaborative projects</li>
                      </ul>
                      <a
                        href="signup.php"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
                      >
                        Sign Up Now
                      </a>
                    </div>
                  </div>
                </div>
                {/* Repeat the above pricing card components */}
              </div>
            </div>
          </section>
          
        </div>
      </main>
      
      
    </>
  );
};

export default Home;
