const Footer = ()=>{
return <>
<footer className="bg-gray-800 text-white py-12">
        {/* Footer content goes here */}
        
        <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h5 className="text-xl font-bold mb-4">Find us</h5>
            <p className="mb-2">Connect with us to learn more about collaborative farming and how we 
            can work together to cultivate a sustainable future.</p>
            <p><i className="fas fa-location-arrow"></i> Colab Farming, New Sahyadry, Vadgaon Bk, Pune</p>
            <p><i className="fas fa-phone"></i> +91 8483924998</p>
            <p><i className="fas fa-envelope"></i> colabfarm@gmail.com</p>
          </div>
          <div className="col-span-1">
            <h5 className="text-xl font-bold mb-4">Quick links</h5>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-xl font-bold mb-4">Follow us</h5>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center">
                  <i className="fab fa-twitter mr-2"></i> Twitter
                </a>
                <p className="text-sm">Stay updated with the latest news and updates from Collaborative Farming. Follow us on Twitter.</p>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <i className="fab fa-facebook-f mr-2"></i> Facebook
                </a>
                <p className="text-sm">Join our community on Facebook for discussions, events, and more.</p>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-center items-center">
          <p className="text-center">All Rights Reserved. &copy; 2024 Collaborative Farming | Design By: <a href="#">Collaborative Farming</a></p>
          <ul className="social_footer_ul flex space-x-4">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
</>

}

export default Footer