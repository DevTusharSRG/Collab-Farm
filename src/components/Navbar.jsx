import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { userData } = useAuth();
  const user = userData?.type;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-20">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-gray-800 text-xl font-bold">Collaborative Farming</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          <NavLink exact to="/" activeClassName="active" className="text-gray-800 hover:text-gray-600" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" activeClassName="active" className="text-gray-800 hover:text-gray-600" onClick={closeMenu}>About</NavLink>
          <NavLink to="/service" activeClassName="active" className="text-gray-800 hover:text-gray-600" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/contact" activeClassName="active" className="text-gray-800 hover:text-gray-600" onClick={closeMenu}>Contact</NavLink>
          {isLoggedIn ? (
            <>
              {user === 'company' ? (
                <NavLink to="/userproperties" activeClassName="active" className="text-gray-800 hover:text-gray-600" onClick={closeMenu}>Properties</NavLink>
              ) : (
                <NavLink to="/addproperty" activeClassName="active" className="text-gray-800 hover:text-gray-600" onClick={closeMenu}>Add Property</NavLink>
              )}
              <NavLink to="/logout" activeClassName="active" className="text-gray-800 hover:text-gray-600" onClick={closeMenu}>Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/register" activeClassName="active" className="text-gray-800 hover:text-gray-600" onClick={closeMenu}>Register</NavLink>
              <NavLink to="/login" activeClassName="active" className="text-gray-800 hover:text-gray-600" onClick={closeMenu}>Login</NavLink>
            </>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Overlay for closing menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>
        )}

        {/* Sliding Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden fixed inset-y-0 top-0 left-0 bg-gray-200 w-64 z-20 overflow-y-auto">
            <div className="p-4">
              <NavLink exact to="/" activeClassName="active" className="text-gray-800 hover:text-gray-600 block py-2" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/about" activeClassName="active" className="text-gray-800 hover:text-gray-600 block py-2" onClick={closeMenu}>About</NavLink>
              <NavLink to="/service" activeClassName="active" className="text-gray-800 hover:text-gray-600 block py-2" onClick={closeMenu}>Services</NavLink>
              <NavLink to="/contact" activeClassName="active" className="text-gray-800 hover:text-gray-600 block py-2" onClick={closeMenu}>Contact</NavLink>
              {isLoggedIn ? (
                <>
                  
                  {user === 'company' ? (
                    <NavLink to="/userproperties" activeClassName="active" className="text-gray-800 hover:text-gray-600 block py-2" onClick={closeMenu}>Properties</NavLink>
                  ) : (
                    <NavLink to="/addproperty" activeClassName="active" className="text-gray-800 hover:text-gray-600 block py-2" onClick={closeMenu}>Add Property</NavLink>
                  )}
                  <NavLink to="/logout" activeClassName="active" className="text-gray-800 hover:text-gray-600 block py-2" onClick={closeMenu}>Logout</NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/register" activeClassName="active" className="text-gray-800 hover:text-gray-600 block py-2" onClick={closeMenu}>Register</NavLink>
                  <NavLink to="/login" activeClassName="active" className="text-gray-800 hover:text-gray-600 block py-2" onClick={closeMenu}>Login</NavLink>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
