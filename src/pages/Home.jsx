import { PostCard } from '../components/PostCard';

export default function Home({ posts }) {
  return (
    <section>
      <div className="hero">
        <div>
          <h1>Notes from a reading life</h1>
          <p>
            Gentle reviews, reflections, and thoughts on books that linger,
            stories that comfort, unsettle, and quietly change us.
          </p>
        </div>
      </div>

      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
