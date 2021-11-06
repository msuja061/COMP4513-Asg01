import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div>Shakes Plays</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/default">Default View</Link>
          </li>
          <li>
            <Link to="/details">Play Details</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
