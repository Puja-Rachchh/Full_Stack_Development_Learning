import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";
import Login from "./Login";
import Dasboard from "./dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App(){
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to my React application.</p>
      <Router>
        <Link to='/home'>Home</Link><br />
        <Link to='/about'>About</Link><br />
        <Link to='/contact'>Contact</Link><br />
        <Link to='/signup'>Signup</Link><br />
        <Link to='/login'>Login</Link><br />
        <Link to='/dashboard'>Dashboard</Link><br />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dasboard />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cake/rajkot" element={<h1>Cake in Rajkot</h1>} />
          <Route path="/cake/surat" element={<h1>Cake in Surat</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;