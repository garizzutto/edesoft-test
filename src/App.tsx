import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import UsersList from "./screens/UsersList";

function App() {
  return (
    <Router>
      <ul className="header">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/users">Users</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
