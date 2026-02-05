import { Link, useNavigate } from '@tanstack/react-router';

export default function Post({ post }) {
  const navigate = useNavigate();

  if (!post) {
    return (
      <article className="card" style={{ padding: 28 }}>
        <h1>Post not found</h1>
        <p>The post you’re looking for doesn’t exist or couldn’t be loaded.</p>
        <button className="btn" onClick={() => navigate({ to: '/' })}>
          Go home
        </button>
      </article>
    );
  }

  return (
    <article className="card" style={{ padding: 28 }}>
      <div className="meta-row" style={{ marginBottom: 14 }}>
        {post.readingTime && <span className="badge">{post.readingTime}</span>}
        <span>{post.date}</span>
      </div>

      <h1 style={{ marginTop: 0 }}>{post.title}</h1>

      <div className="tag-row">
        {Array.isArray(post.tags) &&
          post.tags.map((tag) => (
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
