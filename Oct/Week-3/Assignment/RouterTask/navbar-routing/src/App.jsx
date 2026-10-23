
import { Link, Routes, Route, useParams, useSearchParams } from "react-router-dom";

// Navbar component
function Navbar() {
  return (
    <nav className="navbar">
      <h2>My React App</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Link to="/user/101?name=Pratikshya&course=MCA&city=Bhubaneswar">
          User Details
        </Link>
      </div>
    </nav>
  );
}

// Home page
function Home() {
  return (
    <div className="container">
      <h1>Welcome to Home Page</h1>
      <p>Click the button to view user details.</p>

      <Link
        className="btn"
        to="/user/101?name=Pratikshya&course=MCA&city=Bhubaneswar"
      >
        View User Details
      </Link>
    </div>
  );
}

// About page
function About() {
  return (
    <div className="container">
      <h1>About Page</h1>
      <p>This is a React Router demonstration project.</p>
    </div>
  );
}

// User details page
function UserDetails() {
  // Get parameter from the URL path
  const { id } = useParams();

  // Get query parameters from the URL
  const [searchParams] = useSearchParams();

  // Get every query parameter
  const allQueries = Array.from(searchParams.entries());

  return (
    <div className="container">
      <h1>User Details Page</h1>

      <h2>Route Parameter</h2>
      <p>User ID: {id}</p>

      <h2>All Query Parameters</h2>

      {allQueries.length > 0 ? (
        <div>
          {allQueries.map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
      ) : (
        <p>No query parameters found.</p>
      )}

      <h2>Send Different Values</h2>

      <Link
        className="btn"
        to="/user/202?name=Rahul&course=BTech&city=Cuttack&year=2026"
      >
        View Another User
      </Link>
    </div>
  );
}

// Main application and routing
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}
