import { PostList, type Post } from './PostList';

export function BlogIndexPage({ posts }: { posts: Post[] }) {
  return (
    <main id="main" className="site-column archive-main">
      <div className="introduction">
        <p className="eyebrow">The archive</p>
        <h1>Writing.</h1>
        <p>Ideas, notes, and things learned along the way.</p>
      </div>
      <section aria-label="All posts">
        <PostList posts={posts} />
      </section>
    </main>
  );
}
