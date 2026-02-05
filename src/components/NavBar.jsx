import { Link } from '@tanstack/react-router';
import Logo from '../assets/logo.png';

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={Logo} width={48} height={48}/>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/about" className="btn">
          About
        </Link>
      </div>
    </nav>
  );
}