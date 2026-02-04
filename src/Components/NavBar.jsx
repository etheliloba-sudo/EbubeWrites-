import { Link } from '@tanstack/react-router';

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <span className="dot" />
        ebube.writes
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link to="/" className="btn">
          Home
        </Link>
      </div>
    </nav>
  );
}