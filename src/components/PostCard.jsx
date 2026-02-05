import { Link } from '@tanstack/react-router';

export function PostCard({ post }) {
  return (
    <article className="card">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="meta-row">
        <span className="badge">{post.readingTime}</span>
        <span>{post.date}</span>
      </div>
      <div style={{ marginTop: 16 }}>
        <Link to="/posts/$slug" params={{ slug: post.slug }} className="btn">
          Read story
        </Link>
      </div>
    </article>
  );
}
