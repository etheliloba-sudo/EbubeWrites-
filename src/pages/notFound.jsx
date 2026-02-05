import { Link } from '@tanstack/react-router';

export default function NotFound() {
  return (
    <div className="card" style={{ textAlign: 'center', padding: 32 }}>
      <h2>You've lost your way</h2>
      <p style={{ color: '#c5cedc' }}>We could not find that page. Try heading back to the homepage.</p>
      <Link to="/" className="btn">
        Back home
      </Link>
    </div>
  );
}