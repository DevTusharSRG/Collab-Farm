import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Logout } from "./pages/Logout";
import { useAuth } from "./store/auth";
import Mainframe from "./components/Mainframe";
import AdminApp from "./AdminApp";
import { Admin_users } from "./pages/Admin_users";
import { Admin_contacts } from "./pages/Admin_contacts";
import { Admin_Applications } from "./pages/Admin_Applications";
import { Admin_property } from "./pages/Admin_property";
import { Admin_services } from "./pages/Admin_services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ApplicationForm from "./pages/ApplicationForm";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import AddProperty from "./pages/AddProperty";

const App = () => {
    const { userData } = useAuth();
    const admin = userData.isAdmin;
    

    return (
        <BrowserRouter>
            {!admin && <Navbar />}
            <Routes>
                {admin ? (
                    <Route path="/admin/*" element={<AdminApp />}>
                        <Route index element={<Mainframe />} />
                        <Route path="users" element={<Admin_users />} />
                        <Route path="contacts" element={<Admin_contacts />} />
                        <Route path="applications" element={<Admin_Applications />} />
                        <Route path="properties" element={<Admin_property />} />
                        <Route path="services" element={<Admin_services />} />
                    </Route>
                ) : (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/application/:pid" element={<ApplicationForm />} />
                        <Route path="/userproperties" element={<Properties />} />
                        <Route path="/propertydetails/:pid" element={<PropertyDetails />} />
                        <Route path="/addproperty" element={<AddProperty />} />
                        
                    </>
                )}
            </Routes>
            {!admin && <Footer />}
            
        </BrowserRouter>
    );
}

export default App;
