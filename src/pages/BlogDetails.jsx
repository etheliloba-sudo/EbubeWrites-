import { Link, useNavigate } from '@tanstack/react-router';

export default function Post({ post }) {
  const navigate = useNavigate();

  return (
    <article className="card" style={{ padding: 28 }}>
      <div className="meta-row" style={{ marginBottom: 14 }}>
        <span className="badge">{post.readingTime}</span>
        <span>{post.date}</span>
      </div>
      <h1 style={{ marginTop: 0 }}>{post.title}</h1>
      <div className="tag-row">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="post-body">{post.content}</div>
      <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
        <button
          className="btn"
          onClick={() => {
            if (window.history.length > 1) {
              window.history.back();
            } else {
              navigate({ to: '/' });
            }
          }}
        >
          Go back
        </button>
        <Link to="/" className="btn" search={{}}>
          Home
        </Link>
      </div>
    </article>
  );
}
