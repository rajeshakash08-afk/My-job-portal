import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import LoginPage from "./login";
import SignupPage from "./signup";
import ApplyJob from "./pages/ApplyJob";
import CompanyDetails from "./pages/CompanyDetails";
import Profile from "./pages/Profile"
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
 
  const hideNavbarRoutes = ["/", "/signup"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* Navbar only if route is NOT login or signup */}
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<CompanyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/profile" element={<Profile/>}/>

      </Routes>

       {!shouldHideNavbar && <Footer />}
      </>
  );
}

export default App;