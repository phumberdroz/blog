import { PostList, type Post } from './PostList';
import { PROFILE } from '../consts';

export function HomePage({ posts }: { posts: Post[] }) {
  return (
    <main id="main" className="site-column home-main">
      <section className="introduction">
        <h1>{PROFILE.name}</h1>
        <p>Notes on software, building, and things I’m learning.</p>
      </section>
      <section className="writing-section" aria-label="Writing">
        <PostList posts={posts} />
      </section>
    </main>
  );
}
