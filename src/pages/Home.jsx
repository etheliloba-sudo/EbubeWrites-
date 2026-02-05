import { PostCard } from '../components/PostCard';


export default function Home({ posts }) {
  return (
    <section>
      <div className="hero">
        <div>
          <h1>Stories for focused builders</h1>
          <p>Short, human notes on design, shipping, and staying kind to yourself while you ship.</p>
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
