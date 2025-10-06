import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo + Title + Tagline */}
        <Link to="/" className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Books Beyond Borders" className="h-10 w-10 object-contain"/>
            <span className="text-2xl font-bold text-gradient" style={{ fontFamily: 'Playfair Display, serif' }}>
              Books Beyond Borders
            </span>
          </div>
          <span className="text-sm text-gray-600 italic text-shadow">
            Turning pages, sparking dreams, spreading happiness. ✨
          </span>
        </Link>

        {/* Navigation */}
        <div className="space-x-6 flex items-center">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/work" className="hover:text-blue-600">Our Work</Link>
          <Link to="/get-involved" className="hover:text-blue-600">Get Involved</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link 
            to="/donate" 
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-semibold"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

